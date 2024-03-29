// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Conduit Platform",
  tagline: "Less is more",
  url: "https://mystifying-borg-373afd.netlify.app",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "ConduitPlatform", // Usually your GitHub org/user name.
  projectName: "Conduit", // Usually your repo name.
  plugins: ["posthog-docusaurus", ["docusaurus2-dotenv", { systemvars: true }]],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: undefined,
          includeCurrentVersion: false, // disable 'next' version, enable for offline edits
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      posthog: {
        apiKey: `<${process.env.POSTHOG_API_KEY}>`,
        appUrl: "<https://app.posthog.com>", // optional
        enableInDevelopment: false, // optional
      },
      metadata: [
        {
          name: "title",
          content: "Conduit | Documentation",
        },
        { name: "canonical", content: "https://www.getconduit.dev/docs" },
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
          href: "https://www.getconduit.dev",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://www.getconduit.dev/blog",
            target: "_self",
            label: "Blog",
            position: "left",
          },
          {
            to: "https://www.getconduit.dev/contribute",
            target: "_self",
            label: "Contribute",
            position: "left",
          },
          {
            type: 'docsVersionDropdown',
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
                label: "Overview",
                to: "/overview/intro",
              },
              {
                label: "Get Started",
                to: "/get-started",
              },
              {
                label: "Modules",
                to: "/modules",
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
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ConduitPlatform/Conduit",
              },
            ],
          },
        ],
        logo: {
          alt: "Conduit Logo",
          src: "logo.light.svg",
          href: "https://www.getconduit.dev",
          width: 160,
          height: 51,
        },
        copyright: `Copyright © Conduit ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
