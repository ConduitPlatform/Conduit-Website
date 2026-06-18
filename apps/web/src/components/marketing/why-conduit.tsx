import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Server,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    num: "01",
    title: "Self-hosted by default",
    body: "Docker Compose, Kubernetes/Helm, or run from source. Your data stays on your infrastructure — no vendor lock-in.",
    icon: Server,
    accent: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-500/15",
    href: "/docs/deployment/docker-compose",
    cta: "Deployment options",
    badge: undefined,
  },
  {
    num: "02",
    title: "Agent-ready provisioning",
    body: "AI assistants can help scaffold schemas and configuration during development — so your team stays focused on the product.",
    icon: Bot,
    accent: "text-primary",
    iconBg: "bg-primary/15",
    href: "/docs/getting-started/with-llms",
    cta: "Start with AI",
    badge: undefined,
  },
  {
    num: "03",
    title: "Managed hosting",
    body: "Conduit Hosting is coming soon — reserved space for managed instances when you outgrow self-hosting.",
    icon: Cloud,
    accent: "text-accent",
    iconBg: "bg-accent/15",
    href: "/hosting",
    cta: "Learn about hosting",
    badge: "Coming soon",
  },
] as const;

export function WhyConduit() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(91,68,242,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            Why Conduit
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Functional beauty for builders
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty">
            A backend platform designed for teams who ship fast — and for agents that provision
            alongside them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REASONS.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="group motion-safe-lift relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-1 p-6 shadow-[var(--shadow-1)] transition-all duration-200 ease-[var(--ease-productive)] hover:border-primary/30 hover:bg-surface-2 hover:shadow-[var(--shadow-2)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={cn("flex size-11 items-center justify-center rounded-xl", item.iconBg)}>
                  <item.icon className={cn("size-5", item.accent)} strokeWidth={1.75} aria-hidden />
                </div>
                <span className="font-mono text-2xl font-semibold tabular-nums text-muted-foreground/40">
                  {item.num}
                </span>
              </div>

              {item.badge && (
                <span className="mt-4 w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {item.badge}
                </span>
              )}

              <h3 className={cn("font-semibold", item.badge ? "mt-3" : "mt-4")}>{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">{item.body}</p>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.cta}
                <ArrowRight className="size-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
