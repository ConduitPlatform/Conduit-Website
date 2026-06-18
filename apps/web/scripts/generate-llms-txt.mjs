#!/usr/bin/env node
/**
 * Generates public/llms.txt and public/llms-full.txt from doc frontmatter.
 * Run: node scripts/generate-llms-txt.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "content/docs");
const META_PATH = path.join(DOCS_DIR, "meta.json");
const SITE_URL = "https://getconduit.dev";

function slugFromMetaEntry(entry) {
  if (entry.startsWith("---")) return null;
  const normalized = entry.replace(/\.mdx?$/, "");
  if (normalized.endsWith("/index")) {
    return normalized.slice(0, -"/index".length);
  }
  return normalized;
}

function orderByMeta(slugs, metaEntries) {
  const order = metaEntries
    .map(slugFromMetaEntry)
    .filter((s) => s !== null && s !== "index");
  const rank = new Map(order.map((slug, i) => [slug, i]));
  return [...slugs].sort((a, b) => {
    const ra = rank.has(a.slug) ? rank.get(a.slug) : Number.MAX_SAFE_INTEGER;
    const rb = rank.has(b.slug) ? rank.get(b.slug) : Number.MAX_SAFE_INTEGER;
    if (ra !== rb) return ra - rb;
    return a.slug.localeCompare(b.slug);
  });
}

function walk(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = path.join(base, entry.name);
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, rel));
    else if (/\.mdx?$/.test(entry.name)) files.push({ full, rel });
  }
  return files;
}

function slugFromPath(rel) {
  const normalized = rel.replace(/\\/g, "/").replace(/\.mdx?$/, "");
  if (normalized === "index") return "";
  if (normalized.endsWith("/index")) {
    return normalized.slice(0, -"/index".length);
  }
  return normalized;
}

function docUrl(slug) {
  return slug ? `${SITE_URL}/docs/${slug}` : `${SITE_URL}/docs`;
}

const files = walk(DOCS_DIR).sort((a, b) => a.rel.localeCompare(b.rel));
const pages = files.map(({ full, rel }) => {
  const raw = fs.readFileSync(full, "utf8");
  const { data } = matter(raw);
  const slug = slugFromPath(rel.replace(/\\/g, "/"));
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    agent_summary: data.agent_summary || data.description || "",
  };
});

const metaPages = JSON.parse(fs.readFileSync(META_PATH, "utf8")).pages;

const gettingStartedOrder = [
  "intro",
  "getting-started",
  "getting-started/install",
  "getting-started/mcp-setup",
  "getting-started/first-app",
  "getting-started/with-llms",
];

function sortByOrder(items, order) {
  const rank = new Map(order.map((slug, i) => [slug, i]));
  return [...items].sort((a, b) => {
    const ra = rank.has(a.slug) ? rank.get(a.slug) : Number.MAX_SAFE_INTEGER;
    const rb = rank.has(b.slug) ? rank.get(b.slug) : Number.MAX_SAFE_INTEGER;
    if (ra !== rb) return ra - rb;
    return a.slug.localeCompare(b.slug);
  });
}

const gettingStartedPages = pages.filter(
  (p) =>
    p.slug.startsWith("getting-started") ||
    p.slug === "intro",
);

const sections = {
  "Getting Started": sortByOrder(gettingStartedPages, gettingStartedOrder),
  Learn: orderByMeta(
    pages.filter((p) => p.slug.startsWith("learn/")),
    metaPages,
  ),
  Deployment: orderByMeta(
    pages.filter((p) => p.slug === "deployment" || p.slug.startsWith("deployment/")),
    metaPages,
  ),
  Modules: orderByMeta(
    pages.filter((p) => p.slug === "modules" || p.slug.startsWith("modules/")),
    metaPages,
  ),
  Guides: orderByMeta(
    pages.filter((p) => p.slug.startsWith("guides/")),
    metaPages,
  ),
  Reference: orderByMeta(
    pages.filter((p) => p.slug.startsWith("reference/")),
    metaPages,
  ),
  Resources: orderByMeta(
    pages.filter((p) => p.slug.startsWith("resources/")),
    metaPages,
  ),
};

function renderSection(name, items, expanded = false) {
  if (!items.length) return "";
  const lines = [`## ${name}`, ""];
  for (const p of items) {
    const summary = expanded ? p.agent_summary : p.description;
    lines.push(`- [${p.title}](${docUrl(p.slug)}): ${summary}`);
  }
  lines.push("");
  return lines.join("\n");
}

const llmsTxt = [
  "# Conduit Platform",
  "> Self-hosted modular Backend-as-a-Service — documentation for v0.17",
  "",
  "Application runtime code uses the **Client API** (default port 3000) with user bearer tokens.",
  "Provisioning uses the **Admin API** or **MCP** at `/mcp` — never from app code.",
  "",
  ...Object.entries(sections).map(([name, items]) => renderSection(name, items, false)),
  "## Optional",
  "",
  `- [llms-full.txt](${SITE_URL}/llms-full.txt): Expanded index with agent summaries`,
  `- [Conduit Cursor plugin](https://github.com/Quintessential-SFT/conduit-cursor-plugin): Agent skills and MCP workflows`,
  "",
].join("\n");

const llmsFull = [
  "# Conduit Platform (full index)",
  "> Agent-oriented summaries from doc frontmatter",
  "",
  ...Object.entries(sections).map(([name, items]) => renderSection(name, items, true)),
].join("\n");

fs.writeFileSync(path.join(ROOT, "public/llms.txt"), llmsTxt);
fs.writeFileSync(path.join(ROOT, "public/llms-full.txt"), llmsFull);
console.log(`Wrote llms.txt (${pages.length} pages)`);
