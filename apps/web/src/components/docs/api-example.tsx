"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type APIExampleProps = {
  title?: string;
  curl: string;
};

export function APIExample({ title = "Example", curl }: APIExampleProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(curl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border not-prose">
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2">
        <span className="text-sm font-medium">{title}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy code example"}
          className="inline-flex min-h-8 min-w-8 items-center justify-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{curl}</code>
      </pre>
    </div>
  );
}
