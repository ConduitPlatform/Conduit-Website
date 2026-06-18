import Link from "next/link";

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
      <ul className="mt-8 space-y-4">
        <li>
          <a
            href="https://github.com/ConduitPlatform/Conduit"
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
