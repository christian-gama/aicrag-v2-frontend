const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    path.resolve(__dirname, 'vanillaExtract'),
    path.resolve(__dirname, 'pathAlias'),
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-actions'
  ],
  core: {
    builder: 'storybook-builder-vite'
  }
}