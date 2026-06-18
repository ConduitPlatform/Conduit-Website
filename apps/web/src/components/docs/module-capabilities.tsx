type Capability = string | { label: string; description?: string };

export function ModuleCapabilities({ items }: { items: Capability[] }) {
  return (
    <ul className="my-6 flex flex-wrap gap-2 not-prose">
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const description = typeof item === "string" ? undefined : item.description;
        return (
          <li
            key={label}
            className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm"
            title={description}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}
