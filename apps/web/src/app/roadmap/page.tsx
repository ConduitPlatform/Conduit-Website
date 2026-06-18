export const metadata = {
  title: "Roadmap",
  description: "Conduit Platform roadmap.",
};

const items = [
  { title: "v0.17 stable", status: "In progress", detail: "Communications module, MCP admin server, pnpm/Node 24 toolchain" },
  { title: "Conduit Hosting", status: "Planned", detail: "Managed instances — see /hosting" },
  { title: "Unified docs + llms.txt", status: "In progress", detail: "This site" },
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold">Roadmap</h1>
      <p className="mt-4 text-muted-foreground">High-level direction — not a commitment schedule.</p>
      <ul className="mt-10 space-y-6">
        {items.map((item) => (
          <li key={item.title} className="rounded-xl border border-border p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-semibold">{item.title}</h2>
              <span className="text-xs font-medium text-accent">{item.status}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
