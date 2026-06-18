import Link from "next/link";
import { ArrowRight, FileStack, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTRAST = [
  {
    side: "scratch",
    label: "Generate from scratch",
    points: [
      "Auth, data, and file handling rebuilt for every new project",
      "Every line to review, secure, and maintain yourself",
      "Fast to produce — slower to trust in production",
    ],
  },
  {
    side: "conduit",
    label: "Start with Conduit",
    points: [
      "Sign-in, database, storage, and realtime — already built in",
      "Your AI assistant configures modules; you ship product logic",
      "Instant foundation — not improvised infrastructure",
    ],
  },
] as const;

export function InstantPhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(91,68,242,0.07),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            AI builds fast. Conduit starts ready.
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Fast is good.
            <span className="block text-primary">Instant is better.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Your assistants can scaffold a backend in an afternoon. Conduit gives them a modular
            platform that&apos;s already built — auth, data, storage, realtime — so they configure
            instead of rebuilding from zero.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {CONTRAST.map((col) => {
            const isConduit = col.side === "conduit";
            return (
              <div
                key={col.side}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 sm:p-8",
                  isConduit
                    ? "border-primary/30 bg-surface-1 shadow-[var(--shadow-2)] ring-1 ring-primary/10"
                    : "border-dashed border-border/80 bg-muted/10 opacity-90",
                )}
              >
                {isConduit && (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Already built
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      isConduit ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {isConduit ? (
                      <Layers className="size-5" strokeWidth={1.75} aria-hidden />
                    ) : (
                      <FileStack className="size-5" strokeWidth={1.75} aria-hidden />
                    )}
                  </div>
                  <p className={cn("font-semibold", isConduit && "text-lg")}>{col.label}</p>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {col.points.map((point) => (
                    <li
                      key={point}
                      className={cn(
                        "flex gap-3 text-sm text-pretty",
                        isConduit ? "text-foreground/90" : "text-muted-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-1.5 size-1.5 shrink-0 rounded-full",
                          isConduit ? "bg-primary" : "bg-muted-foreground/40",
                        )}
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-base text-muted-foreground">
          Use AI for speed.{" "}
          <strong className="font-medium text-foreground">
            Your backend isn&apos;t generated — it&apos;s already built.
          </strong>
        </p>
        <p className="mt-3 text-center text-sm">
          <Link
            href="/docs/getting-started/with-llms"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            See how teams build with AI
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}
