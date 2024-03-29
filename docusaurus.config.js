const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const footerConfig = require('./config/footer')
const navbarConfig = require('./config/navbarConfig')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rodrigo Victor',
  tagline: 'My content arsenal, where I put my software engineering notes',
  favicon: 'img/buda.png',

  url: 'https://rodrigorvsn.github.io',
  baseUrl: '/buda/',

  organizationName: 'RodrigoRVSN',
  projectName: 'buda',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/RodrigoRVSN/buda'
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/RodrigoRVSN/buda'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/buda.png',
      navbar: navbarConfig,
      footer: footerConfig,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
