import type { MetadataRoute } from "next";

export const siteUrl = "https://laurentnajman.org";

export type SiteRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/research/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/publications/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/supervision/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/software/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/teaching/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/bio/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aikido-story/", changeFrequency: "yearly", priority: 0.7 },
];

export function absoluteUrl(path: string) {
  const hasFileExtension = /\/[^/]+\.[^/]+$/.test(path);
  const normalizedPath =
    path === "/" || path.endsWith("/") || hasFileExtension ? path : `${path}/`;

  return new URL(normalizedPath, siteUrl).toString();
}
