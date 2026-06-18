# Conduit Website

Unified **Next.js 16** marketing site and **v0.17 documentation** for [getconduit.dev](https://getconduit.dev).

## Structure

| Path | Purpose |
|------|---------|
| `apps/web/` | **New unified site** — marketing + Fumadocs MDX docs |
| `www/` | Legacy marketing (Next 12) — retire after cutover |
| `documentation/` | Legacy Docusaurus docs — retire after cutover |

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

Build `apps/web` and deploy as a single static/SSR site. Legacy Netlify split (`www` + `documentation` proxy) is replaced by one app.

See `apps/web/public/_redirects` for legacy URL mappings. Deployment cutover is documented in maintainer channels, not in this repo.
