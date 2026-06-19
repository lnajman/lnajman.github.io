import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aikido Story",
  description:
    "A personal note from Laurent Najman about Terry Dobson's Aikido story and conflict resolution.",
};

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
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell aikido-hero">
        <div>
          <p className="eyebrow">Personal note</p>
          <h1>Aikido Story</h1>
          <p>
            A long time ago, I found a story by Terry Dobson, a master of
            Aikido and conflict resolution. I saved the text because, for me,
            it gives one of the clearest possible definitions of Aikido.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://laurentnajman.org/index.php?page=aikido-story"
            >
              Current full page
            </a>
            <Link className="secondary-link" href="/bio">
              Back to Bio
            </Link>
          </div>
        </div>
        <aside className="aikido-panel" aria-label="Aikido story note">
          <p>
            I should not have replaced the story with a short summary. The
            value of the page is precisely that it lets the full story unfold.
          </p>
          <blockquote>
            What I had wanted to do with muscle had been accomplished with kind
            words.
          </blockquote>
        </aside>
      </section>

      <section className="section-shell aikido-story-section">
        <div className="section-heading">
          <p className="eyebrow">To restore</p>
          <h2>The full story belongs here</h2>
        </div>
        <p className="section-intro">
          The current website carries the complete train story attributed to
          Terry Dobson. That is the version to preserve: the long narrative, not
          a condensed lesson or a list of takeaways.
        </p>
        <div className="aikido-story-card">
          <p>
            For the preview site, I am keeping a direct link to the existing
            full page. Before the final switch to the new site, we should either
            import the full text with explicit approval or keep a stable link to
            a version of the original page.
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
