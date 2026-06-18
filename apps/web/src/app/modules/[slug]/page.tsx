import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RelatedModuleCards } from "@/components/marketing/modules-catalog";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ACCENT_STYLES,
  getModuleBySlug,
  getRelatedModules,
  MODULE_DEFINITIONS,
} from "@/lib/modules-data";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return MODULE_DEFINITIONS.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return {};
  return { title: mod.title, description: mod.description };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const styles = ACCENT_STYLES[mod.accent];
  const related = getRelatedModules(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/modules" className="hover:text-foreground">
          Modules
        </Link>
        <ChevronRight className="size-3.5" aria-hidden />
        <span className="text-foreground">{mod.title}</span>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
            Platform module
          </p>
          <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {mod.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{mod.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {mod.capabilities.map((cap) => (
              <li
                key={cap}
                className={cn("rounded-lg px-3 py-1.5 text-sm font-medium", styles.tag)}
              >
                {cap}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={mod.docsPath} variant="primary">
              View documentation
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/docs/getting-started/install" variant="secondary">
              Install Conduit
            </ButtonLink>
          </div>
        </div>

        <div
          className={cn(
            "flex aspect-[4/3] items-center justify-center rounded-2xl border border-border bg-surface-1 shadow-[var(--shadow-2)]",
            styles.icon,
          )}
        >
          {mod.iconSrc ? (
            <Image src={mod.iconSrc} alt="" width={96} height={96} unoptimized />
          ) : mod.Icon ? (
            <mod.Icon className="size-24 opacity-90" strokeWidth={1.25} aria-hidden />
          ) : null}
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What you can build</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
          Key capabilities for {mod.title.toLowerCase()} — explore the docs for setup and examples.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mod.features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className={cn(
                "group flex flex-col rounded-xl border border-border bg-surface-1 p-5 shadow-[var(--shadow-1)] transition-all duration-200 ease-[var(--ease-productive)] hover:bg-surface-2 hover:shadow-[var(--shadow-2)]",
                styles.border,
              )}
            >
              <h3 className="font-semibold group-hover:text-primary">{feature.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">
                {feature.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Works well with</h2>
          <p className="mt-2 text-muted-foreground">
            Modules teams often enable alongside {mod.title.toLowerCase()}.
          </p>
          <div className="mt-8">
            <RelatedModuleCards modules={related} />
          </div>
        </section>
      )}

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-muted/20 px-5 py-4">
        <p className="text-sm text-muted-foreground">
          Explore the full module catalog or jump into the docs.
        </p>
        <Link
          href="/modules"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          ← All modules
        </Link>
      </div>
    </div>
  );
}
