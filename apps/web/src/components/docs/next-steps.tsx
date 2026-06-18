import Link from "next/link";

type Step = { title: string; href: string; description?: string };

export function NextSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="my-8 rounded-xl border border-border p-5 not-prose">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Next steps</p>
      <ul className="mt-4 space-y-3">
        {steps.map((step) => (
          <li key={step.href}>
            <Link href={step.href} className="font-medium text-primary hover:underline">
              {step.title}
            </Link>
            {step.description && (
              <p className="text-sm text-muted-foreground">{step.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
