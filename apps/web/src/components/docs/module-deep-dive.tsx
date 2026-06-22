import type { ReactNode } from "react";

type ModuleDeepDiveProps = {
  children: ReactNode;
};

/** Visual container for expert content — use a markdown ## heading above for TOC. */
export function ModuleDeepDive({ children }: ModuleDeepDiveProps) {
  return (
    <div className="not-prose my-6 rounded-xl border border-dashed border-border bg-muted/20 p-5">
      <div
        className={[
          "prose dark:prose-invert max-w-none min-w-0 w-full",
          "[&_h3:first-of-type]:mt-0",
          "[&_h3:not(:first-of-type)]:mt-8 [&_h3]:mb-3",
          "[&_h4]:mt-5 [&_h4]:mb-2",
          "[&_div.relative]:my-4 [&_div.relative]:max-w-full",
          "[&_td]:align-top [&_td]:break-words [&_td_code]:break-all",
          "[&_figure]:my-4",
          "[&_blockquote]:not-italic [&_blockquote]:rounded-lg [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:bg-muted/40 [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:text-muted-foreground",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
