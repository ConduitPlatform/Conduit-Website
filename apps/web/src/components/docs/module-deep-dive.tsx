import type { ReactNode } from "react";

type ModuleDeepDiveProps = {
  children: ReactNode;
};

/** Visual container for expert content — use a markdown ## heading above for TOC. */
export function ModuleDeepDive({ children }: ModuleDeepDiveProps) {
  return (
    <div className="not-prose my-6 rounded-xl border border-dashed border-border bg-muted/20 p-5 [&_.prose]:my-0">
      <div className="prose prose-sm dark:prose-invert max-w-none [&_table]:w-full [&_table]:text-sm [&_thead]:border-b [&_thead]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_tr]:border-b [&_tr]:border-border/60 [&_.relative]:overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
