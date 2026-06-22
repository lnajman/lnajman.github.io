export type CourseMaterial = {
  label: string;
  href?: string;
  kind:
    | "PDF"
    | "Notebook"
    | "Archive"
    | "Template"
    | "Data"
    | "External"
    | "Page"
    | "Note";
  description?: string;
};

export type ArchiveCourseSection = {
  title: string;
  description?: string;
  materials: CourseMaterial[];
};

export type ArchiveCourse = {
  slug: string;
  legacyPage: string;
  label: string;
  title: string;
  description: string;
  topics: string[];
  context: string[];
  sections: ArchiveCourseSection[];
};

export type ArchiveCourseCard = {
  slug: string;
  label: string;
  title: string;
  description: string;
  topics: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const archiveCourses: ArchiveCourse[] = [
  {
    slug: "operating-systems",
    legacyPage: "teaching",
    label: "Computer science",
    title: "Operating systems and compilation",
    description:
      "Core ESIEE material around operating-system concepts, compilation, exercises, and practical foundations. The operating-systems book remains the durable reference for this part of the teaching archive.",
    topics: ["Operating systems", "Compilation", "Exercises"],
    context: [
      "The old teaching page mainly acted as a gateway toward the computer-science courses. This archive keeps the durable reference visible and separates it from the image-analysis and AI material below.",
    ],
    sections: [
      {
        title: "Reference",
        description:
          "The book used as the principal reference for the operating-systems part of the archive.",
        materials: [
          {
            label: "Systèmes d'exploitation on HAL",
            href: "https://hal.science/hal-00622092v1",
            kind: "External",
            description:
              "Course synthesis and corrected exercises, with Bart Lamiroy and Hugues Talbot.",
          },
        ],
      },
    ],
  },
  {
    slug: "ia-et-deep-learning",
    legacyPage: "ia-et-deep-learning",
    label: "AI course",
    title: "IA et Deep Learning",
    description:
      "A hands-on course built around Keras notebooks in Google Colab or Kaggle, with material on neural networks, convolutional networks, overfitting, project reports, and explainable AI.",
    topics: ["Keras labs", "Colab / Kaggle", "Explainable AI"],
    context: [
      "The original page described a sequence of practical sessions using Keras and notebook environments, with project work and report templates.",
      "The migrated version gathers the lecture notes, short question sheets, explainability material, and report templates in one place.",
    ],
    sections: [
      {
        title: "Course overview",
        materials: [
          {
            label: "Course presentation",
            href: "/uploads/images/DeepLearning/FormationDeep.pdf",
            kind: "PDF",
          },
          {
            label: "Introduction to AI and deep learning",
            href: "/uploads/images/DeepLearning/Intro-AIDeep.pdf",
            kind: "PDF",
          },
        ],
      },
      {
        title: "Deep learning lectures",
        materials: [
          {
            label: "Deep AI",
            href: "/uploads/images/DeepLearning/DeepAI.pdf",
            kind: "PDF",
          },
          {
            label: "Neural networks",
            href: "/uploads/images/DeepLearning/Neural_Networks.pdf",
            kind: "PDF",
          },
          {
            label: "Convolutional neural networks",
            href: "/uploads/images/DeepLearning/CNNs.pdf",
            kind: "PDF",
          },
          {
            label: "ConvNets",
            href: "/uploads/images/DeepLearning/ConvNets.pdf",
            kind: "PDF",
          },
          {
            label: "Overfitting",
            href: "/uploads/images/DeepLearning/Overfitting.pdf",
            kind: "PDF",
          },
          {
            label: "Overfitting questions",
            href: "/uploads/images/DeepLearning/OverfittingQuestions.pdf",
            kind: "PDF",
          },
        ],
      },
      {
        title: "Explainability and reports",
        materials: [
          {
            label: "XAI slides",
            href: "/uploads/images/DeepLearning/xAI_slides.pdf",
            kind: "PDF",
          },
          {
            label: "XAI notes",
            href: "/uploads/images/DeepLearning/xAI.pdf",
            kind: "PDF",
          },
          {
            label: "IEEE report template",
            href: "/uploads/images/DeepLearning/IEEE_Report_Template.pdf",
            kind: "Template",
          },
          {
            label: "IEEE report template sources",
            href: "/uploads/images/DeepLearning/IEEE_Report-Template.zip",
            kind: "Archive",
          },
        ],
      },
    ],
  },
  {
    slug: "im5-1ia",
    legacyPage: "im5-1ia",
    label: "Image processing",
    title: "Image analysis and processing",
    description:
      "Engineering course material on image formation, enhancement, transforms, filtering, segmentation, and connected-geodesic approaches, with practical material based on PinkDev.",
    topics: ["Enhancement", "Filtering", "Segmentation"],
    context: [
      "This page preserves the IM5-1IA image-analysis course material from the previous website, including both lectures and practical-session resources.",
      "The associated programming tutorials now have their own pages, but the shared software and datasets are linked here as well.",
    ],
    sections: [
      {
        title: "Course notes",
        materials: [
          {
            label: "Image analysis, chapter 1",
            href: "/uploads/ImageCourse/01ImageAnalysis-Chap1-FirstPart.pdf",
            kind: "PDF",
          },
          {
            label: "Introduction",
            href: "/uploads/ImageCourse/intro_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Enhancements",
            href: "/uploads/ImageCourse/enhancements_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Transforms",
            href: "/uploads/ImageCourse/transforms_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Filtering",
            href: "/uploads/ImageCourse/filtering_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Segmentation",
            href: "/uploads/ImageCourse/segmentation1_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Master course notes",
            href: "/uploads/ImageCourse/20120314-CoursMaster.pdf",
            kind: "PDF",
          },
        ],
      },
      {
        title: "Practical material",
        materials: [
          {
            label: "PinkDev library",
            href: "/uploads/ImageCourse/pinkdev.tgz",
            kind: "Archive",
          },
          {
            label: "Connected-geodesic approach",
            href: "/uploads/ImageCourse/CGA.pdf",
            kind: "PDF",
          },
          {
            label: "CGA images",
            href: "/uploads/ImageCourse/imagesCGA.tgz",
            kind: "Data",
          },
          {
            label: "Blob images",
            href: "/uploads/ImageCourse/blobs.tar.gz",
            kind: "Data",
          },
        ],
      },
    ],
  },
  {
    slug: "tutorial-1",
    legacyPage: "tutorial-1",
    label: "Programming session",
    title: "First programming sessions",
    description:
      "A first practical session around PinkDev, image differences, blob measurements, and basic image-processing operators.",
    topics: ["PinkDev", "Image difference", "Blob measurements"],
    context: [
      "The old page introduced the PinkDev library and asked students to work from original and processed blob images.",
      "This migrated page keeps the downloadable library and dataset together with the related image-analysis archive.",
    ],
    sections: [
      {
        title: "Downloads",
        materials: [
          {
            label: "PinkDev library",
            href: "/uploads/ImageCourse/pinkdev.tgz",
            kind: "Archive",
          },
          {
            label: "Blob image data",
            href: "/uploads/ImageCourse/blobs.tar.gz",
            kind: "Data",
          },
        ],
      },
      {
        title: "Related course notes",
        materials: [
          {
            label: "Image analysis and processing archive",
            href: "/teaching/im5-1ia/",
            kind: "Page",
            description:
              "Main course page with the lectures used around the programming sessions.",
          },
        ],
      },
    ],
  },
  {
    slug: "tutorial-2",
    legacyPage: "tutorial-2",
    label: "Programming session",
    title: "Second programming sessions",
    description:
      "A second practical session centered on implementing a Canny edge detector, especially the hysteresis thresholding step.",
    topics: ["Canny detector", "Gradient magnitude", "Hysteresis"],
    context: [
      "The original page was mostly an exercise statement: smooth the image, compute gradient magnitude and angle, suppress non-maxima, then perform hysteresis thresholding.",
      "It did not include a separate downloadable file; the related course notes are linked from the image-analysis archive.",
    ],
    sections: [
      {
        title: "Related notes",
        materials: [
          {
            label: "Filtering notes",
            href: "/uploads/ImageCourse/filtering_ln.pdf",
            kind: "PDF",
          },
          {
            label: "Image analysis and processing archive",
            href: "/teaching/im5-1ia/",
            kind: "Page",
          },
        ],
      },
      {
        title: "Exercise statement",
        materials: [
          {
            label: "No separate file was present on the old page",
            kind: "Note",
            description:
              "The exercise text has been preserved as context above; the course notes remain the linked reference.",
          },
        ],
      },
    ],
  },
  {
    slug: "morphomathmaster",
    legacyPage: "morphomathmaster",
    label: "Master course",
    title: "Mathematical morphology",
    description:
      "Master-level material from Université Gustave Eiffel on dilations and erosions, openings and closings, greyscale morphology, the shaping framework, practical sessions, and projects.",
    topics: ["Morphological operators", "Greyscale morphology", "Shaping"],
    context: [
      "This is the mathematical morphology class from the Master Image of Université Gustave Eiffel, preserved from the previous website.",
    ],
    sections: [
      {
        title: "Slide courses",
        materials: [
          {
            label: "Dilations and erosions",
            href: "/uploads/images/MorphoMathMaster/Dilatation.pdf",
            kind: "PDF",
          },
          {
            label: "Openings and closings",
            href: "/uploads/images/MorphoMathMaster/Opening.pdf",
            kind: "PDF",
          },
          {
            label: "Greyscale morphology",
            href: "/uploads/images/MorphoMathMaster/MorphoNDG.pdf",
            kind: "PDF",
          },
          {
            label: "The shaping framework",
            href: "/uploads/images/MorphoMathMaster/ShapeMorphoMaster.pdf",
            kind: "PDF",
          },
        ],
      },
    ],
  },
  {
    slug: "isbs-projet",
    legacyPage: "ISBS-projet",
    label: "Biomedical imaging",
    title: "ISBS imaging projects",
    description:
      "Third-year imaging projects for bio-engineering students, mixing applied image analysis, project briefs, validation material, and medical or industrial imaging case studies.",
    topics: ["Project briefs", "Validation data", "Applied imaging"],
    context: [
      "The old page grouped several third-year imaging projects and asked students to choose one.",
      "The locally preserved project briefs and lung-project data are linked below; some older external teaching files were not part of the old site archive.",
    ],
    sections: [
      {
        title: "Project briefs and data",
        materials: [
          {
            label: "Projet Clareal",
            href: "/uploads/ISBS/Projet_Clareal.pdf",
            kind: "PDF",
          },
          {
            label: "Projet poumon",
            href: "/uploads/ISBS/ProjetPoumon.pdf",
            kind: "PDF",
          },
          {
            label: "Projet poumon data",
            href: "/uploads/ISBS/ProjetPoumon.zip",
            kind: "Data",
          },
        ],
      },
    ],
  },
  {
    slug: "higra-tutorial",
    legacyPage: "higra-tutorial",
    label: "Software tutorial",
    title: "Higra tutorial",
    description:
      "A practical tutorial on hierarchical graph analysis, usable online in Google Colab or locally with Python. The notebooks cover connected filters and hierarchical segmentation.",
    topics: ["Hierarchical graphs", "Connected filters", "Segmentation"],
    context: [
      "Higra is a hierarchical graph analysis library. The original tutorial could be followed online in Google Colab or locally with Python.",
      "The migrated page keeps the requirements file, tutorial data, notebooks, and solution notebooks together.",
    ],
    sections: [
      {
        title: "Setup and data",
        materials: [
          {
            label: "Requirements",
            href: "/uploads/Higra/requirements.txt",
            kind: "Template",
          },
          {
            label: "Tutorial data",
            href: "/uploads/Higra/TutoHigraDGMM_data.zip",
            kind: "Data",
          },
        ],
      },
      {
        title: "Notebooks",
        materials: [
          {
            label: "Hands on Higra",
            href: "/uploads/Higra/Hands%20on%20Higra.ipynb",
            kind: "Notebook",
          },
          {
            label: "Connected filters",
            href: "/uploads/Higra/Connected_filters.ipynb",
            kind: "Notebook",
          },
          {
            label: "Hierarchical segmentation",
            href: "/uploads/Higra/HierarchicalSegmentation.ipynb",
            kind: "Notebook",
          },
          {
            label: "Hierarchical segmentation solutions",
            href: "/uploads/Higra/HierarchicalSegmentation_Solutions.ipynb",
            kind: "Notebook",
          },
          {
            label: "Connected filters solutions",
            href: "/uploads/Higra/Connected_filters_solutions.ipynb",
            kind: "Notebook",
          },
        ],
      },
    ],
  },
];

export const archiveCourseBySlug = Object.fromEntries(
  archiveCourses.map((course) => [course.slug, course]),
) as Record<string, ArchiveCourse>;

export const courseArchiveCards: ArchiveCourseCard[] = [
  {
    slug: "teaching",
    label: "Computer science",
    title: "Operating systems and compilation",
    description:
      "Core ESIEE material around operating-system concepts, compilation, exercises, and practical foundations. The operating-systems book remains the main reference for this part of the teaching archive.",
    topics: ["Operating systems", "Compilation", "Exercises"],
    links: [
      {
        label: "Reference page",
        href: "/teaching/operating-systems/",
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
        label: "Complete archive",
        href: "/teaching/ia-et-deep-learning/",
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
        label: "Complete archive",
        href: "/teaching/im5-1ia/",
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
        href: "/teaching/tutorial-1/",
      },
      {
        label: "Tutorial 2",
        href: "/teaching/tutorial-2/",
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
        label: "Complete archive",
        href: "/teaching/morphomathmaster/",
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
        label: "Complete archive",
        href: "/teaching/isbs-projet/",
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
        label: "Complete archive",
        href: "/teaching/higra-tutorial/",
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
