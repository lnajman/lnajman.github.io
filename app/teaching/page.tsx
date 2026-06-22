import type { Metadata } from "next";
import Link from "next/link";
import { TeachingVisual } from "@/components/TeachingVisual";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching by Laurent Najman: discrete mathematics, computer science, mathematical morphology, AI, image processing, books, and archived course resources.",
  alternates: {
    canonical: absoluteUrl("/teaching/"),
  },
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
    value: "course material",
    detail: "Slides, practical sessions, notebooks, and older project briefs.",
  },
];

const courseArchives = [
  {
    slug: "teaching",
    label: "Computer science",
    title: "Operating systems and compilation",
    description:
      "Core ESIEE material around operating-system concepts, compilation, exercises, and practical foundations. The operating-systems book remains the main reference for this part of the teaching archive.",
    topics: ["Operating systems", "Compilation", "Exercises"],
    links: [
      {
        label: "Old teaching page",
        href: "/teaching/#legacy-teaching",
      },
      {
        label: "Book on HAL",
        href: "https://hal.science/hal-00622092v1",
      },
    ],
  },
  {
    slug: "ia-et-deep-learning",
    label: "AI course",
    title: "IA et Deep Learning",
    description:
      "A hands-on course built around Keras notebooks in Google Colab or Kaggle, with material on neural networks, convolutional networks, overfitting, project reports, and explainable AI.",
    topics: ["Keras labs", "Colab / Kaggle", "Explainable AI"],
    links: [
      {
        label: "Course page",
        href: "/teaching/#legacy-ia-et-deep-learning",
      },
      {
        label: "Presentation",
        href: "/uploads/images/DeepLearning/FormationDeep.pdf",
      },
      {
        label: "ConvNets",
        href: "/uploads/images/DeepLearning/ConvNets.pdf",
      },
      {
        label: "XAI slides",
        href: "/uploads/images/DeepLearning/xAI_slides.pdf",
      },
    ],
  },
  {
    slug: "im5-1ia",
    label: "Image processing",
    title: "Image analysis and processing",
    description:
      "Engineering course material on image formation, enhancement, transforms, filtering, segmentation, and connected-geodesic approaches, with practical material based on PinkDev.",
    topics: ["Enhancement", "Filtering", "Segmentation"],
    links: [
      {
        label: "Course page",
        href: "/teaching/#legacy-im5-1ia",
      },
      {
        label: "Introduction",
        href: "/uploads/ImageCourse/intro_ln.pdf",
      },
      {
        label: "Filtering",
        href: "/uploads/ImageCourse/filtering_ln.pdf",
      },
      {
        label: "Segmentation",
        href: "/uploads/ImageCourse/segmentation1_ln.pdf",
      },
    ],
  },
  {
    slug: "programming-tutorials",
    label: "Programming sessions",
    title: "Image-processing programming tutorials",
    description:
      "The first sessions introduce practical image operators with image differences and blob measurements. The second sessions implement a Canny edge detector, with emphasis on hysteresis thresholding.",
    topics: ["PinkDev", "Blob analysis", "Canny detector"],
    links: [
      {
        label: "Tutorial 1",
        href: "/teaching/#legacy-programming-tutorials",
      },
      {
        label: "Tutorial 2",
        href: "/teaching/#legacy-programming-tutorials",
      },
      {
        label: "Blob data",
        href: "/uploads/ImageCourse/blobs.tar.gz",
      },
      {
        label: "PinkDev",
        href: "/uploads/ImageCourse/pinkdev.tgz",
      },
    ],
  },
  {
    slug: "morphomathmaster",
    label: "Master course",
    title: "Mathematical morphology",
    description:
      "Master-level material from Université Gustave Eiffel on dilations and erosions, openings and closings, greyscale morphology, the shaping framework, practical sessions, and projects.",
    topics: ["Morphological operators", "Greyscale morphology", "Shaping"],
    links: [
      {
        label: "Course page",
        href: "/teaching/#legacy-morphomathmaster",
      },
      {
        label: "Dilations",
        href: "/uploads/images/MorphoMathMaster/Dilatation.pdf",
      },
      {
        label: "Openings",
        href: "/uploads/images/MorphoMathMaster/Opening.pdf",
      },
      {
        label: "Shaping",
        href: "/uploads/images/MorphoMathMaster/ShapeMorphoMaster.pdf",
      },
    ],
  },
  {
    slug: "isbs-projet",
    label: "Biomedical imaging",
    title: "ISBS imaging projects",
    description:
      "Third-year imaging projects for bio-engineering students, mixing applied image analysis, project briefs, validation material, and medical or industrial imaging case studies.",
    topics: ["Project briefs", "Validation data", "Applied imaging"],
    links: [
      {
        label: "Project page",
        href: "/teaching/#legacy-isbs-projet",
      },
      {
        label: "Clareal project",
        href: "/uploads/ISBS/Projet_Clareal.pdf",
      },
      {
        label: "Lung project",
        href: "/uploads/ISBS/ProjetPoumon.pdf",
      },
      {
        label: "Lung data",
        href: "/uploads/ISBS/ProjetPoumon.zip",
      },
    ],
  },
  {
    slug: "higra-tutorial",
    label: "Software tutorial",
    title: "Higra tutorial",
    description:
      "A practical tutorial on hierarchical graph analysis, usable online in Google Colab or locally with Python. The notebooks cover connected filters and hierarchical segmentation.",
    topics: ["Hierarchical graphs", "Connected filters", "Segmentation"],
    links: [
      {
        label: "Tutorial page",
        href: "/teaching/#legacy-higra-tutorial",
      },
      {
        label: "Requirements",
        href: "/uploads/Higra/requirements.txt",
      },
      {
        label: "Hands-on notebook",
        href: "/uploads/Higra/Hands%20on%20Higra.ipynb",
      },
      {
        label: "Hierarchical segmentation",
        href: "/uploads/Higra/HierarchicalSegmentation.ipynb",
      },
    ],
  },
];

