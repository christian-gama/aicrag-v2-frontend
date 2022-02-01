const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')

module.exports = {
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, vanillaExtractPlugin()]
    }
  }
}
