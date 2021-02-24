/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Drupal Stickers Book',
  tagline: 'Build a Drupal website in no time !',
  url: 'https://drupal.livingcolor.academy',
  baseUrl: '/',
  favicon: 'img/logo-white.png',
  organizationName: 'abecms', // Usually your GitHub org/user name.
  projectName: 'book-drupal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Drupal Stickers Recipes',
      logo: {
        alt: 'livingcolor',
        src: 'img/logo.png',
      },
      items: [
        {to: 'docs/setup/introduction', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/setup/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://abecms.slack.com',
            },
          ],
        },
        {
          title: 'Website',
          items: [
            {
              label: 'Website',
              href: 'https://livingcolor.fr',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Abe SAS. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '0d9d1e39a8757f562ff84603cf0ea7b4',
      indexName: 'drupal_stickers_book',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
