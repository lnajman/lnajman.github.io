import publicationData from "@/data/generated/publications.json";

export type Publication = {
  id: string;
  halId: string;
  sourceHalIds: string[];
  title: string;
  authors: string[];
  year: number | null;
  publicationDate: string;
  status: "forthcoming" | "published";
  type: string;
  typeLabel: string;
  venue: string;
  publisher: string;
  series: string;
  pages: string;
  isbn: string;
  doi: string;
  pdfUrl: string;
  halUrl: string;
  alternateHalUrls: Array<{ halId: string; url: string }>;
  cleanupNote: string;
};

export type PublicationData = {
  generatedAt: string;
  source: {
    name: string;
    query: string;
    url: string;
  };
  counts: {
    rawHalRecords: number;
    fetchedHalRecords: number;
    displayedPublications: number;
    manualDuplicateGroups: number;
  };
  byType: Record<string, number>;
  duplicateCandidates: Array<{
    title: string;
    year: number | null;
    typeLabel: string;
    publications: Array<{ halId: string; venue: string; halUrl: string }>;
  }>;
  publications: Publication[];
};

export const publicationsData = publicationData as PublicationData;

export const publications = publicationsData.publications;

export function latestPublications(limit = 8) {
  return publications.slice(0, limit);
}

export function publicationsByYear() {
  return publications.reduce<Record<string, Publication[]>>((acc, publication) => {
    const year = String(publication.year || "Undated");
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {});
}

export function formatGeneratedDate(value: string) {
  if (!value) {
    return "not generated yet";
  }

  return `${new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value))} Paris time`;
}

export function formatAuthors(authors: string[]) {
  if (authors.length <= 6) {
    return authors.join(", ");
  }

  return `${authors.slice(0, 6).join(", ")} et al.`;
}
