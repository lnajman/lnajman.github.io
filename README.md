# Laurent Najman Website

Source for the preview version of Laurent Najman's academic website.

The public preview is intended to run on GitHub Pages at:

https://lnajman.github.io/

The production domain `laurentnajman.org` remains hosted separately until the
new site is reviewed and ready to switch.

## Publications

Publications are fetched from HAL and written to:

```bash
data/generated/publications.json
```

Manual duplicate decisions are kept in:

```bash
data/publication-overrides.json
```

To refresh HAL data locally:

```bash
pnpm run fetch:hal
```

## Local Development

```bash
pnpm install
pnpm run dev
```

## GitHub Pages Build

```bash
pnpm run build:github
```

The GitHub Actions workflow rebuilds the site from HAL on pushes, manual
dispatches, and a weekly schedule.

## Open Notes

Remaining non-domain discussion points are tracked in:

```bash
docs/open-discussion-notes.md
```
