"use client";

import { LLM_ONBOARDING_PROMPT } from "@/lib/constants";
import { CopyPromptButton } from "@/components/docs/copy-prompt-button";

export function StartWithAiButton() {
  return (
    <CopyPromptButton
      prompt={LLM_ONBOARDING_PROMPT}
      label="Start with AI"
      className="min-h-10 border-border/60 bg-transparent px-5 py-3 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    />
  );
}
