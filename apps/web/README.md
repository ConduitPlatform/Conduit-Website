# Conduit Website (`apps/web`)

Unified **Next.js 16** marketing site and **v0.17** documentation for [getconduit.dev](https://getconduit.dev). Built with [Fumadocs](https://fumadocs.dev) MDX in `content/docs/`.

## Requirements

- **Node.js 24+** (`engines` in `package.json`)

## Development

```bash
cd apps/web
npm ci --workspaces=false --install-strategy=nested
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Documentation lives at `/docs`.

## Build

```bash
npm run build
```

`prebuild` runs `scripts/generate-llms-txt.mjs`, which writes `public/llms.txt` and `public/llms-full.txt` from doc frontmatter.

Production server (after build):

```bash
npm start
```

## Quality checks

```bash
npm run lint
npm run check:links
npm run generate:llms
```

`check:links` scans MDX for markdown and `href="/docs/..."` links and exits non-zero on broken targets.

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages (marketing, docs, API) |
| `content/docs/` | Fumadocs MDX documentation |
| `public/_redirects` | Legacy URL redirects (honored by Cloudflare) |
| `scripts/` | `generate-llms-txt.mjs`, `check-doc-links.mjs` |

## Deploy

### Cloudflare Workers (recommended for getconduit.dev)

DNS for `getconduit.dev` should be on Cloudflare. Uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare).

```bash
npm ci --workspaces=false --install-strategy=nested
npm run build:cf      # Next.js build + OpenNext bundle
npm run preview:cf    # Local preview in Workers runtime
npm run deploy:cf     # Deploy to Cloudflare Workers
```

Configure custom domain in **Workers & Pages** → your worker → **Custom domains**.

Legacy path redirects ship via `public/_redirects`.

### Docker (standalone)

`next.config.ts` sets `output: "standalone"` for the multi-stage `Dockerfile`:

```bash
docker build -t conduit-website .
docker run -p 3000:3000 conduit-website
```

### Netlify (deprecated fallback)

See `netlify.toml` — kept for rollback only. Prefer Cloudflare Workers for production.
