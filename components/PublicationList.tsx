import type { Publication } from "@/lib/publications";
import { formatAuthors } from "@/lib/publications";

type PublicationListProps = {
  publications: Publication[];
  compact?: boolean;
};

export function PublicationList({
  publications,
  compact = false,
}: PublicationListProps) {
  return (
    <ol className={compact ? "publication-list compact" : "publication-list"}>
      {publications.map((publication) => (
        <li className="publication-item" key={publication.id}>
          <div className="publication-main">
            <p className="publication-meta">
              <span>{publication.year || "Undated"}</span>
              <span>{publication.typeLabel}</span>
              {publication.status === "forthcoming" ? (
                <span>Forthcoming</span>
              ) : null}
            </p>
            <h3>{publication.title}</h3>
            <p className="authors">{formatAuthors(publication.authors)}</p>
            <p className="venue">
              {[publication.venue, publication.publisher, publication.series]
                .filter(Boolean)
                .filter((value, index, values) => values.indexOf(value) === index)
                .join(" · ")}
            </p>
            {publication.cleanupNote ? (
              <p className="cleanup-note">{publication.cleanupNote}</p>
            ) : null}
          </div>
          <div className="publication-links" aria-label="Publication links">
            <a href={publication.halUrl}>HAL</a>
            {publication.pdfUrl ? <a href={publication.pdfUrl}>PDF</a> : null}
            {publication.doi ? (
              <a href={`https://doi.org/${publication.doi}`}>DOI</a>
            ) : null}
            {publication.alternateHalUrls.map((alternate) => (
              <a href={alternate.url} key={alternate.halId}>
                {alternate.halId}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
