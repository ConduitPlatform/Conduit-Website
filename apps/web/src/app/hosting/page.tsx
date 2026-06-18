import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = {
  title: "Hosting",
  description: "Managed Conduit instances — coming soon.",
};

const FEATURES = [
  "Fully managed Conduit deployments",
  "Same modular architecture — your schemas, your rules",
  "Enterprise options and SLAs (details TBD)",
];

export default function HostingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,68,242,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">Coming soon</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Conduit Hosting
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          Managed Conduit instances with production-grade operations — provisioning, upgrades,
          monitoring, and support handled for you.
        </p>
        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-1)]">
          <ul className="space-y-3 text-muted-foreground">
            {FEATURES.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/docs/getting-started/install" variant="primary">
            Self-host today
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href="/docs" variant="secondary">
            Read documentation
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
