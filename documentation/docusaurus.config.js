// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

// Conditionally add posthog plugin only if API key is set
const plugins = [];
if (process.env.POSTHOG_API_KEY) {
  plugins.push([
    "posthog-docusaurus",
    {
      apiKey: process.env.POSTHOG_API_KEY,
      appUrl: "https://app.posthog.com",
      enableInDevelopment: false,
    },
  ]);
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Conduit Platform",
  tagline: "The only Backend you'll ever need",
  url: "https://archive.getconduit.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "ConduitPlatform", // Usually your GitHub org/user name.
  projectName: "Conduit", // Usually your repo name.

  // Auto-detect format: .mdx files support JSX, .md files use CommonMark
  markdown: {
    format: 'detect',
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  plugins,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/ConduitPlatform/Conduit-Website/tree/main/documentation/",
          includeCurrentVersion: false, // disable 'next' version, enable for offline edits
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          lastVersion: "v0.16",
          versions: {
            "v0.16": { path: "v0.16", label: "v0.16" },
            "v0.15": { path: "v0.15", label: "v0.15" },
            "v0.14": { path: "v0.14", label: "v0.14" },
          },
        },
        blog: false,
        theme: {
          customCss: [
            "./src/css/custom.css",
            "./src/css/components.css",
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "legacy_docs_archive",
        content:
          'You are viewing legacy documentation (v0.14–v0.16). <a href="https://getconduit.dev/docs/intro">Current v0.17 docs →</a>',
        backgroundColor: "#07d9c4",
        textColor: "#1F2034",
        isCloseable: true,
      },
      // Algolia DocSearch - apply at https://docsearch.algolia.com/
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'conduit',
      //   contextualSearch: true,
      // },
      metadata: [
        {
          name: "title",
          content: "Conduit | Documentation",
        },
        { name: "canonical", content: "https://archive.getconduit.dev" },
        { name: "image", content: "https://getconduit.dev/og/branding.png" },
        { name: "description", content: "Learn about Conduit" },
        { name: "og:title ", content: "Conduit | Documentation" },
        { name: "og:description", content: "Learn about Conduit" },
        { name: "og:image", content: "https://getconduit.dev/og/branding.png" },
      ],
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "",
        logo: {
          alt: "Conduit Logo",
          src: "logo.dark.svg",
          href: "https://getconduit.dev",
          target: "_self",
        },
        items: [
          {
            to: "/v0.16/intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://getconduit.dev/docs/intro",
            target: "_self",
            label: "v0.17 Docs",
            position: "left",
          },
          {
            to: "https://getconduit.dev/docs/resources/changelog",
            target: "_self",
            label: "Changelog",
            position: "left",
          },
          {
            to: "https://getconduit.dev/contribute",
            target: "_self",
            label: "Contribute",
            position: "left",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/ConduitPlatform/Conduit",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/v0.16/intro",
              },
              {
                label: "Quick Start",
                to: "/v0.16/quickstart/installation",
              },
              {
                label: "Modules",
                to: "/v0.16/modules/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/fBqUQ23M7g",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ConduitPlatform",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ConduitPlatform/Conduit",
              },
              {
                label: "Contributing",
                to: "/resources/contributing",
              },
            ],
          },
        ],
        logo: {
          alt: "Conduit Logo",
          src: "logo.light.svg",
          href: "https://getconduit.dev",
          width: 160,
          height: 51,
        },
        copyright: `Copyright © Conduit ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
