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
  favicon: "img/favicon.ico",
  organizationName: "ConduitPlatform", // Usually your GitHub org/user name.
  projectName: "Conduit", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ConduitPlatform/Conduit-Website/tree/master/documentation",
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
          alt: "My Site Logo",
          src: "img/logo.svg",
          href: "https://www.getconduit.dev",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
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
                to: "/",
              },
              {
                label: "Modules",
                to: "/modules",
              },
              {
                label: "Admin Panel",
                to: "/admin-panel",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
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
        copyright: `Copyright © Conduit ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
