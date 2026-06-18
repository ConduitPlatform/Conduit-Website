import Link from "next/link";
import { ArrowRight, BookOpen, Rocket, Terminal, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { StartWithAiButton } from "@/components/start-with-ai-button";

const STEPS = [
  {
    num: "01",
    title: "Install",
    body: "CLI or Docker Compose — a working platform in minutes on your machine.",
    href: "/docs/getting-started/install",
    icon: Terminal,
    accent: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-500/15",
  },
  {
    num: "02",
    title: "Configure",
    body: "Define your data models, enable modules, and wire up your project.",
    href: "/docs/getting-started/first-app",
    icon: Wrench,
    accent: "text-primary",
    iconBg: "bg-primary/15",
  },
  {
    num: "03",
    title: "Build your app",
    body: "Connect from any framework and ship features — auth, data, files, and realtime.",
    href: "/docs/getting-started/first-app",
    icon: BookOpen,
    accent: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/15",
  },
  {
    num: "04",
    title: "Self-host or managed",
    body: "Your infrastructure today. Conduit Hosting reserved for when you scale.",
    href: "/hosting",
    icon: Rocket,
    accent: "text-accent",
    iconBg: "bg-accent/15",
  },
] as const;

export function PathToProduction() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(91,68,242,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">Process</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              The path to production
            </h2>
            <p className="mt-3 text-lg text-muted-foreground text-pretty">
              From install to production in four steps — set up locally, configure your stack, build
              your app, and deploy on your terms.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-border lg:block"
            aria-hidden
          />

          {STEPS.map((step, i) => (
            <li key={step.num} className="relative">
              <Link
                href={step.href}
                className="group motion-safe-lift flex h-full flex-col rounded-2xl border border-border bg-surface-1 p-6 shadow-[var(--shadow-1)] transition-all duration-200 ease-[var(--ease-productive)] hover:border-primary/30 hover:bg-surface-2 hover:shadow-[var(--shadow-2)]"
              >
                {/* Step dot on timeline */}
                <div className="relative mb-4 flex items-center gap-3 lg:mb-6 lg:justify-center">
                  <div
                    className={cn(
                      "relative z-10 flex size-10 items-center justify-center rounded-full border-2 border-background bg-surface-2 shadow-[var(--shadow-1)]",
                      step.iconBg,
                    )}
                  >
                    <step.icon className={cn("size-4", step.accent)} strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-mono text-xl font-semibold tabular-nums text-muted-foreground/50 lg:hidden">
                    {step.num}
                  </span>
                </div>

                <span className="hidden font-mono text-2xl font-semibold tabular-nums text-muted-foreground/40 lg:block">
                  {step.num}
                </span>
                <h3 className="mt-2 font-semibold lg:mt-3">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">{step.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 ease-[var(--ease-productive)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>

              {/* Mobile step connector */}
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-2 text-muted-foreground sm:hidden" aria-hidden>
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Peak-end CTA band */}
        <div className="mt-14 rounded-2xl border border-border bg-surface-1 p-8 shadow-[var(--shadow-2)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-balance">
                Ready to build?
              </h3>
              <p className="mt-2 text-muted-foreground text-pretty">
                Install Conduit locally in minutes, or paste the onboarding prompt into your
                favourite AI assistant.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/docs/getting-started/install" variant="primary">
                Get started
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <StartWithAiButton />
              <Link
                href="/docs"
                className="inline-flex min-h-10 items-center rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Browse docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
