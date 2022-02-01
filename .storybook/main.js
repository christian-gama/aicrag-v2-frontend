const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    resolve(__dirname, 'pathAlias'),
    resolve(__dirname, 'vanillaExtract'),
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite'
  }
}
