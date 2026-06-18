import Link from "next/link";

const legacyRedirectScript = `
(() => {
  const routes = {
    bio: "/bio/",
    publications: "/publications/",
    research: "/research/",
    teaching: "/teaching/",
    "ia-et-deep-learning": "/teaching/",
    "im5-1ia": "/teaching/",
    "tutorial-1": "/teaching/",
    "tutorial-2": "/teaching/",
    morphomathmaster: "/teaching/",
    "ISBS-projet": "/teaching/",
    "higra-tutorial": "/teaching/"
  };
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");
  if (window.location.pathname.endsWith("/index.php")) {
    window.location.replace(routes[page] || "/");
  }
})();
`;

export default function NotFound() {
  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: legacyRedirectScript }} />
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/research">Research</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/teaching">Teaching</Link>
        </nav>
      </header>

      <section className="page-hero section-shell">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          This page is not available on the new site. The main sections are
          research, publications, bio, and teaching.
        </p>
        <div className="hero-actions" aria-label="Main links">
          <Link className="primary-link" href="/">
            Home
          </Link>
          <Link className="secondary-link" href="/publications">
            Publications
          </Link>
          <Link className="secondary-link" href="/teaching">
            Teaching
          </Link>
        </div>
      </section>
    </main>
  );
}
