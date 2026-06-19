import { GITHUB_REPO_URL } from "@/lib/constants";

const GITHUB_API_REPO = `${GITHUB_REPO_URL.replace("https://github.com/", "https://api.github.com/repos/")}`;

export async function getGitHubStarCount(): Promise<number | null> {
  try {
    const response = await fetch(GITHUB_API_REPO, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Conduit-Website",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const data: { stargazers_count?: number } = await response.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}
