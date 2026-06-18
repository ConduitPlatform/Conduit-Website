# Module page authoring template

Each module overview at `{slug}.mdx` follows this structure:

```mdx
## Use cases
<ModuleUseCases items={[...]} />

## Capabilities
<ModuleCapabilities items={[...]} />

## Example: {scenario name}
<ModuleExample steps={[...]}>
  <APIExample ... />
</ModuleExample>

## How it works
<ModuleDeepDive>
  {technical detail — ReBAC, query trees, presigned flows, etc.}
</ModuleDeepDive>

## Configure
{Admin/MCP — provisioning only}

## Client API
{paths + APIExample}

## MCP
{tool names, ?modules=}

<NextSteps ... />
```

**Sources of truth:** Conduit plugin skills (`conduit-{module}`) for v0.17 accuracy; v0.16 Docusaurus docs for depth reference only.
