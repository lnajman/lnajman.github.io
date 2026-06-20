# Open Discussion Notes

Last updated: 2026-06-20

This note tracks remaining website topics that are not the domain, DNS, OVH,
GitHub Pages custom-domain, or email-forwarding discussion.

## Supervision

- Current supervision page state is acceptable for now.
- Clement Farabet profile link needs a decision. The current link,
  `http://www.clement.farabet.net/`, redirects toward `http://clmt.ai/`.
  The `https://clmt.ai/` target responded only when certificate validation was
  ignored during checks. We should decide whether to keep the old redirecting
  URL, switch to `http://clmt.ai/`, use another official profile, or remove the
  profile link.
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
- Several DOI destinations and LinkedIn block automated link checks, but the
  latest audit found no true broken links after the placeholder DOI was hidden.

## Bio, Research, And Personal Pages

- Aikido story: Laurent prefers the older full-text version from the current
  website and takes responsibility for keeping it. We still need a final content
  pass on the exact text, attribution, and presentation.
- Technion: decide final visibility and wording. The current concern is not
  factual accuracy but how much prominence is appropriate given political
  implications.
- Editorial positions: current and previous editorial roles are present, but a
  final factual pass would be useful before considering the bio page finished.
- Research themes are in better shape now, including deep learning and "graphs
  and simplicial complexes". A later pass could tune the selected anchor papers
  and theme wording.

## Teaching

- Archived course links still point to the old `laurentnajman.org` pages. This
  is acceptable for preview, but later we should decide whether to keep them as
  external legacy links, migrate selected material, or archive static copies.

## Technical Follow-Ups

- ESLint still warns about two plain `<img>` tags in `app/page.tsx` and
  `app/bio/page.tsx`. They work correctly; converting them to `next/image` is a
  performance polish item.
- GitHub Actions reports a Node 20 deprecation warning for some upstream
  actions being forced to Node 24. The deployment still succeeds.
- Keep the HAL override mechanism small and explicit. It is now useful for
  single-record metadata corrections as well as duplicate merges.
