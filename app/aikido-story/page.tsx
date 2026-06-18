import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aikido Story",
  description:
    "A personal note from Laurent Najman about Terry Dobson's Aikido story and conflict resolution.",
};

const storyBeats = [
  "A young Aikido practitioner in Tokyo sees a violent confrontation beginning in a train carriage.",
  "He prepares to answer force with force, convinced that this may finally be the legitimate test of his training.",
  "An older passenger interrupts the situation with attention, warmth, and ordinary conversation.",
  "The threat dissolves into grief, and the lesson changes from victory to reconciliation.",
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
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell aikido-hero">
        <div>
          <p className="eyebrow">Personal note</p>
          <h1>Aikido story</h1>
          <p>
            I have kept this story on my website for many years because it gives
            one of the clearest definitions of Aikido that I know: not the
            domination of an opponent, but the transformation of a conflict.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/bio">
              Back to Bio
            </Link>
            <a
              className="secondary-link"
              href="https://en.wikipedia.org/wiki/Terry_Dobson_(aikidoka)"
            >
              Terry Dobson
            </a>
          </div>
        </div>
        <aside className="aikido-panel" aria-label="Aikido story note">
          <p>
            The story is usually attributed to Terry Dobson, an American Aikido
            teacher and writer. It is a short lesson in how force can sometimes
            be displaced by attention.
          </p>
          <blockquote>
            What I had wanted to do with muscle had been accomplished with kind
            words.
          </blockquote>
        </aside>
      </section>

      <section className="section-shell aikido-summary">
        <div className="section-heading">
          <p className="eyebrow">Why keep it?</p>
          <h2>A small story about conflict</h2>
        </div>
        <p className="section-intro">
          The old page reproduced the train story in full. For the new site, I
          prefer to preserve its spirit in a concise form and point readers
          toward Terry Dobson rather than making the whole essay the center of
          the page.
        </p>
        <ol className="story-beats">
          {storyBeats.map((beat) => (
            <li key={beat}>{beat}</li>
          ))}
        </ol>
      </section>

      <section className="section-shell aikido-summary">
        <div className="section-heading">
          <p className="eyebrow">The lesson</p>
          <h2>Resolution without conquest</h2>
        </div>
        <p className="section-intro">
          What makes the story worth keeping is not martial technique. It is the
          reversal of perspective: the strongest response is not always the one
          that wins the encounter, but the one that changes what the encounter
          is about.
        </p>
      </section>
    </main>
  );
}
