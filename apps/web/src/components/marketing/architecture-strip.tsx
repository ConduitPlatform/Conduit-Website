import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Cpu,
  Globe,
  Layers,
  Puzzle,
  Server,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NODES = [
  {
    label: "Your app",
    sub: "Web, mobile, or any client — one integration surface",
    icon: Globe,
    accent: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-500/15",
    featured: false,
  },
  {
    label: "Platform API",
    sub: "Auth, data, files, chat, and notifications in one place",
    icon: Server,
    accent: "text-primary",
    iconBg: "bg-primary/15",
    featured: false,
  },
  {
    label: "Core",
    sub: "Orchestrates modules, config, and service discovery",
    icon: Cpu,
    accent: "text-accent",
    iconBg: "bg-accent/15",
    featured: true,
  },
  {
    label: "Modules",
    sub: "Auth · Database · Storage · Chat · Communications",
    icon: Blocks,
    accent: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/15",
    featured: false,
  },
] as const;

const HIGHLIGHTS = [
  {
    title: "Modular",
    body: "Turn on only the capabilities your product needs — nothing extra to operate or pay for.",
    icon: Puzzle,
    accent: "text-primary",
    iconBg: "bg-primary/15",
  },
  {
    title: "Self-hosted",
    body: "Run on your infrastructure with Docker, Kubernetes, or from source. You own the data.",
    icon: Server,
    accent: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-sky-500/15",
    href: "/docs/deployment/docker-compose",
    cta: "Deployment guide",
  },
  {
    title: "AI-friendly setup",
    body: "Scaffold schemas and configuration quickly — built for teams that ship with modern tooling.",
    icon: Sparkles,
    accent: "text-accent",
    iconBg: "bg-accent/15",
    href: "/docs/getting-started/with-llms",
    cta: "Start with AI",
  },
] as const;

function FlowConnector({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex shrink-0 items-center justify-center", className)} aria-hidden>
      <div className="h-px w-full bg-border" />
      <ArrowRight className="absolute size-4 text-muted-foreground/60" />
    </div>
  );
}

export function ArchitectureStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(7,217,196,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
            <Layers className="size-3.5 text-primary" aria-hidden />
            How it fits together
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One platform, many capabilities
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty">
            Your product talks to Conduit once. Behind the scenes, specialized modules handle auth,
            data, files, and realtime — coordinated through a shared core.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="mt-12 hidden lg:flex lg:items-stretch lg:gap-2">
          {NODES.map((node, i) => (
            <div key={node.label} className="contents">
              <div
                className={cn(
                  "relative flex flex-1 flex-col rounded-2xl border bg-surface-1 p-5 shadow-[var(--shadow-1)]",
                  node.featured
                    ? "border-accent/40 ring-1 ring-accent/20"
                    : "border-border",
                )}
              >
                {node.featured && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                    Hub
                  </span>
                )}
                <div className={cn("flex size-10 items-center justify-center rounded-xl", node.iconBg)}>
                  <node.icon className={cn("size-5", node.accent)} strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-semibold">{node.label}</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">{node.sub}</p>
              </div>
              {i < NODES.length - 1 && <FlowConnector className="w-8 self-center" />}
            </div>
          ))}
        </div>

        {/* Mobile / tablet stack */}
        <div className="mt-12 flex flex-col gap-3 lg:hidden">
          {NODES.map((node, i) => (
            <div key={node.label}>
              <div
                className={cn(
                  "relative flex gap-4 rounded-2xl border bg-surface-1 p-5 shadow-[var(--shadow-1)]",
                  node.featured ? "border-accent/40" : "border-border",
                )}
              >
                <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", node.iconBg)}>
                  <node.icon className={cn("size-5", node.accent)} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold">{node.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{node.sub}</p>
                </div>
              </div>
              {i < NODES.length - 1 && (
                <div className="flex justify-center py-1 text-muted-foreground" aria-hidden>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Value highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const inner = (
              <>
                <div className={cn("flex size-9 items-center justify-center rounded-lg", item.iconBg)}>
                  <item.icon className={cn("size-4", item.accent)} aria-hidden />
                </div>
                <p className="mt-4 font-medium">{item.title}</p>
                <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">{item.body}</p>
                {"href" in item && item.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {item.cta}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                )}
              </>
            );

            return "href" in item && item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-xl border border-border bg-surface-1 p-5 shadow-[var(--shadow-1)] transition-colors hover:border-primary/30 hover:bg-surface-2"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-border bg-surface-1 p-5 shadow-[var(--shadow-1)]"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
