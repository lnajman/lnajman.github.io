import type { Metadata } from "next";
import Link from "next/link";
import { PublicationList } from "@/components/PublicationList";
import { ResearchVisual } from "@/components/ResearchVisual";
import { publications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes of Laurent Najman: discrete mathematical morphology, graphs and simplicial complexes, hierarchies, discrete topology, optimization, deep learning, and interpretable computer vision.",
};

const themes = [
  {
    title: "Discrete mathematical morphology",
    motif: "morphology",
    description:
      "Mathematical morphology provides the algebraic and algorithmic language for connected operators, shape analysis, filtering, and segmentation on discrete structures.",
    keywords: ["lattices", "connected filters", "shape spaces"],
  },
  {
    title: "Graphs and simplicial complexes",
    motif: "graphs",
    description:
      "A central thread is the representation of images and data by graphs and simplicial complexes, including minimum spanning trees, saliency maps, component trees, the tree of shapes, and hierarchical segmentations.",
    keywords: ["watersheds", "saliency maps", "simplicial complexes"],
  },
  {
    title: "Discrete topology and Morse theory",
    motif: "topology",
    description:
      "The work connects topological ideas with computable models on graphs, cubical grids, simplicial complexes, Morse functions, and gradient vector fields.",
    keywords: ["Morse theory", "simplicial complexes", "persistent homology"],
  },
  {
    title: "Optimization and segmentation",
    motif: "cuts",
    description:
      "Graph cuts, power watersheds, hierarchical cuts, convex optimization, and related algorithms make segmentation models precise and computationally tractable.",
    keywords: ["power watershed", "graph cuts", "Kruskal algorithms"],
  },
  {
    title: "Biomedical and scientific imaging",
    motif: "imaging",
    description:
      "Applications include PET/CT, MRI, cardiac imaging, vessel and catheter segmentation, and other visual data where topology and shape are strong priors.",
    keywords: ["PET/CT", "MRI", "medical segmentation"],
  },
  {
    title: "Deep learning and interpretable vision",
    motif: "learning",
    description:
      "Recent work connects deep learning with graph neural networks, self-supervised learning, few-shot classification, and interpretable visual models built from hierarchies and trees.",
    keywords: ["deep learning", "graph neural networks", "explainable AI"],
  },
];

const publicationAnchors = [
  "Explaning with trees",
  "Computing gradient vector fields with Morse sequences",
  "Playing with Kruskal",
  "Assessing hierarchies by their consistent segmentations",
  "Discrete Morse Functions and Watersheds",
  "Higra: Hierarchical Graph Analysis",
];

function publicationByTitle(fragment: string) {
  const normalizedFragment = fragment.toLowerCase();
  return publications.find((publication) =>
    publication.title.toLowerCase().includes(normalizedFragment),
  );
}

const selectedPublications = publicationAnchors
  .map(publicationByTitle)
  .filter((publication) => publication !== undefined);

const books = [
  {
    title: "Modern Approaches to Discrete Curvature",
    detail: "with Pascal Romon, Springer, 2017",
  },
  {
    title: "Mathematical Morphology: from theory to applications",
    detail: "with Hugues Talbot, ISTE-Wiley, 2010",
  },
  {
    title: "Systèmes d'exploitation - Synthèse de cours & exercices corrigés",
    detail: "with Bart Lamiroy and Hugues Talbot, Pearson Education France, 2006",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research" aria-current="page">
            Research
          </Link>
          <Link href="/software">Software</Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell research-hero">
        <div>
          <p className="eyebrow">Research</p>
          <h1>Discrete structures for visual data</h1>
          <p>
            My research develops mathematical and algorithmic tools for images
            and data represented by graphs, simplicial complexes, hierarchies,
            trees, and topological structures. The common thread is to make
            discrete geometry useful: for segmentation, filtering, optimization,
            biomedical imaging, computer vision, deep learning, and
            interpretable models.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/publications">
              Browse publications
            </Link>
            <Link className="secondary-link" href="/supervision">
              Supervision
            </Link>
            <a
              className="secondary-link"
              href="https://hal.science/search/index/q/*/authIdHal_s/laurent-najman"
            >
              HAL profile
            </a>
          </div>
        </div>
        <ResearchVisual className="research-hero-plate" />
      </section>

      <section className="section-shell research-themes">
        <div className="section-heading">
          <p className="eyebrow">Themes</p>
          <h2>Research areas</h2>
        </div>
        <div className="theme-grid">
          {themes.map((theme) => (
            <article key={theme.title} className={`theme-card ${theme.motif}`}>
              <div className={`theme-symbol ${theme.motif}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
              <ul>
                {theme.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">From HAL</p>
            <h2>Selected anchors</h2>
          </div>
          <Link className="text-link" href="/publications">
            Full publication list
          </Link>
        </div>
        <PublicationList publications={selectedPublications} compact />
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Books</p>
          <h2>Long-form references</h2>
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
    </main>
  );
}
