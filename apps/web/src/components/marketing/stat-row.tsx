const STATS = ["8 modules", "Self-hosted", "Open source", "Agent-friendly"];

export function StatRow() {
  return (
    <div className="border-b border-border bg-muted/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-4 text-sm text-muted-foreground sm:gap-x-6 sm:px-6">
        {STATS.map((stat, i) => (
          <span key={stat} className="inline-flex items-center gap-3 tabular-nums sm:gap-6">
            {i > 0 && <span className="text-border" aria-hidden>·</span>}
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
}
