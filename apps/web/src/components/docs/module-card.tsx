import Link from "next/link";
import type { ReactNode } from "react";

type ModuleCardProps = {
  title: string;
  href: string;
  description: string;
  icon?: ReactNode;
};

export function ModuleCard({ title, href, description }: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <h3 className="font-semibold group-hover:text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
