# Legacy Docusaurus documentation (archive site)

This directory contains **legacy** Conduit documentation for **v0.14**, **v0.15**, and **v0.16**. Current **v0.17** docs live on the unified site at [getconduit.dev/docs](https://getconduit.dev/docs/intro).

Yarn for this archive lives **here**, not at the repository root. The root npm lockfile is husky-only.

## Archive deployment (Cloudflare Pages)

Update these settings in the Cloudflare Pages dashboard — repo files do not change the live project.

| Setting | Value |
|---------|-------|
| **Root directory** | `documentation` |
| **Build command** | `yarn install --frozen-lockfile && yarn build` |
| **Output directory** | `build` |
| **Node** | 24 |
| **Custom domain** | `archive.getconduit.dev` |

**Environment variables** (Settings → Environment variables):

| Variable | Value |
|----------|-------|
| `SKIP_DEPENDENCY_INSTALL` | `true` |
| `NODE_VERSION` | `24` |

`SKIP_DEPENDENCY_INSTALL` keeps Cloudflare from auto-installing before the build command. Install is part of the build command so it uses Yarn 1 (`packageManager`: `yarn@1.22.22`) and `yarn.lock` in this directory. If **Root directory** is left at the repository root, Cloudflare can pick npm from the root `package-lock.json` (husky only) instead of Yarn.

Add a **Bulk Redirect** in Cloudflare: `/` → `/v0.16/intro` (302).

The main site redirects `/docs/v0.16/*`, `/docs/v0.15/*`, and `/docs/v0.14/*` to this archive subdomain.

## Local development

```bash
cd documentation
yarn install
yarn start
```

## Local build

```bash
cd documentation
yarn install
yarn build
yarn serve
```

Built output is in `build/`. Versioned paths: `/v0.16/...`, `/v0.15/...`, `/v0.14/...`.

## Do not delete

This archive is retained intentionally. The main site at getconduit.dev redirects versioned doc paths here.
