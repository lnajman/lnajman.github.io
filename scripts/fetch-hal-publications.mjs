import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const overridesPath = resolve(root, "data/publication-overrides.json");
const outputPath = resolve(root, "data/generated/publications.json");

const halQuery =
  'authIdHal_s:laurent-najman OR authFullName_s:"Laurent Najman"';

const fields = [
  "docid",
  "halId_s",
  "uri_s",
  "title_s",
  "authFullName_s",
  "authIdHal_s",
  "producedDateY_i",
  "publicationDate_s",
  "docType_s",
  "journalTitle_s",
  "conferenceTitle_s",
  "bookTitle_s",
  "publisher_s",
  "series_s",
  "page_s",
  "isbn_s",
  "doiId_s",
  "files_s",
  "label_s",
];

function buildHalUrl() {
  const params = new URLSearchParams({
    q: halQuery,
    rows: "1000",
    sort: "producedDateY_i desc,publicationDate_s desc",
    fl: fields.join(","),
    wt: "json",
  });

  return `https://api.archives-ouvertes.fr/search/?${params.toString()}`;
}

async function fetchText(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    let response;
    try {
      response = await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timeout);
    }
    if (!response.ok) {
      throw new Error(`HAL responded with ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    const fallback = execFileSync("curl", ["-sL", "--max-time", "30", url], {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    });
    if (!fallback.trim()) {
      throw error;
    }
    return fallback;
  }
}

function first(value) {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function publicationYear(doc) {
  if (doc.producedDateY_i) {
    return Number(doc.producedDateY_i);
  }
  const date = doc.publicationDate_s || "";
  const match = date.match(/^(\d{4})/);
  return match ? Number(match[1]) : null;
}

function typeLabel(type) {
  const labels = {
    ART: "Journal article",
    COMM: "Conference paper",
    COUV: "Book chapter",
    OUV: "Book",
    HDR: "HDR thesis",
    REPORT: "Report",
    PROCEEDINGS: "Proceedings",
    POSTER: "Poster",
    ISSUE: "Special issue",
    PATENT: "Patent",
    THESE: "Thesis",
    UNDEFINED: "Other",
  };

  return labels[type] || type || "Publication";
}

function isForthcoming(publicationDate, year) {
  const today = new Date();
  const currentYear = today.getUTCFullYear();
  const currentMonth = today.getUTCMonth() + 1;

  if (year && year > currentYear) {
    return true;
  }

  const fullDate = publicationDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (fullDate) {
    return new Date(`${publicationDate}T00:00:00Z`) > today;
  }

  const monthDate = publicationDate.match(/^(\d{4})-(\d{2})$/);
  if (monthDate) {
    const [, dateYear, dateMonth] = monthDate.map(Number);
    return (
      dateYear > currentYear ||
      (dateYear === currentYear && dateMonth > currentMonth)
    );
  }

  return false;
}

function venueFromDoc(doc) {
  const publisher = Array.isArray(doc.publisher_s)
    ? doc.publisher_s.join(", ")
    : doc.publisher_s;

  return (
    doc.journalTitle_s ||
    doc.conferenceTitle_s ||
    doc.bookTitle_s ||
    publisher ||
    ""
  );
}

function toPublication(doc, overrides = {}, sourceDocs = [doc]) {
  const primaryHalId = overrides.primaryHalId || doc.halId_s;
  const primaryDoc =
    sourceDocs.find((source) => source.halId_s === primaryHalId) || doc;
  const sourceHalIds = sourceDocs.map((source) => source.halId_s);
  const uri = primaryDoc.uri_s || `https://hal.science/${primaryHalId}`;

  const year = overrides.year || publicationYear(primaryDoc);
  const publicationDate =
    overrides.publicationDate || primaryDoc.publicationDate_s || "";

  return {
    id: overrides.id || primaryHalId,
    halId: primaryHalId,
    sourceHalIds,
    title: overrides.title || first(primaryDoc.title_s) || "Untitled",
    authors: overrides.authors || primaryDoc.authFullName_s || [],
    year,
    publicationDate,
    status: isForthcoming(publicationDate, year) ? "forthcoming" : "published",
    type: overrides.docType || primaryDoc.docType_s || "",
    typeLabel: typeLabel(overrides.docType || primaryDoc.docType_s),
    venue:
      overrides.venue ||
      venueFromDoc(primaryDoc) ||
      overrides.publisher ||
      "",
    publisher: overrides.publisher || first(primaryDoc.publisher_s) || "",
    series: overrides.series || first(primaryDoc.series_s) || "",
    pages: overrides.pages || primaryDoc.page_s || "",
    isbn: overrides.isbn || primaryDoc.isbn_s || "",
    doi: overrides.doi || primaryDoc.doiId_s || "",
    pdfUrl: first(primaryDoc.files_s) || "",
    halUrl: uri,
    alternateHalUrls: sourceDocs
      .filter((source) => source.halId_s !== primaryHalId)
      .map((source) => ({
        halId: source.halId_s,
        url: source.uri_s || `https://hal.science/${source.halId_s}`,
      })),
    cleanupNote: overrides.note || "",
  };
}

function makeDuplicateCandidates(publications, mergedIds) {
  const groups = new Map();

  for (const publication of publications) {
    const key = [
      publication.year || "",
      publication.type || "",
      normalizeText(publication.title),
    ].join("::");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(publication);
  }

  return [...groups.values()]
    .filter((group) => group.length > 1)
    .filter((group) =>
      group.every((publication) => !mergedIds.has(publication.halId)),
    )
    .map((group) => ({
      title: group[0].title,
      year: group[0].year,
      typeLabel: group[0].typeLabel,
      publications: group.map((publication) => ({
        halId: publication.halId,
        venue: publication.venue,
        halUrl: publication.halUrl,
      })),
    }));
}

const url = buildHalUrl();
let rawText;
try {
  rawText = await fetchText(url);
} catch (error) {
  if (existsSync(outputPath)) {
    console.warn(
      `Could not fetch HAL (${error.message}). Keeping existing generated publication data.`,
    );
    process.exit(0);
  }
  throw error;
}
const data = JSON.parse(rawText);
const docs = data.response.docs;
const overrides = JSON.parse(readFileSync(overridesPath, "utf8"));
const docsByHalId = new Map(docs.map((doc) => [doc.halId_s, doc]));
const handledHalIds = new Set();
const mergedHalIds = new Set();
const publications = [];

for (const group of overrides.duplicateGroups || []) {
  const sourceDocs = group.halIds
    .map((halId) => docsByHalId.get(halId))
    .filter(Boolean);

  if (!sourceDocs.length) {
    continue;
  }

  for (const source of sourceDocs) {
    handledHalIds.add(source.halId_s);
    mergedHalIds.add(source.halId_s);
  }

  publications.push(toPublication(sourceDocs[0], group, sourceDocs));
}

for (const doc of docs) {
  if (handledHalIds.has(doc.halId_s)) {
    continue;
  }
  handledHalIds.add(doc.halId_s);
  publications.push(toPublication(doc));
}

publications.sort((a, b) => {
  const yearDiff = (b.year || 0) - (a.year || 0);
  if (yearDiff !== 0) {
    return yearDiff;
  }
  return (b.publicationDate || "").localeCompare(a.publicationDate || "");
});

const byType = publications.reduce((acc, publication) => {
  acc[publication.typeLabel] = (acc[publication.typeLabel] || 0) + 1;
  return acc;
}, {});

const output = {
  generatedAt: new Date().toISOString(),
  source: {
    name: "HAL",
    query: halQuery,
    url,
  },
  counts: {
    rawHalRecords: data.response.numFound,
    fetchedHalRecords: docs.length,
    displayedPublications: publications.length,
    manualDuplicateGroups: overrides.duplicateGroups?.length || 0,
  },
  byType,
  duplicateCandidates: makeDuplicateCandidates(publications, mergedHalIds),
  publications,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);

console.log(
  `Fetched ${docs.length} HAL records and generated ${publications.length} displayed publications.`,
);
