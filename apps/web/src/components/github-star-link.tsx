import { cva, type VariantProps } from "class-variance-authority";
import { Star } from "lucide-react";
import type { ComponentProps } from "react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { GITHUB_REPO_URL } from "@/lib/constants";
import { formatStarCount } from "@/lib/format-star-count";
import { cn } from "@/lib/utils";

const githubStarLinkVariants = cva(
  "inline-flex items-center justify-center transition-all duration-200 ease-[var(--ease-productive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        button:
          "min-h-10 gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
        pill: "min-h-10 overflow-hidden rounded-lg border border-border bg-muted/30 text-sm font-medium text-foreground hover:bg-muted/60",
        icon: "size-10 rounded-lg border border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        text: "gap-1.5 text-sm text-muted-foreground hover:text-foreground",
        menu: "gap-2 text-sm text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "button",
    },
  },
);

type GitHubStarLinkProps = Omit<ComponentProps<"a">, "href"> &
  VariantProps<typeof githubStarLinkVariants> & {
    showStarIcon?: boolean;
    label?: string;
    starCount?: number | null;
  };

export function GitHubStarLink({
  variant = "button",
  className,
  showStarIcon = true,
  label,
  starCount = null,
  ...props
}: GitHubStarLinkProps) {
  const resolvedLabel =
    label ??
    (variant === "pill" || variant === "menu"
      ? "Star us"
      : variant === "icon"
        ? "Star Conduit on GitHub"
        : "Star on GitHub");

  const ariaLabel =
    variant === "icon"
      ? resolvedLabel
      : starCount != null
        ? `${resolvedLabel} on GitHub, ${formatStarCount(starCount)} stars`
        : `${resolvedLabel} on GitHub`;

  if (variant === "pill") {
    return (
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={ariaLabel}
        className={cn(githubStarLinkVariants({ variant }), className)}
        {...props}
      >
        <span className="inline-flex min-h-10 items-center gap-2 px-3 py-2 text-muted-foreground">
          <GitHubIcon />
          <span>{resolvedLabel}</span>
        </span>
        {starCount != null && (
          <>
            <span className="h-4 w-px bg-border" aria-hidden />
            <span className="inline-flex min-h-10 items-center gap-1.5 px-3 py-2 tabular-nums text-muted-foreground">
              <Star className="size-3.5 fill-amber-400/90 text-amber-400/90" aria-hidden />
              {formatStarCount(starCount)}
            </span>
          </>
        )}
      </a>
    );
  }

  if (variant === "menu") {
    return (
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn(githubStarLinkVariants({ variant }), "min-h-10", className)}
        {...props}
      >
        <GitHubIcon />
        <span>{resolvedLabel}</span>
        {starCount != null && (
          <span className="ml-auto inline-flex items-center gap-1 tabular-nums text-foreground">
            <Star className="size-3.5 fill-amber-400/90 text-amber-400/90" aria-hidden />
            {formatStarCount(starCount)}
          </span>
        )}
      </a>
    );
  }

  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={variant === "icon" ? resolvedLabel : undefined}
      className={cn(githubStarLinkVariants({ variant }), className)}
      {...props}
    >
      {showStarIcon && <Star className="size-4 fill-current" aria-hidden />}
      {variant !== "icon" && <span>{resolvedLabel}</span>}
    </a>
  );
}
