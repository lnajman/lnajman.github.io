import type { Metadata } from "next";
import Link from "next/link";
import { ResearchVisual } from "@/components/ResearchVisual";
import { publications, type Publication } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes of Laurent Najman: discrete mathematical morphology, graphs and simplicial complexes, hierarchies, discrete topology, optimization, deep learning, and interpretable computer vision.",
};

type SelectedResearchThread = {
  title: string;
  accent:
    | "watersheds"
    | "morphology"
    | "topology"
    | "optimization"
    | "learning"
    | "structural"
    | "software";
  summary: string;
  publicationIds: string[];
  links?: Array<{
    label: string;
    href: string;
    internal?: boolean;
  }>;
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

const selectedResearchThreads: SelectedResearchThread[] = [
  {
    title: "Watersheds and hierarchical segmentation",
    accent: "watersheds",
    summary:
      "A long-running line connects watershed cuts, minimum spanning forests, saliency maps, and graph-based hierarchies. The point is not only to segment images, but to make the hierarchy itself a mathematically controlled object.",
    publicationIds: ["hal-00419373", "hal-01344727", "hal-05299371"],
  },
  {
    title: "Discrete calculus, power watersheds, and graph optimization",
    accent: "optimization",
    summary:
      "Discrete calculus gives graph-based counterparts of continuous variational tools, including combinatorial continuous max-flow. Power watersheds then connect watershed cuts with graph optimization; the SIAM gamma-convergence paper gives the proof framework, and power spectral clustering extends the same ideas to spectral clustering.",
    publicationIds: [
      "hal-00525822",
      "hal-00622510",
      "hal-01428875",
      "hal-01516649",
    ],
  },
  {
    title: "Component trees, tree of shapes, and morphology",
    accent: "morphology",
    summary:
      "Connected operators and tree-based representations give image analysis a structural language: component trees, tree of shapes, shape spaces, attributes, and efficient algorithms for multiscale reasoning.",
    publicationIds: ["hal-00622110", "hal-00798620", "hal-01162437"],
  },
  {
    title: "Discrete topology, Morse theory, and persistence",
    accent: "topology",
    summary:
      "This thread studies how topological objects can be computed on discrete data: Morse functions, gradient vector fields, well-composedness, persistent homology, and their relation to morphological dynamics.",
    publicationIds: ["hal-03928064", "hal-05027155", "hal-03676854"],
  },
  {
    title: "From Deep Learning to Self-Supervised Representations",
    accent: "learning",
    summary:
      "This thread connects early deep-learning work on scene labeling with Clément Farabet, Camille Couprie, and Yann LeCun to recent self-supervised representation learning with Quentin Garrido and Yann LeCun.",
    publicationIds: [
      "hal-00742077",
      "hal-01066586",
      "hal-03685169",
      "hal-03984775",
      "hal-03793283",
    ],
  },
  {
    title: "Structural priors for deep learning",
    accent: "structural",
    summary:
      "A complementary line brings the older mathematical objects back into learning: watersheds, component trees, and hierarchies become priors, filters, explanations, or constraints for modern models.",
    publicationIds: [
      "hal-03171597",
      "hal-04740759",
      "hal-04614933",
      "hal-04190721",
    ],
  },
  {
    title: "Software and reproducible methods",
    accent: "software",
    summary:
      "The software thread makes the mathematical objects usable by others, from hierarchical graph analysis to Morse-based constructions. Higra and MorseFrames are the current public entry points.",
    publicationIds: ["hal-02309938", "hal-04217818"],
    links: [
      {
        label: "Higra",
        href: "https://higra.readthedocs.io/en/stable/index.html",
      },
      {
        label: "MorseFrames",
        href: "https://morseframes.readthedocs.io/en/latest/",
      },
      {
        label: "Software page",
        href: "/software",
        internal: true,
      },
    ],
  },
];

function publicationsByHalIds(ids: string[]) {
  return ids
    .map((id) =>
      publications.find(
        (publication) =>
          publication.halId === id || publication.sourceHalIds.includes(id),
      ),
    )
    .filter((publication): publication is Publication => Boolean(publication));
}

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

      <section className="section-shell selected-research-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Selected research</p>
            <h2>Curated entry points</h2>
          </div>
          <Link className="text-link" href="/publications">
            Full publication list
          </Link>
        </div>
        <p className="section-intro">
          These threads are a selective map of the work, with representative
          HAL records chosen for orientation rather than exhaustiveness.
        </p>
        <div className="selected-research-grid">
          {selectedResearchThreads.map((thread) => {
            const works = publicationsByHalIds(thread.publicationIds);

            return (
              <article
                className={`selected-research-card ${thread.accent}`}
                key={thread.title}
              >
                <h3>{thread.title}</h3>
                <p>{thread.summary}</p>
                <div>
                  <strong>Representative works</strong>
                  <ul className="selected-work-list">
                    {works.map((work) => (
                      <li key={work.id}>
                        <span>{work.year || "Undated"}</span>
                        <a href={work.halUrl}>{work.title}</a>
                        <small>
                          {[work.typeLabel, work.venue]
                            .filter(Boolean)
                            .join(" · ")}
                        </small>
                        <div className="selected-work-links">
                          {work.pdfUrl ? <a href={work.pdfUrl}>PDF</a> : null}
                          {work.doi ? (
                            <a href={`https://doi.org/${work.doi}`}>DOI</a>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {thread.links ? (
                  <div className="selected-software-links">
                    {thread.links.map((link) =>
                      link.internal ? (
                        <Link href={link.href} key={link.label}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} key={link.label}>
                          {link.label}
                        </a>
                      ),
                    )}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
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
