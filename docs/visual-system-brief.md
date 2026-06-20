# Visual System Brief

Last updated: 2026-06-20

## Chosen Direction

Mathematical and visual, with personal and archival touches where they matter.

The site should feel like Laurent Najman's research world made visible: precise,
elegant, readable, and grounded in discrete structures. It should not feel like
a generic academic template or a decorative portfolio.

## Design Thesis

Use graphs, trees, segmentations, contours, grids, simplicial complexes, and
image-analysis artifacts as the visual grammar of the site.

The goal is not to put math wallpaper behind every page. The goal is to give the
site a recognizable structure and rhythm that reflects the research: discrete,
constructed, layered, and visual.

## Mood

- Refined academic CV.
- Research atlas.
- Mathematical monograph.
- Long-running personal web archive, only as a secondary tone.

The dominant tone should be mathematical and visual. The archival tone belongs
mainly to the teaching links, Aikido story, older works, supervision lineage,
and personal notes.

## Principles

- Content first: publications, supervision, bio, and research must remain easy
  to scan.
- Visuals must carry meaning. Avoid stock-looking decoration.
- Research figures and diagrams are better than generic photographs.
- Abstract/generated imagery is acceptable when it is clearly interpretive, not
  pretending to be a scientific result.
- The publications page should remain dense, calm, and highly functional.
- The research page should become the most visual page.
- The supervision page should feel like lineage and continuity.
- The Aikido story should feel literary and calm, not scientific.

## Visual Motifs

- Graphs: nodes, edges, minimum spanning trees, graph cuts, saliency maps.
- Trees: component trees, trees of shapes, hierarchies, decision/explanation
  trees.
- Topology: simplicial complexes, cubical grids, Morse vector fields,
  persistent structures.
- Morphology: watershed contours, segmentations, connected filters, shapes.
- Deep learning: interpretable maps, concept structures, activation/explanation
  visuals.
- Archive: book covers, lecture notes, old course material, thesis title pages,
  selected personal images.

## Palette Direction

Refine the current palette rather than replacing it completely.

- Background: warm off-white, not pure white.
- Text: deep charcoal or ink.
- Primary accent: dark teal or green.
- Secondary accent: muted rust.
- Tertiary accent: restrained violet or blue for topology and deep learning.
- Lines and panels: light warm gray, very subtle.

Avoid:

- dominant academic blue;
- one-note teal everywhere;
- glossy gradients;
- stock bokeh or abstract blobs;
- heavy dark mode as the default identity.

## Typography Direction

Use an editorial pairing.

- Headings: refined serif or semi-serif with a mathematical/bookish tone.
- Body, navigation, publication metadata, filters: clear sans-serif.
- Publication lists should stay compact and readable.
- Hero-scale type belongs only on the homepage and page heroes.
- No negative letter spacing.

Typography should make the site feel closer to a monograph, catalogue, or
research notebook than to a startup landing page.

## Page Treatments

### Home

- Keep the portrait, but pair it with a research visual element.
- Consider a subtle graph/tree/topology structure as a first-viewport signal.
- The hero should say "Laurent Najman" clearly and immediately.
- Use the homepage to establish the visual grammar without making it busy.

### Research

- Make this the central visual page.
- Add a visual tile or figure treatment for each theme.
- Prefer real research diagrams when available.
- Use generated abstract structures only as placeholders or connective tissue.

### Supervision

- Treat as a lineage/archive page.
- Consider a timeline or structured list with subtle branch/line motifs.
- Keep student entries readable; avoid turning it into a decorative graph that
  hides information.
- Links to thesis, profile, awards, and ORCID should remain obvious.

### Publications

- Keep dense, functional, and catalogue-like.
- Improve hierarchy and typography, but avoid heavy illustration.
- Use type filters and search as the main interaction.
- Visual touches should be quiet: metadata rhythm, separators, labels, and
  maybe small type icons, not large images.

### Bio

- Use the portrait and possibly book covers or selected archival images.
- Keep career, education, and editorial roles clean.
- The Technion mention, if retained, should be factual and proportionate.

### Teaching

- Use archival/course-document feeling.
- Consider thumbnails of old course pages or lecture material if available.
- Keep links clear, because many point to legacy resources.

### Aikido Story

- Treat as an essay page.
- Use calm typography, generous reading width, and possibly a single image or
  quiet archival treatment.
- Do not force the mathematical motif here.

## Image Strategy

Preferred source order:

1. Laurent's own research figures and diagrams.
2. Book covers and official publication material.
3. Course and lecture material.
4. Personal or archival photos where relevant.
5. Carefully generated abstract visuals inspired by graphs, trees, topology,
   morphology, segmentation, and deep learning.

Questions to answer:

- Which research figures can be reused publicly?
- Are there canonical images from papers that Laurent wants associated with the
  site?
- Are book cover images available and acceptable to display?
- Should we generate a small family of abstract visuals for themes where no
  figure is available?
- Should the visual style be monochrome linework, restrained color figures, or a
  mixture?

## Implementation Plan

1. Gather candidate assets:
   - portrait variants;
   - research figures;
   - segmentation examples;
   - diagrams of trees, graphs, simplicial complexes, watersheds;
   - book covers;
   - teaching/archive material.
2. Build a small visual prototype:
   - homepage hero;
   - research page theme block;
   - supervision lineage treatment;
   - publications list polish.
3. Review the prototype visually on desktop and mobile.
4. Apply the chosen system across the remaining pages.
5. Run link, build, and responsive QA after implementation.

## First Implementation Candidate

Start with the homepage and research page.

Reason:

- They set the identity of the site.
- They are where mathematical imagery can help most.
- Publications and supervision are already functionally strong and should be
  altered more cautiously.

The first prototype should include:

- one homepage research visual paired with the portrait;
- a refined heading and text system;
- a research page visual grid or atlas treatment;
- at least one real or generated visual for graphs/trees/topology.
