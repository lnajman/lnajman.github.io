# Open Discussion Notes

Last updated: 2026-06-22

This note tracks remaining website topics plus migration reminders that should
not be lost when the production domain is switched.

## Supervision

- Current supervision page state is acceptable for now.
- Some former students have personal webpages, while others currently use
  ORCID, Google Scholar, GitHub, institutional pages, or thesis pages. Decide
  whether this mixed link policy is fine or whether every entry should follow a
  stricter rule.
- ORCID coverage is partial. We can keep adding ORCID links when reliable IDs
  are known, but it may not be worth forcing ORCID for everyone.
- Thesis and award links are the best current set found during the audit.
  Revisit only if Laurent has better official thesis PDFs, institutional pages,
  award pages, or personal archives.
- Verify the long-term wording of the counts: `2` HDRs, `33` PhD students in
  France, `4` PhD students abroad, and `2` current PhD projects.

## Publications And HAL

- The current HAL import reports `281` raw HAL records and `277` displayed
  publications after accepted duplicate merges.
- A record override hides the placeholder DOI `10.5753/jbcs.202X.XXXXXX` for
  HAL record `hal-05607918`. Remove that override when the final DOI is
  assigned by the journal.
- Duplicate merges are currently accepted. The override file includes the
  operating-system book and three additional duplicate groups. Future HAL
  refreshes may surface new duplicate candidates.
- The publication type filters now include journal articles, books, conference
  papers, book chapters, reports, special issues and proceedings, theses and
  habilitation, and other publications. Decide later whether these labels need
  more academic wording.
- The latest external link audit checked `719` URLs: `708` returned OK, `10`
  DOI publisher destinations returned automated-access warnings, and LinkedIn
  returned an anti-bot response for Laurent's profile. The internal route,
  asset, fragment, and sitemap checks found no broken links.

## Bio, Research, And Personal Pages

- Aikido story: the older full-text version from the current website has been
  migrated, with attribution. A later content pass can still tune presentation
  or wording, but the page is no longer only a placeholder.
- Technion: decide final visibility and wording. The current concern is not
  factual accuracy but how much prominence is appropriate given political
  implications.
- Editorial positions: current and previous editorial roles are present, but a
  final factual pass would be useful before considering the bio page finished.
- Research themes are in better shape now, including deep learning and "graphs
  and simplicial complexes". A later pass could tune the selected anchor papers
  and theme wording.
- Visual archive: the previous-site cards now use explicit paper and
  implementation links. The redundant book-cover card was replaced with an
  interventional X-ray imaging card for the Vincent Bismuth guide-wire and
  stent-enhancement papers.

## Visual Design And Imagery

- Agreed direction: mathematical and visual, with personal and archival touches
  where they matter. The fuller brief is in `docs/visual-system-brief.md`.
- Visual-system passes are in place: warmer editorial typography, a subtle
  mathematical grid texture, more deliberate hero panels, a stronger
  research-atlas treatment, and page-specific personal/archive treatments for
  Bio, Aikido, and Teaching. Later passes can tune details after visual review.
- Prefer a custom academic/research visual system over a generic website
  template: stronger typography, better page rhythm, more refined section
  spacing, and a clearer visual identity across home, research, bio,
  supervision, teaching, and publications.
- Add illustrations or images where they support the content. Candidate places:
  homepage hero, research themes, selected publications, supervision, teaching,
  and the Aikido story page.
- Avoid stock-looking decoration. Good image sources would be Laurent's own
  photos, research figures, diagrams, book covers, course material, lab/archive
  images, or carefully generated abstract images based on graphs, trees,
  topology, morphology, and deep learning.
- Decide whether the site should feel mostly like a refined academic CV, a
  research-lab profile, or a more personal long-running web archive. A hybrid
  of refined academic CV plus research-lab profile currently seems most natural.

## Teaching

- Archived course links still point to the old `laurentnajman.org` pages. This
  is acceptable for preview, but later we should decide whether to keep them as
  external legacy links, migrate selected material, or archive static copies.

## Migration Checklist

- Keep OVH DNS, hosting, and email forwarding in place until the final switch
  has been tested. This is especially important for `najman.org`, which also
  carries email redirection.
- Keep `lnajman.github.io` as the preview URL until the site content is
  considered finished.
- When ready, configure GitHub Pages for the custom domain
  `laurentnajman.org`, then update DNS and verify HTTPS.
- Preserve the `najman.org` redirect to `laurentnajman.org`.
- Add a permanent server-side redirect for the legacy Aikido story URL:
  `https://laurentnajman.org/index.php?page=aikido-story` ->
  `https://laurentnajman.org/aikido-story/`.
- Consider permanent redirects for the old query-string pages currently handled
  by the preview not-found page, including teaching, research, supervision,
  software/tutorial, resume, and links pages.
- After the switch, submit `https://laurentnajman.org/sitemap.xml` in Search
  Console and check canonical URLs, HTTPS, and redirects.
- Keep the old hosting active briefly after the switch, until redirects and
  email forwarding have been verified in production.

## Technical Follow-Ups

- Production migration SEO: before switching `laurentnajman.org`, preserve the
  old highly ranked Aikido URL with a permanent server-side redirect:
  `https://laurentnajman.org/index.php?page=aikido-story` ->
  `https://laurentnajman.org/aikido-story/`. Use a real `301` or `308` redirect
  through OVH, Cloudflare, or another front layer; GitHub Pages alone is not
  ideal for this query-string legacy URL. Also ensure the new page has the
  canonical production URL and is included in the sitemap/Search Console flow.
- ESLint still warns about several plain `<img>` tags. They work correctly;
  converting them to `next/image` is a performance polish item.
- The GitHub Pages workflow has been updated to current action versions and no
  longer reports the earlier Node 20 deprecation annotation.
- Keep the HAL override mechanism small and explicit. It is now useful for
  single-record metadata corrections as well as duplicate merges.
