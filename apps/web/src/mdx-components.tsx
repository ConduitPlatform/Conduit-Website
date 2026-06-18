import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { AgentHint } from "@/components/docs/agent-hint";
import { APIExample } from "@/components/docs/api-example";
import { CopyPromptButton } from "@/components/docs/copy-prompt-button";
import { ModuleCapabilities } from "@/components/docs/module-capabilities";
import { ModuleCard } from "@/components/docs/module-card";
import { ModuleDeepDive } from "@/components/docs/module-deep-dive";
import { ModuleExample } from "@/components/docs/module-example";
import { ModuleGrid } from "@/components/docs/module-grid";
import { ModuleUseCases } from "@/components/docs/module-use-cases";
import { NextSteps } from "@/components/docs/next-steps";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AgentHint,
    APIExample,
    CopyPromptButton,
    ModuleCapabilities,
    ModuleCard,
    ModuleDeepDive,
    ModuleExample,
    ModuleGrid,
    ModuleUseCases,
    NextSteps,
    ...components,
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
