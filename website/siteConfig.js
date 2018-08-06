/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'LukaszWasylow',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/utplsq.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'utPLSQL Documentation' /* title for your website */,
  tagline: 'Documentation',
  url: 'https://utplsql.org' /* your website url */,
  baseUrl: '/pages/lwasylow/docusaurus/' /* base url for your project */,
  // Used for publishing and more
  projectName: 'docusaurus',
  organizationName: 'lwasylow',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
   { doc: "README", label: "Index" },
   { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/utplsq.svg',
  footerIcon: 'img/utplsq.svg',
  favicon: 'img/utplsq.png',

  /* colors for website */
  colors: {
    primaryColor: '#847cc0',
    secondaryColor: '#847cc0',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/utplsq.png',
  twitterImage: 'img/utplsq.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
