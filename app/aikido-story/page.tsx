import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aikido",
  description:
    "A personal note from Laurent Najman about Aikido practice, lineage, and Terry Dobson's story about conflict resolution.",
};

const aikidoLinks = [
  {
    title: "ACNA / Michel Bécart Shihan",
    href: "https://www.michelbecart.com/",
    description:
      "Association Culturelle Nationale d'Aïkido, founded by Michel Bécart Shihan.",
  },
  {
    title: "Aikiway Dojo",
    href: "https://aikiwaydojo.com/",
    description:
      "The Abu Dhabi dojo where my practice now continues.",
  },
  {
    title: "Sensei Jihad Francis",
    href: "https://aikiwaydojo.com/about/",
    description:
      "Instructor and founder of Aikiway Dojo in Abu Dhabi.",
  },
];

export default function AikidoStoryPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/software">Software</Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell aikido-hero">
        <div>
          <p className="eyebrow">Personal practice</p>
          <h1>Aikido</h1>
          <p>
            Nearly four decades on the tatami, and Aikido still feels like the
            beginning of a journey: a practice of movement, stillness, and the
            search for harmony.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://www.michelbecart.com/"
            >
              ACNA / Michel Bécart Shihan
            </a>
            <a className="secondary-link" href="https://aikiwaydojo.com/">
              Aikiway Dojo
            </a>
            <Link className="secondary-link" href="/bio">
              Back to Bio
            </Link>
          </div>
        </div>
        <aside className="aikido-panel" aria-label="Aikido practice note">
          <p>
            5th Dan and Shidoin (certified instructor) with ACNA, under Michel
            Bécart Shihan, I
            continue to understand Aikido as a dialogue between breath, balance,
            and time.
          </p>
          <blockquote>
            The practice continues.
          </blockquote>
        </aside>
      </section>

      <section className="section-shell aikido-story-section">
        <div className="section-heading">
          <p className="eyebrow">Practice</p>
          <h2>A path through movement and stillness</h2>
        </div>
        <div className="aikido-practice-card">
          <p>
            I began my practice in 1986 with Michel Bécart Shihan and the
            ACNA, a French organization recognized by the Aikikai Hombu Dojo in
            Japan.
            Over the past twenty years, I have also explored Daito-ryu, Sagawa
            style, Noh theatre, Shinkage-ryu, and Ni-ten-ryu. Each has become
            another mirror of the same spirit, and of the internal bodywork that
            animates movement from within.
          </p>
          <p>
            A new chapter now begins in Abu Dhabi, welcomed by Sensei Jihad
            Francis and Aikiway Dojo. The practice continues as a conversation
            between body, attention, and time.
          </p>
        </div>
        <div className="aikido-link-grid" aria-label="Aikido links">
          {aikidoLinks.map((item) => (
            <a href={item.href} key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell aikido-story-section" id="terry-dobson">
        <div className="section-heading">
          <p className="eyebrow">Terry Dobson</p>
          <h2>A story I want to preserve</h2>
        </div>
        <p className="section-intro">
          A long time ago, I found a story by Terry Dobson, a master of Aikido
          and conflict resolution. I saved the text because, for me, it gives
          one of the clearest possible definitions of Aikido.
        </p>
        <div className="aikido-story-card">
          <p>
            The current website carries the complete train story attributed to
            Terry Dobson. That is the version to preserve: the long narrative,
            not a condensed lesson or a list of takeaways.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://laurentnajman.org/index.php?page=aikido-story"
            >
              Open the current Aikido page
            </a>
            <a
              className="secondary-link"
              href="https://en.wikipedia.org/wiki/Terry_Dobson_(aikidoka)"
            >
              Terry Dobson
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
