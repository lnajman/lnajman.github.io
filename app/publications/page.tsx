import type { Metadata } from "next";
import Link from "next/link";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import {
  formatGeneratedDate,
  publications,
  publicationsData,
} from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Laurent Najman, generated from HAL and grouped by year.",
};

export default function PublicationsPage() {
  const typeEntries = Object.entries(publicationsData.byType).sort(
    ([, a], [, b]) => b - a,
  );

  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/publications" aria-current="page">
            Publications
          </Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell">
        <p className="eyebrow">HAL-powered bibliography</p>
        <h1>Publications</h1>
        <p>
          This page is generated from HAL using the author id{" "}
          <code>laurent-najman</code> plus exact-name matching, then deduplicated
          with a small manual override file.
        </p>
      </section>

      <section className="section-shell split-section">
        <div className="stats-grid wide-stats" aria-label="HAL data summary">
          <div>
            <strong>{publicationsData.counts.rawHalRecords}</strong>
            <span>raw HAL records</span>
          </div>
          <div>
            <strong>{publicationsData.counts.displayedPublications}</strong>
            <span>displayed publications</span>
          </div>
          <div>
            <strong>{publicationsData.counts.manualDuplicateGroups}</strong>
            <span>manual duplicate merge</span>
          </div>
        </div>
        <p className="data-note large-note">
          Generated {formatGeneratedDate(publicationsData.generatedAt)}. The
          confirmed duplicate merge is the operating-system book indexed under
          both HAL and INRIA HAL identifiers.
        </p>
      </section>

      <section className="section-shell type-summary">
        <h2>Publication Types</h2>
        <ul>
          {typeEntries.map(([type, count]) => (
            <li key={type}>
              <span>{type}</span>
              <strong>{count}</strong>
            </li>
          ))}
        </ul>
      </section>

      {publicationsData.duplicateCandidates.length ? (
        <section className="section-shell audit-panel">
          <h2>Duplicate Review Queue</h2>
          <p>
            These are same-year, same-type, same-title clusters that remain
            unmerged until reviewed.
          </p>
          <ul>
            {publicationsData.duplicateCandidates.map((candidate) => (
              <li key={`${candidate.year}-${candidate.title}`}>
                <div>
                  <strong>{candidate.title}</strong>
                  <span>
                    {candidate.year} · {candidate.typeLabel}
                  </span>
                </div>
                <div className="candidate-links">
                  {candidate.publications.map((publication) => (
                    <a href={publication.halUrl} key={publication.halId}>
                      {publication.halId}
                      {publication.venue ? ` · ${publication.venue}` : ""}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section-shell all-publications">
        <div className="section-heading">
          <p className="eyebrow">Complete list</p>
          <h2>Search and filter</h2>
        </div>
        <PublicationsExplorer publications={publications} />
      </section>
    </main>
  );
}
