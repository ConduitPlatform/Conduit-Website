import { ArrowRight, Sparkles } from "lucide-react";
import { ArchitectureStrip } from "@/components/marketing/architecture-strip";
import { HeroCodePreview } from "@/components/marketing/hero-code-preview";
import { InstantPhilosophy } from "@/components/marketing/instant-philosophy";
import { ModulesShowcase } from "@/components/marketing/modules-showcase";
import { PathToProduction } from "@/components/marketing/path-to-production";
import { StatRow } from "@/components/marketing/stat-row";
import { WhyConduit } from "@/components/marketing/why-conduit";
import { StartWithAiButton } from "@/components/start-with-ai-button";
import { ButtonLink } from "@/components/ui/button-link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,68,242,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(7,217,196,0.10),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-accent">
                <Sparkles className="size-3.5" aria-hidden />
                <span className="tabular-nums">v0.17</span> docs live
              </p>
              <h1 className="mt-6 font-heading text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                Build backends without rebuilding infrastructure
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Conduit is a self-hosted, modular Backend-as-a-Service for the intelligence era.
                Ship authentication, database, storage, realtime chat, and communications — without
                stitching together a dozen separate services.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/docs/getting-started/install" variant="primary">
                  Install locally
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href="/docs" variant="secondary">
                  Read the docs
                </ButtonLink>
                <StartWithAiButton />
              </div>
            </div>
            <HeroCodePreview className="mt-12 lg:mt-0" />
          </div>
        </div>
      </section>

      <StatRow />

      <InstantPhilosophy />

      <ModulesShowcase />

      <ArchitectureStrip />

      <WhyConduit />

      <PathToProduction />
    </div>
  );
}
