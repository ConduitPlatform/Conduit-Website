import Link from "next/link";
import { ArrowRight, Boxes, GitBranch } from "lucide-react";
import { ModulesCatalog } from "@/components/marketing/modules-catalog";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = {
  title: "Platform modules",
  description:
    "Explore Conduit's modular backend — authentication, database, storage, chat, communications, and more.",
};

export default function ModulesIndexPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,68,242,0.10),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
            <Boxes className="size-3.5 text-accent" aria-hidden />
            Platform modules
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Choose your building blocks
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Conduit is modular by design. Enable the capabilities your product needs — auth, data,
            files, permissions, realtime — and skip the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/docs/modules" variant="primary">
              Module documentation
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/docs/getting-started/install" variant="secondary">
              Install Conduit
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
          <GitBranch className="size-4 shrink-0 text-primary" aria-hidden />
          <span>
            Every module connects through{" "}
            <strong className="font-medium text-foreground">Conduit Core</strong> — pick what you
            need, leave the rest disabled.
          </span>
        </div>

        <div className="mt-10">
          <ModulesCatalog />
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Planning ahead?{" "}
          <Link href="/roadmap" className="font-medium text-primary hover:underline">
            See the roadmap
          </Link>
        </p>
      </section>
    </div>
  );
}
