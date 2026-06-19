"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubStarLink } from "@/components/github-star-link";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/docs")) return null;

  return (
    <footer>
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-balance">Conduit Platform</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
              Self-hosted modular Backend-as-a-Service. Ship auth, database, storage, chat, and
              more without rebuilding infrastructure.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Designed &amp; engineered by{" "}
              <a
                href="https://quintessential.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Quintessential
              </a>
              <span className="text-muted-foreground/80"> — intelligence-era digital products</span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/hosting" className="hover:text-foreground">
                  Hosting
                </Link>
              </li>
              <li>
                <Link href="/llms.txt" className="hover:text-foreground">
                  llms.txt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/roadmap" className="hover:text-foreground">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/docs/resources/changelog" className="hover:text-foreground">
                  Changelog
                </Link>
              </li>
              <li>
                <GitHubStarLink variant="text" showStarIcon={false} label="Star on GitHub" />
              </li>
              <li>
                <a href="https://discord.gg/3Jsuxs2KJt" className="hover:text-foreground">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Quintessential SFT. Open source under Apache 2.0.
        </div>
      </div>
    </footer>
  );
}
