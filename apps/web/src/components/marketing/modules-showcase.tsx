import Link from "next/link";
import { ArrowRight, Boxes, GitBranch } from "lucide-react";
import { ModulesCatalog } from "@/components/marketing/modules-catalog";

export function ModulesShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(91,68,242,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
              <Boxes className="size-3.5 text-accent" aria-hidden />
              Platform modules
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Build a backend in minutes
            </h2>
            <p className="mt-3 text-lg text-muted-foreground text-pretty">
              Pick the building blocks your product needs — authentication, database, storage, chat,
              communications, and more. Each one plugs into the same platform.
            </p>
          </div>
          <Link
            href="/modules"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-[var(--shadow-1)] hover:bg-muted"
          >
            View all modules
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground">
          <GitBranch className="size-4 shrink-0 text-primary" aria-hidden />
          <span>
            Mix and match — enable only the modules you need, all orchestrated through{" "}
            <strong className="font-medium text-foreground">Conduit Core</strong>.
          </span>
        </div>

        <div className="mt-8">
          <ModulesCatalog />
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          What&apos;s next for Conduit?{" "}
          <Link href="/roadmap" className="font-medium text-primary hover:underline">
            Visit the roadmap
          </Link>
        </p>
      </div>
    </section>
  );
}
