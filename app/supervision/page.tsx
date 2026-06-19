import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supervision",
  description:
    "HDR and PhD supervision by Laurent Najman, including former and current doctoral students.",
};

type SupervisionLink = {
  label: string;
  href: string;
};

type SupervisionEntry = {
  name: string;
  title: string;
  year?: string;
  profileUrl?: string;
  link?: string;
  with?: string;
  note?: string;
  awards?: string[];
  awardLinks?: SupervisionLink[];
};

const hdrStudents: SupervisionEntry[] = [
  {
    name: "Thierry Géraud",
    title:
      "Outil logiciel pour le traitement d'images: bibliothèque, paradigmes, types et algorithmes",
    year: "2012",
    profileUrl: "http://www.lrde.epita.fr/cgi-bin/twiki/view/Main/ThierryGeraud",
    link: "http://www.lrde.epita.fr/cgi-bin/twiki/view/Main/ThierryGeraudPublications#AnchorReports",
    note: "Université Paris-Est, 248 pages, in French.",
  },
  {
    name: "Evangelia Zacharaki",
    title: "Computational methods towards image-based biomarkers and beyond",
    year: "2017",
    profileUrl: "https://scholar.google.gr/citations?user=g8tXMigAAAAJ&hl=en",
    note: "Université Paris-Est.",
  },
];

