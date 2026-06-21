import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: siteRoot,
  },
  typescript: {
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
