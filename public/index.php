<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Legacy page moved | Laurent Najman</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #123d39;
        --muted: #5f6f69;
        --line: #c7d0c5;
        --panel: #fffefb;
        --soft: #eef4ed;
      }

      body {
        min-height: 100vh;
        margin: 0;
        background:
          linear-gradient(90deg, rgba(23, 100, 93, 0.05) 1px, transparent 1px),
          linear-gradient(0deg, rgba(23, 100, 93, 0.05) 1px, transparent 1px),
          #fafbf7;
        background-size: 36px 36px;
        color: var(--ink);
        font-family:
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;
      }

      main {
        width: min(760px, calc(100% - 2rem));
        margin: 14vh auto;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: rgba(255, 254, 251, 0.9);
        box-shadow: 0 18px 50px rgba(25, 54, 48, 0.1);
        padding: clamp(1.2rem, 4vw, 2rem);
      }

      h1 {
        margin: 0 0 0.8rem;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(2rem, 6vw, 3.2rem);
        line-height: 0.95;
      }

      p {
        color: var(--muted);
        line-height: 1.6;
      }

      a {
        color: var(--ink);
        font-weight: 750;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.45rem 1rem;
        margin: 1.25rem 0 0;
        padding: 0;
        list-style: none;
      }

      li a {
        display: block;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--soft);
        padding: 0.45rem 0.7rem;
        text-decoration: none;
      }

      @media (max-width: 560px) {
        ul {
          grid-template-columns: 1fr;
        }
      }
    </style>
    <script>
      const legacyTargets = {
        "": "/",
        home: "/",
        teaching: "/teaching/",
        "ia-et-deep-learning": "/teaching/#legacy-ia-et-deep-learning",
        "im5-1ia": "/teaching/#legacy-im5-1ia",
        "tutorial-1": "/teaching/#legacy-programming-tutorials",
        "tutorial-2": "/teaching/#legacy-programming-tutorials",
        morphomathmaster: "/teaching/#legacy-morphomathmaster",
        "ISBS-projet": "/teaching/#legacy-isbs-projet",
        "higra-tutorial": "/teaching/#legacy-higra-tutorial",
        research: "/research/",
        students: "/supervision/",
        "thesis-direction": "/supervision/",
        "shape-filters": "/research/",
        ppi: "/research/",
        "saliency-maps": "/research/",
        dctv: "/research/",
        "power-watershed": "/research/",
        trees: "/research/",
        tbmr: "/research/",
        "ICPR2016-tutorial": "/research/",
        publications: "/publications/",
        software: "/software/",
        bio: "/bio/",
        resume: "/bio/",
        links: "/bio/",
        "aikido-story": "/aikido-story/",
      };

      const params = new URLSearchParams(window.location.search);
      const page = params.get("page") || "";
      const target = legacyTargets[page] || "/";

      window.location.replace(target);
    </script>
  </head>
  <body>
    <main>
      <h1>This page has moved.</h1>
      <p>
        The old PHP website has been replaced by the current Laurent Najman
        website. If you are not redirected automatically, use one of the links
        below.
      </p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/research/">Research</a></li>
        <li><a href="/teaching/">Teaching</a></li>
        <li><a href="/supervision/">Supervision</a></li>
        <li><a href="/publications/">Publications</a></li>
        <li><a href="/software/">Software</a></li>
        <li><a href="/bio/">Bio / CV</a></li>
        <li><a href="/aikido-story/">Aikido story</a></li>
      </ul>
    </main>
  </body>
</html>