const books = [
  {
    title: "Systèmes d'exploitation - Synthèse de cours & exercices corrigés",
    detail:
      "with Bart Lamiroy and Hugues Talbot, Pearson Education France, 2006",
    description:
      "A compact course-and-exercises book for operating-system foundations, connected to the long-running computer-science teaching at ESIEE.",
    cover: "/archive/operating-systems-book.jpg",
    alt: "Systèmes d'exploitation book cover",
    links: [
      {
        label: "HAL",
        href: "https://hal.science/hal-00622092v1",
      },
    ],
  },
  {
    title: "Mathematical Morphology: from theory to applications",
    detail: "with Hugues Talbot, ISTE-Wiley, 2010",
    description:
      "A reference volume for morphology courses, from operators and connected filters to applications in image analysis.",
    cover: "/archive/mathematical-morphology-book.jpg",
    alt: "Mathematical Morphology from theory to applications book cover",
    links: [
      {
        label: "HAL",
        href: "https://hal.science/hal-00622479v1",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1002/9781118600788",
      },
    ],
  },
  {
    title: "Modern Approaches to Discrete Curvature",
    detail: "with Pascal Romon, Springer, 2017",
    description:
      "A modern reference for discrete geometric ideas that support teaching around graphs, meshes, surfaces, and geometric computing.",
    cover: "/archive/discrete-curvature-book.jpg",
    alt: "Modern Approaches to Discrete Curvature book cover",
    links: [
      {
        label: "HAL",
        href: "https://hal.science/hal-01597556v1",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1007/978-3-319-58002-9",
      },
    ],
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
          <Link href="/software">Software</Link>
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
            I have taught at engineering and Master&apos;s level across discrete
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
              <span className="teaching-theme-mark" aria-hidden="true">
                {area.accent === "ai" ? (
                  <svg
                    className="teaching-theme-network"
                    viewBox="0 0 44 44"
                    focusable="false"
                  >
                    <g className="network-lines">
                      <path d="M10 12 L22 16 L34 10" />
                      <path d="M10 12 L22 28 L34 22" />
                      <path d="M10 22 L22 16 L34 22" />
                      <path d="M10 22 L22 28 L34 34" />
                      <path d="M10 32 L22 16 L34 10" />
                      <path d="M10 32 L22 28 L34 34" />
                    </g>
                    <g className="network-nodes">
                      <circle cx="10" cy="12" r="3" />
                      <circle cx="10" cy="22" r="3" />
                      <circle cx="10" cy="32" r="3" />
                      <circle cx="22" cy="16" r="3.2" />
                      <circle cx="22" cy="28" r="3.2" />
                      <circle cx="34" cy="10" r="3" />
                      <circle cx="34" cy="22" r="3" />
                      <circle cx="34" cy="34" r="3" />
                    </g>
                  </svg>
                ) : null}
              </span>
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
        <ul className="book-list teaching-book-list">
          {books.map((book) => (
            <li key={book.title}>
              <img src={book.cover} alt={book.alt} />
              <div>
                <strong>{book.title}</strong>
                <span>{book.detail}</span>
                <p>{book.description}</p>
                <div className="book-resource-links">
                  {book.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Archive</p>
          <h2>Course resources from the previous site</h2>
        </div>
        <div className="course-archive-grid">
          {courseArchives.map((course) => (
            <article
              className="course-archive-card"
              id={`legacy-${course.slug}`}
              key={course.title}
            >
              <span className="archive-label">{course.label}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <ul className="course-topic-list">
                {course.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <div className="course-link-list">
                {course.links.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
