# Production cutover — unified `apps/web`

Checklist for retiring the legacy split (`www/` marketing + `documentation/` Docusaurus) and pointing **getconduit.dev** at the unified Next.js 16 app.

**Status:** Phase 4 prep complete. Do **not** delete legacy apps until post-cutover verification passes.

## Pre-cutover (done)

- [x] Unified site in `apps/web/` (marketing + Fumadocs v0.17 docs)
- [x] Legacy URL redirects in `apps/web/public/_redirects`
- [x] Cloudflare Workers deploy config (`wrangler.toml`, `@opennextjs/cloudflare`)
- [x] `npm run check:links` for internal doc link integrity
- [x] `llms.txt` / `llms-full.txt` generation on build

## Cutover day

1. **Final QA on preview**
   - Run `cd apps/web && npm ci && npm run build && npm run check:links`
   - Optional Cloudflare preview: `npm run preview:cf`
   - Spot-check marketing routes: `/`, `/modules/*`, `/hosting`, `/roadmap`, `/contribute`
   - Spot-check docs: `/docs`, `/docs/intro`, legacy `/docs/overview/intro`, `/docs/modules/email/*`
   - Confirm `/llms.txt`, `/llms-full.txt`, `/bootstrap`

2. **Deploy archive first** (`archive.getconduit.dev`)
   - Cloudflare **Pages** project, base directory `documentation`
   - Build: `yarn install && yarn build`, output `build`, Node 24
   - Custom domain: `archive.getconduit.dev`
   - Bulk redirect: `/` → `/v0.16/intro` (302)
   - Smoke test: `/v0.16/intro`, `/v0.15/intro`, `/v0.14/intro`

3. **Deploy primary site** (`getconduit.dev`)
   - From `apps/web`: `npm run deploy:cf` (or connect GitHub → Workers, build `npm ci && npm run build:cf`)
   - Custom domains: `getconduit.dev`, `www.getconduit.dev` (optional www → apex redirect)
   - DNS zone already on Cloudflare — attach domains in Workers & Pages dashboard

4. **Smoke test production**

   | Check | URL |
   |-------|-----|
   | Home | `https://getconduit.dev/` |
   | Docs hub | `/docs`, `/docs/intro` |
   | Search | `/api/search?q=install` |
   | LLM indexes | `/llms.txt`, `/llms-full.txt` |
   | CLI bootstrap | `/bootstrap` |
   | Legacy docs | `/docs/v0.16/intro` → archive |
   | Legacy marketing | `/authentication` → `/modules/authentication` |
   | Changelog | `/blog` → `/docs/resources/changelog` |

## Post-cutover (legacy archive — do not delete)

1. **Keep `documentation/`** deployed to **`archive.getconduit.dev`** (Cloudflare Pages)
2. **Main site redirects** — `next.config.ts` + `public/_redirects` send `/docs/v0.14|15|16/*` to archive
3. **Retire `www/`** Netlify deploy after sign-off
4. **Communications** — announce v0.17 docs; link legacy docs from Resources

## Rollback

1. Cloudflare Workers: roll back to previous deployment version in dashboard
2. Cloudflare Pages (archive): roll back to previous deployment
3. Legacy Netlify sites remain available until rollback window closes (`apps/web/netlify.toml` kept as fallback)

## References

| Asset | Location |
|-------|----------|
| App README (dev/build/deploy) | `apps/web/README.md` |
| Docker / standalone deploy | `apps/web/Dockerfile` |
| Cloudflare Workers deploy | `apps/web/wrangler.toml`, `open-next.config.ts` |
| Netlify fallback (deprecated) | `apps/web/netlify.toml` |
| Archive Pages deploy | `documentation/README.md` |
