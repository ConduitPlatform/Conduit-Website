# Legacy Docusaurus documentation (archive site)

This directory contains **legacy** Conduit documentation for **v0.14**, **v0.15**, and **v0.16**. Current **v0.17** docs live on the unified site at [getconduit.dev/docs](https://getconduit.dev/docs/intro).

## Archive deployment (Cloudflare Pages)

| Setting | Value |
|---------|-------|
| **Root directory** | `documentation` |
| **Build command** | `yarn install && yarn build` |
| **Output directory** | `build` |
| **Node** | 24 |
| **Custom domain** | `archive.getconduit.dev` |

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
