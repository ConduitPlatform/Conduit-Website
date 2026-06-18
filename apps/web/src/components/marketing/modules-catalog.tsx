import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCENT_STYLES,
  MODULE_DEFINITIONS,
  type ModuleDefinition,
} from "@/lib/modules-data";

function ModuleIcon({ mod, size = "md" }: { mod: ModuleDefinition; size?: "md" | "lg" }) {
  const styles = ACCENT_STYLES[mod.accent];
  const box = size === "lg" ? "size-12" : "size-10";
  const img = size === "lg" ? 28 : 24;
  const icon = size === "lg" ? "size-6" : "size-5";

  return (
    <div className={cn("flex shrink-0 items-center justify-center rounded-xl", box, styles.icon)}>
      {mod.iconSrc ? (
        <Image src={mod.iconSrc} alt="" width={img} height={img} unoptimized />
      ) : mod.Icon ? (
        <mod.Icon className={icon} strokeWidth={1.75} aria-hidden />
      ) : null}
    </div>
  );
}

function ModuleCard({ mod, featured }: { mod: ModuleDefinition; featured?: boolean }) {
  const styles = ACCENT_STYLES[mod.accent];

  return (
    <Link
      href={`/modules/${mod.slug}`}
      className={cn(
        "group motion-safe-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-1 p-6 shadow-[var(--shadow-1)] transition-colors duration-200 ease-[var(--ease-productive)] hover:bg-surface-2 hover:shadow-[var(--shadow-2)]",
        styles.border,
        featured && "sm:p-8",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-2xl transition-opacity group-hover:opacity-100",
          styles.glow,
        )}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-4">
        <ModuleIcon mod={mod} size="lg" />
        <ArrowRight
          className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 ease-[var(--ease-productive)] group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <h3 className={cn("relative mt-4 font-semibold", featured && "text-xl")}>{mod.title}</h3>
      <p
        className={cn(
          "relative mt-2 text-muted-foreground text-pretty",
          featured ? "text-base" : "text-sm",
        )}
      >
        {mod.description}
      </p>
      <ul className="relative mt-4 flex flex-1 flex-col gap-2">
        {mod.capabilities.map((cap) => (
          <li key={cap}>
            <span className={cn("rounded-md px-2 py-0.5 text-xs font-medium", styles.tag)}>
              {cap}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
}

type ModulesCatalogProps = {
  showFeatured?: boolean;
};

export function ModulesCatalog({ showFeatured = true }: ModulesCatalogProps) {
  const featured = MODULE_DEFINITIONS.filter((m) => m.featured);
  const rest = MODULE_DEFINITIONS.filter((m) => !m.featured);

  return (
    <>
      {showFeatured && (
        <div className="grid gap-4 lg:grid-cols-2">
          {featured.map((mod) => (
            <ModuleCard key={mod.slug} mod={mod} featured />
          ))}
        </div>
      )}
      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", showFeatured && "mt-4")}>
        {(showFeatured ? rest : MODULE_DEFINITIONS).map((mod) => (
          <ModuleCard key={mod.slug} mod={mod} />
        ))}
      </div>
    </>
  );
}

export function RelatedModuleCards({ modules }: { modules: ModuleDefinition[] }) {
  if (modules.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((mod) => {
        const styles = ACCENT_STYLES[mod.accent];
        return (
          <Link
            key={mod.slug}
            href={`/modules/${mod.slug}`}
            className={cn(
              "group flex flex-col rounded-xl border border-border bg-surface-1 p-5 shadow-[var(--shadow-1)] transition-colors hover:bg-surface-2 hover:shadow-[var(--shadow-2)]",
              styles.border,
            )}
          >
            <div className="flex items-center gap-3">
              <ModuleIcon mod={mod} />
              <h3 className="font-semibold group-hover:text-primary">{mod.title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">{mod.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
