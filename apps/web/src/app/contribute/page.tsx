import Link from "next/link";
import { GitHubStarLink } from "@/components/github-star-link";
import { GITHUB_REPO_URL } from "@/lib/constants";

export const metadata = {
  title: "Contribute",
  description: "Contribute to the Conduit Platform.",
};

export default function ContributePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold">Contribute</h1>
      <p className="mt-4 text-muted-foreground">
        Conduit is open source. Join us on GitHub and Discord.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-surface-1 p-6 shadow-[var(--shadow-1)]">
        <p className="text-sm text-muted-foreground text-pretty">
          If Conduit helps your team, star the repo so more builders can find it.
        </p>
        <div className="mt-4">
          <GitHubStarLink variant="button" label="Star Conduit on GitHub" />
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        <li>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Conduit Platform repository
          </a>
        </li>
        <li>
          <Link href="/docs/resources/contributing" className="font-medium text-primary hover:underline">
            Contributing guide
          </Link>
        </li>
        <li>
          <a href="https://discord.gg/3Jsuxs2KJt" className="font-medium text-primary hover:underline">
            Discord community
          </a>
        </li>
      </ul>
    </div>
  );
}
