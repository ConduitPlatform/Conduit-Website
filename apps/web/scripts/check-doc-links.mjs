#!/usr/bin/env node
/**
 * Verifies internal /docs/ links in content/docs resolve to existing doc slugs.
 * Run: node scripts/check-doc-links.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "content/docs");

/** @param {string} rel */
function slugFromPath(rel) {
  const normalized = rel.replace(/\\/g, "/").replace(/\.mdx?$/, "");
  if (normalized === "index") return "";
  if (normalized.endsWith("/index")) {
    return normalized.slice(0, -"/index".length);
  }
  return normalized;
}

/** @param {string} dir @param {string} base */
function walkDocs(dir, base = "") {
  /** @type {{ full: string, rel: string }[]} */
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDocs(full, rel));
    } else if (/\.mdx?$/.test(entry.name)) {
      files.push({ full, rel });
    }
  }
  return files;
}

/** @param {string} href */
function docsSlugFromHref(href) {
  const withoutHash = href.split("#")[0];
  if (!withoutHash.startsWith("/docs")) return null;
  const rest = withoutHash.replace(/^\/docs\/?/, "");
  return rest.replace(/\/$/, "");
}

/** @param {string} content */
function extractDocLinks(content) {
  /** @type {string[]} */
  const links = [];
  const patterns = [
    /\[[^\]]*\]\((\/docs\/[^)\s"#]+(?:#[^)\s"]+)?)\)/g,
    /href=["'](\/docs\/[^"'#]+(?:#[^"']+)?)["']/g,
    /href:\s*["'](\/docs\/[^"'#]+)["']/g,
  ];
  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      links.push(match[1]);
    }
  }
  return links;
}

const docFiles = walkDocs(DOCS_DIR);
const validSlugs = new Set(
  docFiles.map(({ rel }) => slugFromPath(rel)).filter((s) => s !== undefined),
);

/** @type {{ file: string, href: string, slug: string }[]} */
const broken = [];

for (const { full, rel } of docFiles) {
  const content = fs.readFileSync(full, "utf8");
  const seen = new Set();
  for (const href of extractDocLinks(content)) {
    if (seen.has(href)) continue;
    seen.add(href);

    const slug = docsSlugFromHref(href);
    if (slug === null) continue;
    if (validSlugs.has(slug)) continue;

    broken.push({
      file: path.relative(ROOT, full),
      href,
      slug,
    });
  }
}

/** @param {string} content */
function extractLlmsDocLinks(content) {
  /** @type {string[]} */
  const links = [];
  for (const match of content.matchAll(/\((https:\/\/getconduit\.dev\/docs\/[^)\s]+)\)/g)) {
    links.push(match[1]);
  }
  return links;
}

const llmsPath = path.join(ROOT, "public/llms.txt");
if (fs.existsSync(llmsPath)) {
  const llmsContent = fs.readFileSync(llmsPath, "utf8");
  const seenLlms = new Set();
  for (const url of extractLlmsDocLinks(llmsContent)) {
    if (seenLlms.has(url)) continue;
    seenLlms.add(url);
    const slug = docsSlugFromHref(url.replace("https://getconduit.dev", ""));
    if (slug === null) continue;
    if (validSlugs.has(slug)) continue;
    broken.push({
      file: "public/llms.txt",
      href: url,
      slug,
    });
  }
}

if (broken.length === 0) {
  console.log(`check:links OK — ${validSlugs.size} doc slugs, no broken /docs/ links`);
  process.exit(0);
}

console.error(`check:links FAILED — ${broken.length} broken /docs/ link(s):\n`);
for (const { file, href, slug } of broken) {
  console.error(`  ${file}`);
  console.error(`    ${href}  (missing slug: "${slug}")`);
}
process.exit(1);
