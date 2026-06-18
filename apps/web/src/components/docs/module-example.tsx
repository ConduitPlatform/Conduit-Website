import type { ReactNode } from "react";

type ModuleExampleProps = {
  steps: string[];
  children?: ReactNode;
};

/** Scenario walkthrough — pair with a markdown ## Example heading above for TOC. */
export function ModuleExample({ steps, children }: ModuleExampleProps) {
  return (
    <div
      className="my-6 rounded-xl border border-border not-prose"
      aria-label="Example scenario"
    >
      <div className="border-b border-border bg-muted/30 px-5 py-2.5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Walkthrough
        </p>
      </div>
      <div className="px-5 py-4">
        <ol className="list-decimal space-y-2 pl-5 text-sm">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
