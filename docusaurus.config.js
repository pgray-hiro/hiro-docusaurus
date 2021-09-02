const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hiro Docs",
  tagline: "Developer tools for Stacks",
  url: "https://docs.hiro.so",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-light.svg",
  organizationName: "hirosystems", // Usually your GitHub org/user name.
  projectName: "hiro-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Hiro docs logo",
        src: "img/logo-light.svg",
        srcDark: "img/logo-dark.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          type: "doc",
          docId: "get-started",
          position: "right",
          label: "Developer docs",
        },
        {
          type: "doc",
          docId: "wallets",
          position: "right",
          label: "Wallets",
        },
        {
          to: "/api",
          label: "API",
          position: "right",
        },
        {
          type: "doc",
          docId: "tutorials",
          position: "right",
          label: "Tutorials",
        },
        {
          type: "doc",
          docId: "example-apps",
          position: "right",
          label: "Example apps",
        },
        {
          href: "https://github.com/hirosystems",
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Forum",
              href: "https://forum.stacks.org",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/stacks",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hirosystems",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Stacks Docs",
              href: "https://docs.stacks.co",
            },
            {
              label: "GitHub",
              href: "https://github.com/hirosystems",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hiro Systems, PBC. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