const formerPhdStudents: SupervisionEntry[] = [
  {
    name: "Eric Bouvier",
    title: "Crowd Simulation by Particle Systems",
    year: "1997",
    profileUrl:
      "https://web.archive.org/web/20201017150459/https://sites.google.com/site/ericbouvier/",
    link: "https://web.archive.org/web/20201017150500/https://sites.google.com/site/ericbouvier/fichiers/these_EBR.pdf?attredirects=0&d=1",
    with: "Eyal Cohen",
    note: "In French.",
  },
  {
    name: "Jean Cousty",
    title:
      "Discrete watersheds: theory and applications to cardiac image segmentation",
    year: "2007",
    profileUrl: "http://www.esiee.fr/~coustyj/",
    link: "http://tel.archives-ouvertes.fr/tel-00321885/fr/",
    with: "Gilles Bertrand and Michel Couprie",
    note: "In French.",
    awards: ["Special Mention, AFRIF Prize 2008."],
    awardLinks: [
      {
        label: "Award: AFRIF Prize 2008",
        href: "http://www.afrif.asso.fr/?page_id=54",
      },
    ],
  },
  {
    name: "David Menotti Gomes",
    title: "Contrast Enhancement in Digital Imaging using Histogram Equalization",
    year: "2008",
    profileUrl: "http://www.decom.ufop.br/menotti",
    link: "http://tel.archives-ouvertes.fr/tel-00470545",
    with: "Arnaldo de Albuquerque Araujo",
  },
  {
    name: "Roland Levillain",
    title:
      "Towards a Software Architecture for Generic Image Processing (Vers une architecture logicielle pour le traitement d'images générique)",
    year: "2011",
    profileUrl: "http://www.lrde.epita.fr/cgi-bin/twiki/view/Main/RolandLevillain",
    link: "http://www.lrde.epita.fr/cgi-bin/twiki/view/Publications/201111-PhD",
    with: "Thierry Géraud",
  },
  {
    name: "Pierre Boulenguez",
    title:
      "Multispectral imaging assessment of sources and materials for photosimulation",
    year: "2010",
    profileUrl: "http://igm.univ-mlv.fr/~boulengu/",
    link: "http://tel.archives-ouvertes.fr/tel-00587367",
    note: "In French.",
  },
  {
    name: "Camille Couprie",
    title:
      "Graph-based variational optimization and applications in computer vision",
    year: "2011",
    link: "https://theses.hal.science/tel-00666878",
    with: "Hugues Talbot and Leo Grady",
    awards: [
      "Best interdisciplinary PhD, Fondation EADS, 2012.",
      "Accessit, Prix Gilles Kahn 2012.",
      "Best 2013 PhD Prize from the Délégation générale de l'armement.",
    ],
    awardLinks: [
      {
        label: "Award: Fondation EADS 2012",
        href: "https://web.archive.org/web/20121113080418id_/http://www.fondation.eads.com/content/fr/Recherche-fondamentale/Prix/Prix-de-la-meilleure-these/",
      },
      {
        label: "Award: Prix Gilles Kahn 2012",
        href: "https://fr.wikipedia.org/wiki/Prix_Gilles-Kahn",
      },
      {
        label: "Award: DGA PhD Prize 2013",
        href: "http://www.defense.gouv.fr/dga/actualite/prix-de-these-dga-2013-3-chercheurs-recompenses",
      },
    ],
  },
  {
    name: "Vincent Bismuth",
    title:
      "Image Processing Algorithms for the Visualization of Interventional Devices in X-Ray Fluoroscopy",
    year: "2012",
    profileUrl: "http://www.esiee.fr/~bismuthv/",
    link: "http://tel.archives-ouvertes.fr/tel-00747682",
    with: "Régis Vaillant",
  },
  {
    name: "Laszlo Marak",
    title: "Image Segmentation by Continuous Max-Flow",
    year: "2012",
    profileUrl: "http://www.ujoimro.com/",
    link: "https://tel.archives-ouvertes.fr/tel-00786914",
    with: "Hugues Talbot",
  },
  {
    name: "Fabio Augusto Salve Dias",
    title:
      "A study of some morphological operators in simplicial complex spaces",
    year: "2012",
    profileUrl: "https://sites.google.com/site/fabiodias/",
    link: "http://tel.archives-ouvertes.fr/tel-00965583",
    with: "Jean Cousty",
  },
  {
    name: "Omid B. Sakhi",
    title:
      "Segmentation of Heterogeneous Document Images: an approach based on machine learning, connected components and texture analysis",
    year: "2012",
    profileUrl: "http://www.linkedin.com/in/omidsakhi",
    link: "http://tel.archives-ouvertes.fr/tel-00912566",
    with: "Xavier Hilaire",
  },
  {
    name: "Yongchao Xu",
    title:
      "Tree-based shape spaces: definition and applications in image processing and computer vision",
    year: "2013",
    profileUrl: "http://www.lrde.epita.fr/cgi-bin/twiki/view/Main/YongchaoXu",
    link: "http://tel.archives-ouvertes.fr/tel-00965890",
    with: "Thierry Géraud",
  },
  {
    name: "Clément Farabet",
    title: "Towards Real-Time Image Understanding with Convolutional Networks",
    year: "2013",
    profileUrl: "http://www.clement.farabet.net/",
    link: "http://tel.archives-ouvertes.fr/tel-00965622",
    with: "Yann LeCun",
  },
  {
    name: "Imen Melki",
    title:
      "Towards an automated framework for coronary lesions detection and quantification in cardiac CT angiography",
    year: "2015",
    link: "https://tel.archives-ouvertes.fr/view/index/docid/1273806",
    with: "Hugues Talbot and Laurent Launay",
  },
  {
    name: "Elodye Puybareau",
    title: "Movement analysis for biomedical purposes",
    year: "2016",
    link: "http://www.theses.fr/2016PESC1063",
    with: "André Costes and Hugues Talbot",
  },
  {
    name: "Nicolas Boutry",
    title: "A study of well-composedness in dimension n",
    year: "2016",
    profileUrl: "https://www.lrde.epita.fr/wiki/User:Nboutry",
    link: "http://www.theses.fr/2016PESC1025",
    with: "Thierry Géraud",
  },
  {
    name: "Éloïse Grossiord",
    title:
      "Approches hiérarchiques pour l'analyse d'images multivaluées. Application à la segmentation des images TEP/TDM pour la quantification du volume des lésions, particulièrement pour le lymphome",
    year: "2017",
    link: "http://www.theses.fr/s92014",
    with: "Michel Meignan",
    note: "CIFRE funded by Keosys.",
  },
  {
    name: "Tsubasa Hirakawa",
    title: "Stabilization and Image Labeling for NBI Endoscopic Image Recognition",
    year: "2017",
    profileUrl: "https://thirakawa.github.io/",
    link: "https://raw.githubusercontent.com/thirakawa/thirakawa.github.io/fae492ac95d74392c37b0af9e22bc1daab261c7e/papers/phd_thesis_hirakawa.pdf",
    with: "Toru Tamaki, Takio Kurita, and Kazufumi Kaneda",
    note: "PhD registered at Hiroshima University, Japan.",
  },
  {
    name: "Ketan Bacchuwar",
    title:
      "Image processing for semantic analysis of the coronary interventions in cardiology",
    year: "2018",
    profileUrl: "http://scholar.google.co.in/citations?user=XXclzqsAAAAJ&hl=en",
    link: "http://www.theses.fr/2018PESC1074",
    with: "Jean Cousty and Régis Vaillant",
  },
  {
    name: "Clara Jaquet",
    title:
      "Vers la simulation de perfusion du myocarde à partir d'image tomographique scanner",
    year: "2018",
    link: "http://www.theses.fr/2018PESC1117",
    with: "Hugues Talbot and Leo Grady",
  },
  {
    name: "Sravan Danda",
    title:
      "Some Applications of the Power Watershed Framework to Image Segmentation and Image Filtering",
    year: "2019",
    link: "https://drive.google.com/drive/folders/1BH3zkfLKJu7t2R5d7WHGesKjcSu5xWWp",
    with: "Daya Sagar",
    note: "PhD registered at the Indian Statistical Institute, Bangalore.",
  },
  {
    name: "Aditya Challa",
    title:
      "Some Studies on Mathematical Morphology for Unsupervised and Semi-Supervised Learning",
    year: "2019",
    link: "https://drive.google.com/file/d/1F29CvzV6X71Kx3uvW_cVZkq-wHrF0JsX/view?usp=sharing",
    with: "Daya Sagar",
    note: "PhD registered at the Indian Statistical Institute, Bangalore.",
  },
  {
    name: "Deise Santana Maia",
    title:
      "A study of hierarchical watersheds on graphs with applications to image segmentation",
    year: "2019",
    profileUrl: "https://scholar.google.fr/citations?user=vEFwxHUAAAAJ&hl=fr&oi=ao",
    link: "http://www.theses.fr/2019PESC2069",
    with: "Jean Cousty and Benjamin Perret",
  },
  {
    name: "Thanh Nguyen",
    title:
      "Object Detection using Component-Graphs and ConvNets with Applications to Astronomical Images",
    year: "2021",
    profileUrl: "https://scholar.google.fr/citations?hl=en&user=-sqYIDYAAAAJ",
    link: "https://theses.fr/2021UEFL2020",
    with: "Hugues Talbot and Giovanni Chierchia",
  },
  {
    name: "Yamna Ouchtar",
    title:
      "Developing and Implementing Watershed Classification Algorithms for Imbalanced Datasets: an Application to the Detection of Acute Chest Syndrome in patients with Sickle Cell Disease",
    year: "2023",
    link: "https://theses.fr/2023UEFL2055",
    with: "Pablo Bartolucci and Benjamin Perret",
  },
  {
    name: "Mariia Zameshina",
    title: "Advancing ethical AI: fairness, diversity, and privacy in generative modeling",
    year: "2024",
    profileUrl: "https://sites.google.com/view/mzameshina",
    link: "https://theses.fr/2024UEFL2013",
    with: "Olivier Teytaud",
  },
  {
    name: "Sarah Almeida Carneiro",
    title:
      "Prediction of mobility data with prior on the topography of an infrastructure of a road network",
    year: "2024",
    link: "https://theses.fr/2024UEFL2052",
    with: "Aurélie Chataignon and Giovanni Chierchia",
  },
  {
    name: "Caroline Mazini Rodrigues",
    title: "Enhancing interpretability in explanations of Convolutional Neural Networks",
    year: "2024",
    link: "https://theses.fr/2024UEFL2056",
    with: "Nicolas Boutry",
  },
  {
    name: "Quentin Garrido",
    title: "Self-supervised learning beyond invariant image representations",
    year: "2025",
    profileUrl: "https://garridoq.com/",
    link: "https://theses.fr/2025UEFL2031",
    with: "Yann LeCun",
    awards: [
      "Outstanding Paper Honorable Mention at ICLR 2023.",
      "Ian Lawson Van Toch Memorial Award for Outstanding Student Paper at ISMB 2022.",
    ],
    awardLinks: [
      {
        label: "Award: ICLR 2023 honorable mention",
        href: "https://blog.iclr.cc/2023/03/21/announcing-the-iclr-2023-outstanding-paper-award-recipients/",
      },
      {
        label: "Paper: ICLR 2023",
        href: "https://openreview.net/forum?id=kDEL91Dufpa",
      },
      {
        label: "Award: ISMB 2022 Ian Lawson Van Toch",
        href: "https://web.archive.org/web/20230326020147/https://www.iscb.org/ismb2022-general-info/awards#ian",
      },
      {
        label: "Paper: Bioinformatics 2022",
        href: "https://hal.science/hal-03136103",
      },
    ],
  },
  {
    name: "Raoul Sallé de Chou",
    title:
      "A myocardial perfusion simulation pipeline based on machine-learning computational methods",
    year: "2025",
    link: "https://theses.fr/2025UPASG040",
    with: "Hugues Talbot and Irène Vignon-Clementel",
  },
];

