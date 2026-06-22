import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  archiveCourseBySlug,
  archiveCourses,
  type CourseMaterial,
} from "@/data/teaching-archive";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{
    course: string;
  }>;
};

export function generateStaticParams() {
  return archiveCourses.map((course) => ({
    course: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { course: slug } = await params;
  const course = archiveCourseBySlug[slug];

  if (!course) {
    return {};
  }

  return {
    title: `${course.title} | Teaching archive`,
    description: course.description,
    alternates: {
      canonical: absoluteUrl(`/teaching/${course.slug}/`),
    },
  };
}

function MaterialItem({ material }: { material: CourseMaterial }) {
  const content = (
    <>
      <span className="material-kind">{material.kind}</span>
      <strong>{material.label}</strong>
      {material.description ? <p>{material.description}</p> : null}
    </>
  );

  if (!material.href) {
    return <div className="course-material-card is-note">{content}</div>;
  }

  return (
    <a className="course-material-card" href={material.href}>
      {content}
    </a>
  );
}

export default async function TeachingArchivePage({ params }: PageProps) {
  const { course: slug } = await params;
  const course = archiveCourseBySlug[slug];

  if (!course) {
    notFound();
  }

  const materialCount = course.sections.reduce(
    (count, section) =>
      count + section.materials.filter((material) => material.href).length,
    0,
  );

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

      <section className="page-hero section-shell course-page-hero">
        <div>
          <p className="eyebrow">Teaching archive</p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="course-page-actions">
            <Link className="secondary-link" href="/teaching/">
              Teaching overview
            </Link>
            <a
              className="secondary-link"
              href={`/index.php?page=${course.legacyPage}`}
            >
              Legacy URL
            </a>
          </div>
        </div>
        <aside className="course-page-panel" aria-label="Archive summary">
          <span>{course.label}</span>
          <strong>{materialCount}</strong>
          <p>linked archive documents and resources</p>
          <ul className="course-topic-list">
            {course.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section-shell course-context-section">
        {course.context.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="section-shell cv-section">
        <div className="section-heading">
          <p className="eyebrow">Documents</p>
          <h2>Course material</h2>
        </div>
        <div className="course-material-layout">
          {course.sections.map((section) => (
            <section className="course-material-section" key={section.title}>
              <div className="course-material-heading">
                <h3>{section.title}</h3>
                {section.description ? <p>{section.description}</p> : null}
              </div>
              <div className="course-material-list">
                {section.materials.map((material) => (
                  <MaterialItem material={material} key={material.label} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
