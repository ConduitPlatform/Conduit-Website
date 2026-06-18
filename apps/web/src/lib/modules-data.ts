import type { LucideIcon } from "lucide-react";
import { Code2, Network, ShieldCheck } from "lucide-react";

export type ModuleFeature = {
  title: string;
  description: string;
  href: string;
};

export type ModuleDefinition = {
  slug: string;
  title: string;
  description: string;
  tagline: string;
  capabilities: string[];
  features: ModuleFeature[];
  relatedSlugs: string[];
  docsPath: string;
  featured?: boolean;
  accent: "purple" | "teal" | "pink" | "amber" | "blue" | "violet";
  iconSrc?: string;
  Icon?: LucideIcon;
};

export const MODULE_DEFINITIONS: ModuleDefinition[] = [
  {
    slug: "authentication",
    title: "Authentication",
    description:
      "Sign-in flows your users expect — email, social logins, magic links, 2FA, and team management.",
    tagline:
      "Everything you need to onboard users — local credentials, social providers, optional 2FA, and team hierarchy — without rolling your own auth stack.",
    capabilities: ["OAuth & local auth", "Teams & invites", "Secure sessions"],
    features: [
      {
        title: "Local sign-in",
        description: "Email or username/password with verification, password reset, and session management.",
        href: "/docs/modules/authentication",
      },
      {
        title: "Social & OAuth providers",
        description: "Connect Google, GitHub, Microsoft, and other identity providers out of the box.",
        href: "/docs/modules/authentication",
      },
      {
        title: "Teams & two-factor auth",
        description: "Organize users into teams and add an extra layer of security when you need it.",
        href: "/docs/modules/authentication",
      },
    ],
    relatedSlugs: ["authorization", "communications"],
    docsPath: "/docs/modules/authentication",
    featured: true,
    accent: "amber",
    iconSrc: "/moduleIcons/authentication.svg",
  },
  {
    slug: "database",
    title: "Database",
    description:
      "Flexible data models on MongoDB or PostgreSQL — CRUD, relationships, and powerful queries in one interface.",
    tagline:
      "Define schemas, store documents, and query your data through a consistent interface — whether you prefer MongoDB or PostgreSQL.",
    capabilities: ["Schema design", "Custom queries", "GraphQL support"],
    features: [
      {
        title: "MongoDB & PostgreSQL",
        description: "Pick the engine that fits your product — same query patterns either way.",
        href: "/docs/modules/database",
      },
      {
        title: "Schemas & CRUD",
        description: "Model your data, create records, and evolve schemas as your product grows.",
        href: "/docs/modules/database",
      },
      {
        title: "Custom endpoints",
        description: "Expose filtered, aggregated queries tailored to your app's needs.",
        href: "/docs/modules/database",
      },
    ],
    relatedSlugs: ["authorization", "functions"],
    docsPath: "/docs/modules/database",
    featured: true,
    accent: "pink",
    iconSrc: "/moduleIcons/database.svg",
  },
  {
    slug: "authorization",
    title: "Authorization",
    description:
      "Fine-grained access control — define who can see and edit what, down to individual records.",
    tagline:
      "Model permissions as relationships — who owns what, who can read it, and who can change it — without hardcoding rules in every route.",
    capabilities: ["Resource permissions", "Team scoping", "Relationship-based access"],
    features: [
      {
        title: "Resources & relations",
        description: "Define what can be protected and how ownership and membership connect.",
        href: "/docs/modules/authorization",
      },
      {
        title: "Team-scoped access",
        description: "Let teams own documents and inherit permissions naturally.",
        href: "/docs/modules/authorization",
      },
      {
        title: "Permission checks",
        description: "Ask the platform who can do what — keep authorization logic centralized.",
        href: "/docs/modules/authorization",
      },
    ],
    relatedSlugs: ["authentication", "database"],
    docsPath: "/docs/modules/authorization",
    accent: "violet",
    Icon: ShieldCheck,
  },
  {
    slug: "storage",
    title: "Storage",
    description:
      "Upload and serve files through S3, Azure, Google Cloud, or local storage — one consistent workflow.",
    tagline:
      "Store images, documents, and media with a unified upload flow — cloud providers or local disk, your choice.",
    capabilities: ["Cloud or local", "Secure uploads", "Image & file serving"],
    features: [
      {
        title: "Multi-provider support",
        description: "S3, Azure Blob, Google Cloud Storage, or local filesystem.",
        href: "/docs/modules/storage",
      },
      {
        title: "Folders & organization",
        description: "Structure uploads with containers and folders that match your product.",
        href: "/docs/modules/storage",
      },
      {
        title: "Link files to records",
        description: "Attach stored files to database documents and serve them safely in your app.",
        href: "/docs/modules/storage",
      },
    ],
    relatedSlugs: ["chat", "database"],
    docsPath: "/docs/modules/storage",
    accent: "blue",
    iconSrc: "/moduleIcons/storage.svg",
  },
  {
    slug: "communications",
    title: "Communications",
    description:
      "Reach users where they are — transactional email, push notifications, and SMS from a single module.",
    tagline:
      "One module for every outbound channel — templates, providers, and delivery orchestration without juggling three integrations.",
    capabilities: ["Transactional email", "Push notifications", "SMS & verification"],
    features: [
      {
        title: "Transactional email",
        description: "Send welcome emails, receipts, and alerts with templated content.",
        href: "/docs/modules/communications",
      },
      {
        title: "Push notifications",
        description: "Register device tokens and reach users on mobile and web.",
        href: "/docs/modules/communications",
      },
      {
        title: "SMS & verification",
        description: "Deliver one-time codes and text messages through your chosen provider.",
        href: "/docs/modules/communications",
      },
    ],
    relatedSlugs: ["authentication", "chat"],
    docsPath: "/docs/modules/communications",
    accent: "teal",
    iconSrc: "/moduleIcons/emails.svg",
  },
  {
    slug: "chat",
    title: "Chat",
    description:
      "Realtime messaging built in — rooms, history, and live updates for collaborative products.",
    tagline:
      "Add messaging to your product without standing up a separate realtime service — rooms, participants, and live delivery included.",
    capabilities: ["Realtime messaging", "Rooms & history", "File attachments"],
    features: [
      {
        title: "Rooms & participants",
        description: "Create conversation spaces and manage who belongs in each room.",
        href: "/docs/modules/chat",
      },
      {
        title: "Live messaging",
        description: "Send and receive messages with realtime updates your users feel instantly.",
        href: "/docs/modules/chat",
      },
      {
        title: "Attachments",
        description: "Share files in conversations when paired with the Storage module.",
        href: "/docs/modules/chat",
      },
    ],
    relatedSlugs: ["storage", "communications"],
    docsPath: "/docs/modules/chat",
    accent: "purple",
    iconSrc: "/moduleIcons/chat.svg",
  },
  {
    slug: "router",
    title: "Router",
    description:
      "The front door to your backend — REST, GraphQL, and realtime connections through one gateway.",
    tagline:
      "Every module's capabilities reach your app through one gateway — REST, GraphQL, and realtime in a single integration surface.",
    capabilities: ["Single entry point", "REST & GraphQL", "Realtime connections"],
    features: [
      {
        title: "Unified API surface",
        description: "One place for your app to call every enabled module.",
        href: "/docs/modules/router",
      },
      {
        title: "REST & GraphQL",
        description: "Choose the style that fits your client — or use both.",
        href: "/docs/modules/router",
      },
      {
        title: "Realtime channels",
        description: "WebSocket support for chat and live features without a second server.",
        href: "/docs/modules/router",
      },
    ],
    relatedSlugs: ["database", "chat"],
    docsPath: "/docs/modules/router",
    accent: "blue",
    Icon: Network,
  },
  {
    slug: "functions",
    title: "Functions",
    description:
      "Extend the platform with custom server-side logic — webhooks, event handlers, and integrations.",
    tagline:
      "When modules aren't enough, add your own server-side logic — hooks, handlers, and integrations that run inside the platform.",
    capabilities: ["Custom logic", "Webhooks & events", "Platform extensions"],
    features: [
      {
        title: "Server-side JavaScript",
        description: "Write custom logic that runs with full platform access.",
        href: "/docs/modules/functions",
      },
      {
        title: "Event handlers",
        description: "React to platform events and automate workflows.",
        href: "/docs/modules/functions",
      },
      {
        title: "Extend without forking",
        description: "Add behavior without maintaining a separate microservice.",
        href: "/docs/modules/functions",
      },
    ],
    relatedSlugs: ["database", "router"],
    docsPath: "/docs/modules/functions",
    accent: "violet",
    Icon: Code2,
  },
];

