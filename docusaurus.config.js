const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'C++ and Dev Practices',
  tagline: 'A gentle introduction',
  url: 'https://julesfouchy.github.io/',
  baseUrl: '/Learn--Cpp-And-Dev-Practices/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'julesfouchy',
  projectName: 'Learn--Cpp-And-Dev-Practices',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/evaluation', label: 'Evaluation', position: 'left'},
        {
            href: 'https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // algolia: {
    //     apiKey: 'YOUR_API_KEY',
    //     indexName: 'YOUR_INDEX_NAME',
    //     contextualSearch: true,
    //     searchParameters: {},
    //     placeholder: 'Search',
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
