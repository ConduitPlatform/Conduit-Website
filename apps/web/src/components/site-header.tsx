"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ConduitLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/docs", label: "Docs" },
  { href: "/modules", label: "Modules" },
  { href: "/hosting", label: "Hosting" },
  { href: "/contribute", label: "Contribute" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const isDocs = pathname?.startsWith("/docs");

  if (isDocs) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-card shadow-[var(--shadow-1)] ring-1 ring-border transition-transform duration-200 ease-[var(--ease-productive)] group-hover:scale-105">
            <ConduitLogo showLabel={false} size={22} />
          </span>
          <span>Conduit</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm py-1",
                active && "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-primary",
              )}
            >
              {link.label}
            </Link>
          );})}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/docs/getting-started"
            className="hidden min-h-10 items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-1)] transition-shadow duration-200 ease-[var(--ease-productive)] hover:bg-primary/90 hover:shadow-[var(--shadow-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:inline-flex"
          >
            Get Started
          </Link>
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          )}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border px-4 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/docs/getting-started"
              className="rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
