import type { ReactNode } from "react";

export function ModuleGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-4 sm:grid-cols-2 not-prose">{children}</div>;
}