const currentPhdStudents: SupervisionEntry[] = [
  {
    name: "Matheus Barros Pereira",
    title:
      "Towards Spatial Hierarchical Learning for Semantic Segmentation in an Open World",
    year: "started in 2021",
    with: "Jefersson Alex dos Santos",
  },
  {
    name: "Léo Hein",
    title:
      "Apprentissage profond sur graphes pour la prédiction des flux de mobilité et de la qualité de l'air en milieu urbain",
    year: "started in 2023",
    with: "Giovanni Chierchia, Aurélie Chataignon, and Giovanni De Nunzio",
  },
];

function EntryList({
  documentLabel,
  entries,
}: {
  documentLabel: string;
  entries: SupervisionEntry[];
}) {
  return (
    <ol className="supervision-list">
      {entries.map((entry) => {
        const explicitLinks = [
          entry.profileUrl
            ? { label: "Profile", href: entry.profileUrl }
            : undefined,
          entry.link ? { label: documentLabel, href: entry.link } : undefined,
          ...(entry.awardLinks || []),
        ].filter((link): link is SupervisionLink => link !== undefined);

        return (
          <li key={`${entry.name}-${entry.title}`} className="supervision-item">
            <div>
              <h3>
                {entry.profileUrl ? (
                  <a href={entry.profileUrl}>{entry.name}</a>
                ) : (
                  entry.name
                )}
              </h3>
              <p>
                {entry.link ? (
                  <a href={entry.link}>{entry.title}</a>
                ) : (
                  entry.title
                )}
              </p>
              {explicitLinks.length ? (
                <div className="supervision-links">
                  {explicitLinks.map((link) => (
                    <a href={link.href} key={`${entry.name}-${link.label}`}>
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="supervision-detail">
              {entry.year ? <span>{entry.year}</span> : null}
              {entry.with ? <span>With {entry.with}</span> : null}
              {entry.note ? <span>{entry.note}</span> : null}
              {entry.awards?.map((award) => (
                <span key={award}>{award}</span>
              ))}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function SupervisionPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/supervision" aria-current="page">
            Supervision
          </Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell">
        <p className="eyebrow">Supervision</p>
        <h1>HDR and PhD supervision</h1>
        <p>
          Supervision is a central part of research activity: HDRs, PhD theses,
          collaborations with co-supervisors, and the trajectories of students
          trained across mathematical morphology, imaging, topology, computer
          vision, biomedical applications, and deep learning.
        </p>
        <div className="supervision-stats" aria-label="Supervision summary">
          <div>
            <strong>2</strong>
            <span>HDRs supervised</span>
          </div>
          <div>
            <strong>33</strong>
            <span>PhD students in France</span>
          </div>
          <div>
            <strong>4</strong>
            <span>PhD students abroad</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Current PhD projects</span>
          </div>
        </div>
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">HDR</p>
            <h2>Habilitation à diriger les recherches</h2>
          </div>
          <Link className="text-link" href="/bio">
            Bio and CV
          </Link>
        </div>
        <EntryList documentLabel="HDR manuscript" entries={hdrStudents} />
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Doctoral supervision</p>
          <h2>Former PhD students</h2>
        </div>
        <EntryList documentLabel="PhD thesis" entries={formerPhdStudents} />
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">In progress</p>
          <h2>Current and recent PhD students</h2>
        </div>
        <EntryList documentLabel="PhD thesis" entries={currentPhdStudents} />
      </section>
    </main>
  );
}
