import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bio and CV",
  description:
    "Biography and CV highlights for Laurent Najman, professor at Khalifa University and on leave from ESIEE Paris / Université Gustave Eiffel.",
};

const careerItems = [
  {
    period: "Since 2025",
    title:
      "Professor, Mathematics Department, College of Computing and Mathematical Sciences, Khalifa University",
  },
  {
    period: "2002-2025",
    title:
      "Professor, ESIEE Paris, Université Gustave Eiffel, Laboratoire d'Informatique Gaspard Monge - UMR 8049",
  },
  {
    period: "1998-2002",
    title: "Senior Scientist, Océ PLT, Créteil, France",
  },
  {
    period: "1995-1998",
    title:
      "VP Research and Development, Animation Science, Paris - Boston - San Francisco",
  },
  {
    period: "1991-1995",
    title: "Research engineer, THALES, Laboratoire Central de Recherches",
  },
];

const educationItems = [
  {
    period: "2006",
    title:
      "Habilitation à Diriger les Recherches, Computer Science, Université de Marne-la-Vallée",
  },
  {
    period: "1994",
    title:
      "PhD in Applied Mathematics, Université Paris-Dauphine, with unanimous jury congratulations",
  },
  {
    period: "1991",
    title:
      "Master degree in Artificial Intelligence and Shape Recognition, Université Paris-Dauphine, ranked first",
  },
  {
    period: "1991",
    title: "Engineering degree, Control Theory, École des Mines de Paris",
  },
];

const editorialItems = [
  {
    period: "Since 2023",
    title: "Editor, Journal of Mathematical Imaging and Vision",
  },
  {
    period: "Since 2019",
    title: "Editor, International Journal of Computer Vision",
  },
  {
    period: "2016-2022",
    title: "Senior Editor, IEEE Signal Processing Letters",
  },
  {
    period: "2015-2023",
    title: "Area Editor, Computer Vision and Image Understanding",
  },
];

const highlights = [
  "Discrete mathematics with applications to data science, biomedical imaging, computer vision, and image processing.",
  "Supervisor of 2 HDRs and 29 PhD students in France, with 5 still in progress, plus 4 PhD students abroad.",
  "President of AFRIF, the French branch of IAPR, since 2025.",
  "Editor for the Journal of Mathematical Imaging and Vision and the International Journal of Computer Vision.",
  "Organisation chair for ICCV 2023 in Paris and program chair for ISMM 2005 and ISMM 2015.",
];

const books = [
  "Modern Approaches to Discrete Curvature, with Pascal Romon, Springer, 2017.",
  "Mathematical Morphology: from theory to applications, with Hugues Talbot, ISTE-Wiley, 2010.",
  "Systèmes d'exploitation - Synthèse de cours & exercices corrigés, with Bart Lamiroy and Hugues Talbot, Pearson Education France, 2006.",
];

export default function BioPage() {
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
          <Link href="/bio" aria-current="page">
            Bio / CV
          </Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell bio-hero">
        <div>
          <p className="eyebrow">Biography</p>
          <h1>Bio and CV</h1>
          <p>
            Laurent Najman is currently a professor in the Mathematics
            Department, College of Computing and Mathematical Sciences, at
            Khalifa University. He is on leave from ESIEE Paris and Université
            Gustave Eiffel, where he was professor in the A3SI team at LIGM.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="/laurent-najman-cv-2026.pdf">
              Download CV
            </a>
            <Link className="secondary-link" href="/publications">
              Publications
            </Link>
            <Link className="secondary-link" href="/aikido-story">
              Aikido story
            </Link>
          </div>
        </div>
        <img
          src="/laurent-najman-portrait.jpeg"
          alt="Laurent Najman"
          width="1423"
          height="1600"
        />
      </section>

      <section className="section-shell bio-summary">
        <div className="section-heading">
          <p className="eyebrow">Current Status</p>
          <h2>Professor at Khalifa University</h2>
        </div>
        <p className="section-intro">
          His research lies in discrete mathematics and mathematical morphology,
          with applications to image processing, computer vision, biomedical
          imaging, and data science. His work connects graph-based methods,
          hierarchies, topology of discrete structures, and optimization.
        </p>
        <ul className="highlight-grid">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Personal note</p>
          <h2>Aikido story</h2>
        </div>
        <p className="section-intro">
          The old website includes a Terry Dobson story about Aikido and
          conflict resolution. It should remain a real personal page on the new
          site, not just a compressed summary.
        </p>
        <p className="section-action">
          <Link className="text-link" href="/aikido-story">
            Read the Aikido story note
          </Link>
        </p>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Career</p>
          <h2>Positions</h2>
        </div>
        <ol className="timeline">
          {careerItems.map((item) => (
            <li key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Degrees</h2>
        </div>
        <ol className="timeline">
          {educationItems.map((item) => (
            <li key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Service</p>
          <h2>Editorial service</h2>
        </div>
        <ol className="timeline">
          {editorialItems.map((item) => (
            <li key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Books</p>
          <h2>Selected books</h2>
        </div>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
