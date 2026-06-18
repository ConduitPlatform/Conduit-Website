"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyPromptButtonProps = {
  prompt: string;
  label?: string;
  className?: string;
};

export function CopyPromptButton({ prompt, label = "Copy prompt", className }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium hover:bg-muted",
        className,
      )}
    >
      {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
      {copied ? "Copied" : label}
    </button>
  );
}
