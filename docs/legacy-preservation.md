# Legacy Preservation Pass

This pass prepares the GitHub Pages site for a later transfer of
`laurentnajman.org`, where the old OVH/PHP website may disappear.

## What Was Preserved

- Old-site files from the audit are mirrored under `public/uploads/...`, keeping
  their historical URL paths where practical.
- Teaching-page links now use local `/uploads/...` files rather than absolute
  `https://laurentnajman.org/uploads/...` links.
- A static `public/index.php` compatibility page maps old
  `index.php?page=...` URLs to current pages or anchors. This protects visitors
  who follow old links after the domain transfer.
- The full generated inventory is in `docs/legacy-preserved-assets.json`.

## Important Limitation

GitHub Pages cannot provide a true server-side `301` or `308` redirect for the
old query-string URLs by itself. The static `index.php` page performs a
client-side redirect and provides fallback links. For SEO-sensitive pages, most
importantly the old Aikido story URL, a real permanent redirect through OVH,
Cloudflare, or another front layer is still preferable at migration time.

## Former Oversized Asset

The old file `/uploads/TBMR/supplementary_material.pdf` was initially about
120 MB, above GitHub's normal per-file limit. It has been replaced in
`public/uploads/TBMR/supplementary_material.pdf` by the smaller PDF supplied on
2026-06-22, so the historical path can now be preserved in the GitHub Pages
site.

The only remaining size note is that
`/uploads/ICPR2016/GB-Morpho-ICPR.pdf` is about 53 MB. GitHub accepted it, but
warned that it is above the recommended 50 MB per-file size.
