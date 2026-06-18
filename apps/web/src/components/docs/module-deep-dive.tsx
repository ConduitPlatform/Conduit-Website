import type { ReactNode } from "react";

type ModuleDeepDiveProps = {
  children: ReactNode;
};

/** Visual container for expert content — use a markdown ## heading above for TOC. */
export function ModuleDeepDive({ children }: ModuleDeepDiveProps) {
  return (
    <div className="not-prose my-6 rounded-xl border border-dashed border-border bg-muted/20 p-5 [&_.prose]:my-0">
      <div className="prose prose-sm dark:prose-invert max-w-none">{children}</div>
    </div>
  );
}
