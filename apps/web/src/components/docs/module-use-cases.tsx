type UseCase = {
  title: string;
  outcome: string;
};

export function ModuleUseCases({ items }: { items: UseCase[] }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2 not-prose">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-border bg-card p-4"
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.outcome}</p>
        </div>
      ))}
    </div>
  );
}
