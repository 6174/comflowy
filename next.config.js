const path = require("path");
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  }
})
