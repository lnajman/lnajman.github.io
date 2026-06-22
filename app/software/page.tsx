import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Research software connected to Laurent Najman's work: Higra for hierarchical graph analysis and MorseFrames for Morse-based topology.",
  alternates: {
    canonical: absoluteUrl("/software/"),
  },
};

const softwareProjects = [
  {
    title: "Higra",
    subtitle: "Hierarchical Graph Analysis",
    status: "Public library",
    accent: "teal",
    description:
      "A C++/Python library for hierarchical graph analysis, with tools for graphs, trees, component trees, watershed hierarchies, optimal cuts, quality assessment, and image applications.",
    role:
      "Main maintainer: Benjamin Perret. I participate in its development and co-authored the SoftwareX reference paper.",
    links: [
      {
        label: "Documentation",
        href: "https://higra.readthedocs.io/en/stable/index.html",
      },
      {
        label: "Source code",
        href: "https://github.com/higra/Higra",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.softx.2019.100335",
      },
    ],
  },
  {
    title: "MorseFrames",
    subtitle: "Morse sequences and Morse-based persistent homology",
    status: "Public library",
    accent: "violet",
    description:
      "A C++/Python library for Morse sequences, reference and coreference maps, Morse complexes, and Morse-based persistent homology.",
    role:
      "The documentation and source code are public, as part of ongoing work on Morse-based topology and persistence.",
    links: [
      {
        label: "Documentation",
        href: "https://morseframes.readthedocs.io/en/latest/",
      },
      {
        label: "Source code",
        href: "https://github.com/lnajman/morseframes",
      },
    ],
  },
];

function SoftwareGlyph() {
  return (
    <div className="software-glyph" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default function SoftwarePage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/software" aria-current="page">
            Software
          </Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell software-hero">
        <div>
          <p className="eyebrow">Software</p>
          <h1>Research software</h1>
          <p>
            Software is one of the practical outputs of this work: reusable
            implementations for hierarchical graph analysis, mathematical
            morphology, discrete topology, and Morse-based methods.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://higra.readthedocs.io/en/stable/index.html"
            >
              Higra documentation
            </a>
            <a
              className="secondary-link"
              href="https://morseframes.readthedocs.io/en/latest/"
            >
              MorseFrames docs
            </a>
            <a className="secondary-link" href="https://github.com/lnajman">
              GitHub profile
            </a>
            <Link className="secondary-link" href="/publications">
              Related publications
            </Link>
          </div>
        </div>
        <aside className="software-panel" aria-label="Software summary">
          <SoftwareGlyph />
          <dl>
            <div>
              <dt>Public</dt>
              <dd>Higra</dd>
            </div>
            <div>
              <dt>Public</dt>
              <dd>MorseFrames</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>C++ / Python</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="section-shell software-projects">
        <div className="section-heading">
          <p className="eyebrow">Libraries</p>
          <h2>Software connected to the research</h2>
        </div>
        <div className="software-grid">
          {softwareProjects.map((project) => (
            <article
              className={`software-card ${project.accent}`}
              key={project.title}
            >
              <div>
                <p className="software-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="software-subtitle">{project.subtitle}</p>
              </div>
              <p>{project.description}</p>
              <p className="software-role">{project.role}</p>
              {project.links.length ? (
                <div className="software-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="software-private-note">
                  Public links will be added when available.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell software-reference">
        <div>
          <p className="eyebrow">Reference</p>
          <h2>How to cite Higra</h2>
        </div>
        <figure className="software-citation">
          <blockquote>
            B. Perret, G. Chierchia, J. Cousty, S. J. F. Guimarães,
            Y. Kenmochi, L. Najman, Higra: Hierarchical Graph Analysis,
            SoftwareX, Volume 10, 2019.
          </blockquote>
          <figcaption>
            <a href="https://doi.org/10.1016/j.softx.2019.100335">
              doi:10.1016/j.softx.2019.100335
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
