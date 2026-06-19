import { SiteHeaderClient } from "@/components/site-header-client";
import { getGitHubStarCount } from "@/lib/github-stars";

export async function SiteHeader() {
  const starCount = await getGitHubStarCount();
  return <SiteHeaderClient starCount={starCount} />;
}
