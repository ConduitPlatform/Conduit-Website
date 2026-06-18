import { Bot } from "lucide-react";
import type { ReactNode } from "react";

export function AgentHint({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4 not-prose">
      <Bot className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
      <div className="text-sm">
        <p className="font-medium">For AI agents</p>
        <p className="mt-1 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
