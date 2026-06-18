import { cn } from "@/lib/utils";

export function HeroCodePreview({ className }: { className?: string }) {
  const lines = [
    "$ npx @conduitplatform/cli deploy setup",
    "Setting up Conduit...",
    "✓ authentication  ready",
    "✓ database        ready",
    "✓ storage         ready",
    "→ Start building",
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-2)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-400/80" aria-hidden />
        <span className="size-2.5 rounded-full bg-amber-400/80" aria-hidden />
        <span className="size-2.5 rounded-full bg-emerald-400/80" aria-hidden />
        <span className="ml-2 text-xs text-muted-foreground">Terminal</span>
      </div>
      <pre className="tnum-code overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground/90">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </pre>
    </div>
  );
}
