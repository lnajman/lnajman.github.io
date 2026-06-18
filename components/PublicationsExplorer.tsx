"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/lib/publications";
import { PublicationList } from "@/components/PublicationList";

type PublicationsExplorerProps = {
  publications: Publication[];
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function groupByYear(publications: Publication[]) {
  return publications.reduce<Record<string, Publication[]>>((acc, publication) => {
    const year = String(publication.year || "Undated");
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {});
}

const categoryFilters = [
  { label: "All", value: "all", types: [] },
  { label: "Journal articles", value: "journal", types: ["Journal article"] },
  { label: "Books", value: "books", types: ["Book"] },
  {
    label: "Conference papers",
    value: "conferences",
    types: ["Conference paper"],
  },
  { label: "Book chapters", value: "chapters", types: ["Book chapter"] },
  { label: "Reports", value: "reports", types: ["Report"] },
  {
    label: "Special issues & proceedings",
    value: "issues-proceedings",
    types: ["Special issue", "Proceedings"],
  },
  {
    label: "Theses & habilitation",
    value: "theses",
    types: ["Thesis", "HDR thesis"],
  },
  {
    label: "Other publications",
    value: "other-publications",
    types: ["Other", "Patent", "Poster"],
  },
];

export function PublicationsExplorer({
  publications,
}: PublicationsExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [year, setYear] = useState("all");
  const [status, setStatus] = useState<"all" | "published" | "forthcoming">(
    "all",
  );

  const types = useMemo(
    () => [...new Set(publications.map((publication) => publication.typeLabel))],
    [publications],
  );
  const typeCounts = useMemo(
    () =>
      publications.reduce<Record<string, number>>(
        (acc, publication) => {
          acc.all += 1;
          acc[publication.typeLabel] = (acc[publication.typeLabel] || 0) + 1;
          return acc;
        },
        { all: 0 },
      ),
    [publications],
  );
  const categoryCounts = useMemo(
    () =>
      categoryFilters.reduce<Record<string, number>>((acc, publicationType) => {
        acc[publicationType.value] =
          publicationType.value === "all"
            ? publications.length
            : publicationType.types.reduce(
                (sum, currentType) => sum + (typeCounts[currentType] || 0),
                0,
              );
        return acc;
      }, {}),
    [publications.length, typeCounts],
  );
  const visibleCategoryFilters = categoryFilters.filter(
    (publicationType) =>
      publicationType.value === "all" || categoryCounts[publicationType.value],
  );
  const years = useMemo(
    () =>
      [
        ...new Set(
          publications.map((publication) => String(publication.year || "Undated")),
        ),
      ].sort((a, b) => Number(b) - Number(a)),
    [publications],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query);
    const categoryFilter = categoryFilters.find(
      (publicationType) => publicationType.value === category,
    );

    return publications.filter((publication) => {
      const haystack = normalize(
        [
          publication.title,
          publication.authors.join(" "),
          publication.venue,
          publication.publisher,
          publication.year ? String(publication.year) : "",
          publication.halId,
        ].join(" "),
      );

      return (
        (!normalizedQuery || haystack.includes(normalizedQuery)) &&
        (!categoryFilter ||
          categoryFilter.value === "all" ||
          categoryFilter.types.includes(publication.typeLabel)) &&
        (type === "all" || publication.typeLabel === type) &&
        (year === "all" || String(publication.year || "Undated") === year) &&
        (status === "all" || publication.status === status)
      );
    });
  }, [category, publications, query, status, type, year]);

  const grouped = groupByYear(filtered);
  const filteredYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));
  const hasFilters =
    Boolean(query.trim()) ||
    category !== "all" ||
    type !== "all" ||
    year !== "all" ||
    status !== "all";
  const activeCategory = categoryFilters.find(
    (publicationType) => publicationType.value === category,
  );
  const activeTypeLabel =
    type !== "all" ? type : category !== "all" ? activeCategory?.label : "";

  return (
    <div className="publications-explorer">
      <div className="type-shortcuts" aria-label="Publication type shortcuts">
        {visibleCategoryFilters.map((publicationType) => (
          <button
            key={publicationType.value}
            type="button"
            aria-pressed={category === publicationType.value}
            onClick={() => {
              setCategory(publicationType.value);
              setType("all");
            }}
          >
            <span>{publicationType.label}</span>
            <strong>{categoryCounts[publicationType.value]}</strong>
          </button>
        ))}
      </div>

      <div className="filter-panel" aria-label="Publication filters">
        <label className="search-field">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Title, author, venue, HAL id"
          />
        </label>

        <label>
          <span>Type</span>
          <select
            value={type}
            onChange={(event) => {
              setType(event.target.value);
              setCategory("all");
            }}
          >
            <option value="all">All types</option>
            {types.map((publicationType) => (
              <option key={publicationType} value={publicationType}>
                {publicationType}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="all">All years</option>
            {years.map((publicationYear) => (
              <option key={publicationYear} value={publicationYear}>
                {publicationYear}
              </option>
            ))}
          </select>
        </label>

        <div className="status-toggle" aria-label="Publication status">
          <span>Status</span>
          <div>
            {(["all", "published", "forthcoming"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={status === option}
                onClick={() => setStatus(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="result-bar">
        <p>
          {activeTypeLabel ? <span>{activeTypeLabel}: </span> : null}
          <strong>{filtered.length}</strong> of {publications.length} publications
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setType("all");
              setYear("all");
              setStatus("all");
            }}
          >
            Reset
          </button>
        ) : null}
      </div>

      {filtered.length ? (
        <div className="year-list">
          {filteredYears.map((publicationYear, index) => (
            <details
              key={publicationYear}
              className="year-group"
              open={hasFilters || index < 4}
            >
              <summary>
                <span>{publicationYear}</span>
                <strong>{grouped[publicationYear].length}</strong>
              </summary>
              <PublicationList publications={grouped[publicationYear]} />
            </details>
          ))}
        </div>
      ) : (
        <p className="empty-results">No publications match these filters.</p>
      )}
    </div>
  );
}
