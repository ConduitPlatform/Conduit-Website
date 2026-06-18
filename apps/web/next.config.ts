import { existsSync } from "node:fs";
import path from "node:path";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const appRoot = import.meta.dirname;
const monorepoRoot = path.join(appRoot, "../..");
const hasLocalNext = existsSync(
  path.join(appRoot, "node_modules/next/package.json"),
);
const turbopackRoot = hasLocalNext ? appRoot : monorepoRoot;

const CHANGELOG = "/docs/resources/changelog";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  turbopack: {
    root: turbopackRoot,
  },
  async redirects() {
    const ARCHIVE = "https://archive.getconduit.dev";
    return [
      { source: "/blog", destination: CHANGELOG, permanent: true },
      { source: "/blog/:slug", destination: CHANGELOG, permanent: true },
      {
        source: "/docs/v0.16/:path*",
        destination: `${ARCHIVE}/v0.16/:path*`,
        permanent: true,
      },
      {
        source: "/docs/v0.15/:path*",
        destination: `${ARCHIVE}/v0.15/:path*`,
        permanent: true,
      },
      {
        source: "/docs/v0.14/:path*",
        destination: `${ARCHIVE}/v0.14/:path*`,
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
