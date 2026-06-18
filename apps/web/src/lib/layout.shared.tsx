import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Conduit",
      url: "/",
    },
    links: [
      {
        text: "Docs",
        url: "/docs",
      },
      {
        text: "llms.txt",
        url: "/llms.txt",
        external: true,
      },
      {
        text: "Hosting",
        url: "/hosting",
      },
      {
        text: "GitHub",
        url: "https://github.com/ConduitPlatform/Conduit",
        external: true,
      },
    ],
  };
}
