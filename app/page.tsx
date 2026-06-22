import type { Metadata } from "next";
import Link from "next/link";
import {
  formatAuthors,
  formatGeneratedDate,
  latestPublications,
  publicationsData,
} from "@/lib/publications";
import { PublicationList } from "@/components/PublicationList";
import { ProfileLinks } from "@/components/ProfileLinks";
import { ResearchVisual } from "@/components/ResearchVisual";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Laurent Najman",
  },
  description:
    "Laurent Najman, professor in the Mathematics Department at Khalifa University, on leave from ESIEE Paris and Université Gustave Eiffel. Research in discrete mathematical morphology, graph-based image analysis, topology, optimization, and deep learning.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

const researchAreas = [
  "Discrete mathematical morphology",
  "Graph-based image analysis",
  "Hierarchies and trees",
  "Topology of discrete structures",
  "Discrete optimization",
  "Deep learning and interpretable AI",
];

const teachingItems = [
  "Artificial intelligence and deep learning",
  "Mathematical morphology",
  "Graph algorithms for image analysis",
  "Project supervision and research tutorials",
];

export default function Home() {
  const latest = latestPublications(7);
  const counts = publicationsData.counts;
  const firstPublication = latest[0];

  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/research">Research</Link>
          <Link href="/software">Software</Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Professor · Khalifa University · on leave from ESIEE Paris
          </p>
          <h1>Laurent Najman</h1>
          <p className="hero-lede">
            I am currently a professor in the Mathematics Department at Khalifa
            University, on leave from ESIEE Paris and Université Gustave Eiffel.
            My work focuses on the topology of discrete structures,
            mathematical morphology, graph-based image analysis, and
            deep learning.
          </p>
          <div className="hero-actions" aria-label="Key links">
            <Link className="primary-link" href="/publications">
              Publications from HAL
            </Link>
            <Link className="secondary-link" href="/bio">
              Bio and CV
            </Link>
            <Link className="secondary-link" href="/supervision">
              Supervision
            </Link>
          </div>
          <dl className="quick-facts" aria-label="Current affiliations">
            <div>
              <dt>Current position</dt>
              <dd>Khalifa University</dd>
            </div>
            <div>
              <dt>Department</dt>
              <dd>Mathematics</dd>
            </div>
            <div>
              <dt>On leave from</dt>
              <dd>ESIEE Paris / UGE</dd>
            </div>
          </dl>
          <div className="hero-profiles">
            <p>Profiles</p>
            <ProfileLinks compact />
          </div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Laurent Najman">
          <div className="portrait-card">
            <img
              src="/laurent-najman-portrait.jpeg"
              alt="Laurent Najman"
              width="1423"
              height="1600"
            />
            {firstPublication ? (
              <p>
                Latest HAL record: <strong>{firstPublication.year}</strong>,{" "}
                {formatAuthors(firstPublication.authors)}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-shell supervision-band" id="supervision">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Supervision</p>
            <h2>HDR and PhD thesis supervision</h2>
          </div>
          <p className="section-intro">
            Supervision is one of the visible threads of the site: HDRs, PhD
            theses, co-supervised projects in France and abroad, and current
            doctoral work in imaging, morphology, topology, graphs, deep
            learning, and ethical AI.
          </p>
          <p className="section-action">
            <Link className="text-link" href="/supervision">
              Open the supervision page
            </Link>
          </p>
        </div>
        <div
          className="supervision-stats compact"
          aria-label="Supervision summary"
        >
          <div>
            <strong>2</strong>
            <span>HDRs supervised</span>
          </div>
          <div>
            <strong>33</strong>
            <span>PhD students in France</span>
          </div>
          <div>
            <strong>4</strong>
            <span>PhD students abroad</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Current PhD projects</span>
          </div>
        </div>
      </section>

      <section className="section-shell research-band" id="research">
        <div className="section-heading row-heading visual-heading">
          <div>
            <p className="eyebrow">Research</p>
            <h2>Discrete structures for visual data</h2>
          </div>
          <ResearchVisual className="section-math-plate" variant="theme" />
        </div>
        <p className="section-intro">
          The research page gathers the main spine of the work: graph
          representations, hierarchies, simplicial complexes, segmentation,
          shape analysis, deep learning, and explainable AI.
        </p>
        <ul className="topic-grid">
          {researchAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className="section-action">
          <Link className="text-link" href="/research">
            Explore the research page
          </Link>
        </p>
      </section>

      <section className="section-shell software-band" id="software">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Software</p>
            <h2>Research software</h2>
          </div>
          <p className="section-intro">
            Software makes part of the research reusable: public code for
            hierarchical graph analysis, Morse-based topology, and persistent
            methods.
          </p>
          <p className="section-action">
            <Link className="text-link" href="/software">
              Open the software page
            </Link>
          </p>
        </div>
        <div className="software-summary" aria-label="Software summary">
          <div>
            <strong>Higra</strong>
            <span>Hierarchical Graph Analysis</span>
          </div>
          <div>
            <strong>
              Morse<wbr />
              Frames
            </strong>
            <span>Morse-based topology</span>
          </div>
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Publications</p>
            <h2>Generated from HAL</h2>
          </div>
          <p className="section-intro">
            Publications are fetched from HAL, merged with a small manual
            duplicate override file, then rendered statically for reliability.
          </p>
        </div>
        <div className="stats-grid" aria-label="Publication data summary">
          <div>
            <strong>{counts.rawHalRecords}</strong>
            <span>HAL records</span>
          </div>
          <div>
            <strong>{counts.displayedPublications}</strong>
            <span>displayed</span>
          </div>
          <div>
            <strong>{counts.manualDuplicateGroups}</strong>
            <span>
              {counts.manualDuplicateGroups === 1
                ? "merged duplicate"
                : "merged duplicates"}
            </span>
          </div>
        </div>
      </section>

      <section className="section-shell publication-preview">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2>Latest publications</h2>
          </div>
          <Link className="text-link" href="/publications">
            View all publications
          </Link>
        </div>
        <PublicationList publications={latest} compact />
        <p className="data-note">
          HAL data generated {formatGeneratedDate(publicationsData.generatedAt)}.
        </p>
      </section>

      <section className="section-shell teaching-band" id="teaching">
        <div className="section-heading">
          <p className="eyebrow">Teaching</p>
          <h2>Courses and tutorials</h2>
        </div>
        <ul className="teaching-list">
          {teachingItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="section-action">
          <Link className="text-link" href="/teaching">
            Open the teaching page
          </Link>
        </p>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <h2>Contact</h2>
          <p>
            Professor in the Mathematics Department at Khalifa University, on
            leave from ESIEE Paris and Université Gustave Eiffel.
          </p>
        </div>
        <div className="footer-link-column">
          <nav aria-label="Contact links">
            <a href="https://www.ku.ac.ae/">Khalifa University</a>
            <a href="https://www.esiee.fr/">ESIEE Paris</a>
            <a href="https://ligm.univ-eiffel.fr/">LIGM</a>
            <Link href="/software">Software</Link>
            <Link href="/supervision">Supervision</Link>
            <Link href="/teaching">Teaching</Link>
            <Link href="/bio">Bio / CV</Link>
            <Link href="/aikido-story">Aikido story</Link>
          </nav>
          <div>
            <p className="footer-profile-heading">Profiles</p>
            <ProfileLinks className="footer-profile-links" compact />
          </div>
        </div>
      </footer>
    </main>
  );
}
