export const SITE_URL = "https://getconduit.dev";

export const GITHUB_REPO_URL = "https://github.com/ConduitPlatform/Conduit";

export const LLM_ONBOARDING_PROMPT = `You are building on Conduit Platform v0.17.

1. Read ${SITE_URL}/llms.txt for the documentation index.
2. Install locally: npx @conduitplatform/cli deploy setup
3. Configure the Conduit MCP at {ADMIN_BASE_URL}/mcp?modules=authentication,database,storage,authorization
   Use a Bearer admin JWT or cdt_ API token — never expose these in app code.
4. Application runtime code uses the Client API only (default port 3000) with user bearer tokens.
5. Never call the Admin API or MCP from user-facing application code.
6. Never fetch whole collections and filter client-side — use custom endpoints at /database/function/{name}.
7. Never expose presigned storage URLs to browsers — use a server-side preview proxy with storageFileId.`;

export { MODULES, MODULE_DEFINITIONS } from "@/lib/modules-data";
