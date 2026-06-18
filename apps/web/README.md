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

#### Git-connected Worker (Cloudflare dashboard)

| Setting | Value |
|---------|-------|
| **Root directory** | `apps/web` |
| **Build command** | `npm ci --workspaces=false --install-strategy=nested && npm run build:cf` |
| **Deploy command** | `npm run deploy:cf-only` |
| **Node.js version** | 24 |

**Environment variables:**

| Variable | Value |
|----------|-------|
| `SKIP_DEPENDENCY_INSTALL` | `true` |
| `NODE_VERSION` | `24` |

`SKIP_DEPENDENCY_INSTALL` is required — the monorepo root has a Yarn lockfile; without this, Cloudflare auto-runs Yarn 4 and the build fails before your npm command runs.

**Important:** Use `npm run deploy:cf-only`, not `npx opennextjs-cloudflare` or `npm exec -- opennextjs-cloudflare`. Those look up a non-existent npm package name; `npm run` uses the local binary from `node_modules/.bin` (same reason `npm run build:cf` works).

If `deploy:cf-only` is missing on your branch, use **`npm run deploy:cf`** as the deploy command (rebuilds + deploys), or add the script from `package.json`.

**Fallback (self-contained deploy step):** set build command empty and deploy command to:

```bash
npm ci --workspaces=false --install-strategy=nested && npm run deploy:cf
```

If deploy still fails with root directory `apps/web`, try prefixing with `cd apps/web &&` — some Workers Builds setups run deploy from the repo root.

#### CLI deploy

```bash
npm ci --workspaces=false --install-strategy=nested
npm run build:cf      # Next.js build + OpenNext bundle
npm run preview:cf    # Local preview in Workers runtime
npm run deploy:cf     # build + deploy
npm run deploy:cf-only # deploy only (after build:cf; use in CI deploy step)
```

Configure custom domain in **Workers & Pages** → your worker → **Custom domains**.

Legacy path redirects ship via `public/_redirects`.

#### Performance (Workers CPU limits)

The site is static (SSG). `open-next.config.ts` uses the **Static Assets incremental cache** with **cache interception** so most requests are served from `.open-next/assets` without running the full Next.js server.

If you still see `Worker exceeded CPU time limit`:

1. Confirm the account is on **Workers Paid** — the free tier allows only **10 ms CPU per request**, which is not enough for Next.js SSR on cache misses (search API, first visit after deploy).
2. In **Workers & Pages → conduit-web → Settings**, raise **CPU time limit** if needed (default 30 s on Paid is usually fine once caching is enabled).
3. Check **Metrics → Errors → Exceeded CPU Time** after redeploying; it should drop sharply for doc/marketing pages.

### Docker (standalone)

`next.config.ts` sets `output: "standalone"` for the multi-stage `Dockerfile`:

```bash
docker build -t conduit-website .
docker run -p 3000:3000 conduit-website
```

### Netlify (deprecated fallback)

See `netlify.toml` — kept for rollback only. Prefer Cloudflare Workers for production.
