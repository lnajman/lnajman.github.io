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
    | "applications"
    | "software";
  summary: string;
  publicationIds: string[];
  links?: Array<{
    label: string;
    href: string;
    internal?: boolean;
  }>;
};

type ArchiveHighlight = {
  title: string;
  label: string;
  image: string;
  alt: string;
  description: string;
  href: string;
  imageFit?: "cover" | "contain";
};

type PortfolioHighlight = {
  title: string;
  label: string;
  image: string;
  imageShape: "tall" | "wide" | "standard";
  alt: string;
  summary: string;
  keywords: string[];
  links: Array<{
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
    title: "Applications: personalized medicine and scientific imaging",
    accent: "applications",
    summary:
      "This thread shows how mathematical and algorithmic tools move into real scientific data: patient-specific cardiac perfusion, vascular networks, PET image analysis, astronomical source detection, and other imaging domains where structure matters.",
    publicationIds: [
      "hal-01869264",
      "hal-03036457",
      "hal-04359833",
      "hal-04828473",
      "hal-02155801",
      "hal-03429058",
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
    cover: "/archive/discrete-curvature-book.jpg",
    alt: "Modern Approaches to Discrete Curvature book cover",
  },
  {
    title: "Mathematical Morphology: from theory to applications",
    detail: "with Hugues Talbot, ISTE-Wiley, 2010",
    cover: "/archive/mathematical-morphology-book.jpg",
    alt: "Mathematical Morphology from theory to applications book cover",
  },
  {
    title: "Systèmes d'exploitation - Synthèse de cours & exercices corrigés",
    detail: "with Bart Lamiroy and Hugues Talbot, Pearson Education France, 2006",
    cover: "/archive/operating-systems-book.jpg",
    alt: "Systèmes d'exploitation book cover",
  },
];

const archiveHighlights: ArchiveHighlight[] = [
  {
    title: "Graph-based mathematical morphology",
    label: "Survey / tutorial",
    image: "/archive/survey-graph-morphology.png",
    alt: "Graph-based morphology visual from the previous website",
    description:
      "A trace of the survey and tutorial material that connected morphology, graphs, watersheds, and hierarchies.",
    href: "https://arxiv.org/pdf/1404.7748.pdf",
    imageFit: "contain",
  },
  {
    title: "Shape-space filtering",
    label: "Research image",
    image: "/archive/shape-filtering-schema.png",
    alt: "Shape-space filtering schema from the previous website",
    description:
      "The old shape-filtering visual, built around tree representations and transformations of shapes rather than pixels alone.",
    href: "/publications/?q=shape%20space",
  },
  {
    title: "Cardiac and vascular imaging",
    label: "Application",
    image: "/archive/cardiac-stenoses.jpg",
    alt: "Coronary stenosis visualization from the previous website",
    description:
      "Archive imagery for the medical-imaging line around coronary stenosis, vascular structures, and patient-specific modeling.",
    href: "/publications/?q=cardiac",
  },
  {
    title: "Scene parsing and deep learning",
    label: "Research image",
    image: "/archive/scene-parsing.jpg",
    alt: "Scene parsing results from the previous website",
    description:
      "A visual marker of the early deep-learning work linking scene labeling, watershed cuts, and semantic segmentation.",
    href: "/publications/?q=scene%20parsing",
  },
  {
    title: "Dual-constrained total variation",
    label: "Featured paper",
    image: "/archive/dctv-crop.png",
    alt: "Dual-constrained total variation crop from the previous website",
    description:
      "An old featured-paper image from the optimization and graph-based image-processing thread.",
    href: "/publications/?q=dual-constrained",
  },
  {
    title: "Books and long-form references",
    label: "Book covers",
    image: "/archive/mathematical-morphology-book.jpg",
    alt: "Mathematical Morphology from theory to applications book cover",
    description:
      "The previous site used books as visual anchors for long-form references, teaching, and synthesis work.",
    href: "#books",
    imageFit: "contain",
  },
];

const portfolioHighlights: PortfolioHighlight[] = [
  {
    title: "Personalized medicine: myocardial perfusion simulation",
    label: "Application",
    image: "/research-highlights/myocardial-perfusion.png",
    imageShape: "tall",
    alt: "Patient-specific myocardial perfusion modeling pipeline from CT data to simulated perfusion maps",
    summary:
      "A patient-specific multiscale model linking coronary FFRCT, segmented and synthetic vascular networks, and myocardial microcirculation to simulate blood flow from epicardial arteries to cardiac tissue.",
    keywords: ["cardiac imaging", "multiscale model", "perfusion"],
    links: [
      {
        label: "2021 model",
        href: "https://hal.science/hal-03036457v2",
      },
      {
        label: "Vascular networks",
        href: "https://hal.science/hal-01869264v1",
      },
      {
        label: "Related papers",
        href: "/publications/?q=myocardial%20perfusion",
        internal: true,
      },
    ],
  },
  {
    title: "Higra: hierarchical graph analysis",
    label: "Software contribution",
    image: "/research-highlights/higra-watershed-simplification.png",
    imageShape: "wide",
    alt: "Image simplification with Higra using a hierarchy of watershed cuts",
    summary:
      "A C++/Python library for efficient sparse-graph analysis, focused on constructing, processing, filtering, clustering, and evaluating hierarchical representations. Benjamin Perret is the main maintainer; I contribute to the mathematical morphology and hierarchy line that feeds the library.",
    keywords: ["open source", "hierarchies", "graph analysis"],
    links: [
      {
        label: "Documentation",
        href: "https://higra.readthedocs.io/en/stable/index.html",
      },
      {
        label: "SoftwareX paper",
        href: "https://hal.science/hal-02309938v1",
      },
      {
        label: "Software page",
        href: "/software",
        internal: true,
      },
    ],
  },
  {
    title: "Theory of hierarchies",
    label: "Theory",
    image: "/research-highlights/hierarchy-theory.png",
    imageShape: "standard",
    alt: "Hierarchy on a graph distributed over three subgraphs",
    summary:
      "A theoretical and algorithmic line connecting dendrograms, saliency maps, minimum spanning trees, and hierarchical watersheds, with constructive results for characterization, enumeration, transformation, and out-of-core computation. This line started within the A3SI team at LIGM, and remains a current thread in my work.",
    keywords: ["hierarchical watersheds", "saliency maps", "distributed computation"],
    links: [
      {
        label: "Theory paper",
        href: "https://hal.science/hal-02280023v2",
      },
      {
        label: "Watersheding hierarchies",
        href: "https://hal.science/hal-02180478v1",
      },
      {
        label: "Related papers",
        href: "/publications/?q=hierarchical%20watersheds",
        internal: true,
      },
    ],
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

      <section className="section-shell portfolio-highlight-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Research highlights</p>
            <h2>Three visible contributions</h2>
          </div>
          <Link className="text-link" href="/publications">
            Related publications
          </Link>
        </div>
        <p className="section-intro">
          These highlights make three contributions visible through concrete
          images: personalized cardiac modeling, hierarchical graph-analysis
          software, and the theory of hierarchies.
        </p>
        <div className="portfolio-highlight-grid">
          {portfolioHighlights.map((item) => (
            <article className="portfolio-highlight-card" key={item.title}>
              <a
                className={`portfolio-highlight-image ${item.imageShape}`}
                href={item.links[0]?.href ?? "/publications"}
              >
                <img src={item.image} alt={item.alt} />
              </a>
              <div className="portfolio-highlight-body">
                <span className="portfolio-highlight-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className="portfolio-highlight-tags">
                  {item.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
                <div className="portfolio-highlight-links">
                  {item.links.map((link) =>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell archive-highlight-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Archive highlights</p>
            <h2>Visual material from the previous site</h2>
          </div>
          <Link className="text-link" href="/publications">
            Publication archive
          </Link>
        </div>
        <p className="section-intro">
          The previous website carried a useful visual memory of papers,
          tutorials, books, and applications. This selection keeps that material
          available as a compact archive, while the full research map above
          remains organized around themes.
        </p>
        <div className="archive-highlight-grid">
          {archiveHighlights.map((item) => (
            <article className="archive-highlight-card" key={item.title}>
              <a className="archive-highlight-image" href={item.href}>
                <img
                  className={item.imageFit === "contain" ? "contain" : ""}
                  src={item.image}
                  alt={item.alt}
                />
              </a>
              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell cv-section" id="books">
        <div className="section-heading">
          <p className="eyebrow">Books</p>
          <h2>Long-form references</h2>
        </div>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.title}>
              <img src={book.cover} alt={book.alt} />
              <div>
                <strong>{book.title}</strong>
                <span>{book.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
