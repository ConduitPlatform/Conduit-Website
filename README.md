# Conduit Website

Unified **Next.js 16** marketing site and **v0.17 documentation** for [getconduit.dev](https://getconduit.dev).

## Structure

| Path | Purpose |
|------|---------|
| `apps/web/` | **Unified site** — marketing + Fumadocs MDX docs |
| `documentation/` | Legacy Docusaurus archive (v0.14–v0.16) for `archive.getconduit.dev` |

## Development

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Docs at `/docs`.

## Build

```bash
cd apps/web
npm run build
```

Generates `public/llms.txt` before build via `prebuild` script.

## Node

Node.js **24+** recommended.

## Deploy

Build `apps/web` and deploy as a single site (Cloudflare Workers). Legacy Docusaurus docs deploy separately to `archive.getconduit.dev`.

See `apps/web/public/_redirects` for legacy URL mappings. Deployment cutover is documented in maintainer channels, not in this repo.