export function getModuleBySlug(slug: string) {
  return MODULE_DEFINITIONS.find((m) => m.slug === slug);
}

export function getRelatedModules(slug: string) {
  const mod = getModuleBySlug(slug);
  if (!mod) return [];
  return mod.relatedSlugs
    .map((s) => getModuleBySlug(s))
    .filter((m): m is ModuleDefinition => m !== undefined);
}

export const ACCENT_STYLES: Record<
  ModuleDefinition["accent"],
  { icon: string; border: string; glow: string; tag: string }
> = {
  purple: {
    icon: "bg-primary/15 text-primary",
    border: "hover:border-primary/40",
    glow: "from-primary/20",
    tag: "bg-primary/10 text-primary",
  },
  teal: {
    icon: "bg-accent/15 text-accent",
    border: "hover:border-accent/40",
    glow: "from-accent/20",
    tag: "bg-accent/10 text-accent",
  },
  pink: {
    icon: "bg-[#f72585]/15 text-[#f72585]",
    border: "hover:border-[#f72585]/30",
    glow: "from-[#f72585]/15",
    tag: "bg-[#f72585]/10 text-[#f72585]",
  },
  amber: {
    icon: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-500/30",
    glow: "from-amber-500/15",
    tag: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  blue: {
    icon: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
    border: "hover:border-sky-500/30",
    glow: "from-sky-500/15",
    tag: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
  violet: {
    icon: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/30",
    glow: "from-violet-500/15",
    tag: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
};

/** @deprecated Use MODULE_DEFINITIONS — kept for simple slug lists */
export const MODULES = MODULE_DEFINITIONS.map(({ slug, title, description }) => ({
  slug,
  title,
  description,
}));
