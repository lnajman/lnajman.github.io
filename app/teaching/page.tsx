import type { Metadata } from "next";
import Link from "next/link";
import { TeachingVisual } from "@/components/TeachingVisual";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching by Laurent Najman: discrete mathematics, computer science, mathematical morphology, AI, image processing, and archived course resources.",
};

const teachingAreas = [
  {
    accent: "mathematics",
    title: "Discrete mathematics",
    description:
      "Graphs, trees, hierarchies, topology of discrete structures, and algorithmic foundations used in image analysis and data science.",
  },
  {
    accent: "computer-science",
    title: "Computer science",
    description:
      "Engineering and Master-level courses including operating systems, compilers, algorithms, and practical programming foundations.",
  },
  {
    accent: "morphology",
    title: "Image processing and morphology",
    description:
      "Mathematical morphology, connected operators, segmentation, filtering, shape analysis, and graph-based models for visual data.",
  },
  {
    accent: "ai",
    title: "Artificial intelligence",
    description:
      "AI and deep learning courses connected to computer vision, feature spaces, interpretability, and data-driven image analysis.",
  },
  {
    accent: "signal",
    title: "Signal processing",
    description:
      "Signal and image processing courses for engineering students, with links to biomedical imaging and visual data analysis.",
  },
  {
    accent: "supervision",
    title: "Research supervision",
    description:
      "Project, Master, PhD, and HDR supervision across mathematical morphology, graph methods, topology, and applied imaging.",
  },
];

const teachingFacts = [
  {
    label: "Typical load",
    value: "about 300 h/year",
    detail: "Engineering and Master-level teaching.",
  },
  {
    label: "Course shape",
    value: "theory + labs",
    detail: "Lectures, algorithmic foundations, exercises, and practical sessions.",
  },
  {
    label: "Archive",
    value: "legacy resources",
    detail: "Selected course pages remain linked from the previous website.",
  },
];

const archivedResources = [
  {
    title: "IA et Deep Learning",
    description: "Archived AI and deep learning teaching material from the previous website.",
    href: "https://laurentnajman.org/index.php?page=ia-et-deep-learning",
  },
  {
    title: "IM5-1IA",
    description: "Archived course page with tutorial material.",
    href: "https://laurentnajman.org/index.php?page=im5-1ia",
  },
  {
    title: "Tutorial 1",
    description: "Archived tutorial resource.",
    href: "https://laurentnajman.org/index.php?page=tutorial-1",
  },
  {
    title: "Tutorial 2",
    description: "Archived tutorial resource.",
    href: "https://laurentnajman.org/index.php?page=tutorial-2",
  },
  {
    title: "MorphoMathMaster",
    description: "Archived mathematical morphology Master-level material.",
    href: "https://laurentnajman.org/index.php?page=morphomathmaster",
  },
  {
    title: "ISBS projects",
    description: "Archived project material for bio-engineering students.",
    href: "https://laurentnajman.org/index.php?page=ISBS-projet",
  },
  {
    title: "Higra tutorial",
    description: "Archived tutorial on hierarchical graph analysis.",
    href: "https://laurentnajman.org/index.php?page=higra-tutorial",
  },
];

const books = [
  {
    title: "Systèmes d'exploitation - Synthèse de cours & exercices corrigés",
    detail:
      "with Bart Lamiroy and Hugues Talbot, Pearson Education France, 2006",
  },
  {
    title: "Mathematical Morphology: from theory to applications",
    detail: "with Hugues Talbot, ISTE-Wiley, 2010",
  },
  {
    title: "Modern Approaches to Discrete Curvature",
    detail: "with Pascal Romon, Springer, 2017",
  },
];

export default function TeachingPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching" aria-current="page">
            Teaching
          </Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell teaching-hero">
        <div>
          <p className="eyebrow">Teaching</p>
          <h1>Courses and supervision</h1>
          <p>
            I have taught at engineering and Master level across discrete
            mathematics, computer science, mathematical morphology, image
            processing, signal processing, and artificial intelligence. This
            page keeps the current teaching profile visible while preserving
            useful archived resources from the previous website.
          </p>
        </div>
        <aside className="teaching-overview-panel" aria-label="Teaching overview">
          <TeachingVisual />
          <dl className="teaching-facts">
            {teachingFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  <strong>{fact.value}</strong>
                  <span>{fact.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Areas</p>
          <h2>Teaching themes</h2>
        </div>
        <div className="theme-grid teaching-theme-grid">
          {teachingAreas.map((area) => (
            <article
              className="teaching-theme-card"
              data-teaching-area={area.accent}
              key={area.title}
            >
              <span className="teaching-theme-mark" aria-hidden="true" />
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Books</p>
          <h2>Teaching references</h2>
        </div>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.title}>
              <strong>{book.title}</strong>
              <span>{book.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Archive</p>
          <h2>Course resources from the previous site</h2>
        </div>
        <div className="archive-grid">
          {archivedResources.map((resource) => (
            <a href={resource.href} key={resource.title}>
              <span className="archive-label">Previous site</span>
              <strong>{resource.title}</strong>
              <span>{resource.description}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
