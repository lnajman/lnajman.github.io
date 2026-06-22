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

## Oversized Asset

The old file `/uploads/TBMR/supplementary_material.pdf` was found and recorded,
but it is about 120 MB, above GitHub's normal per-file limit. It is not included
in the deployable `public/uploads` tree. Options for this file are:

- host it elsewhere and link to that location;
- put it in a GitHub Release;
- use Git LFS if Pages behavior is acceptable after testing;
- omit it if the old TBMR page is not worth fully preserving.
