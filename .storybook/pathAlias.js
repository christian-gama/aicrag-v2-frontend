const path = require('path')

module.exports = {
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/helpers': path.resolve(__dirname, '../src/helpers'),
          '@/context': path.resolve(__dirname, '../src/context'),
          '@/external': path.resolve(__dirname, '../src/external'),
          '@/services': path.resolve(__dirname, '../src/services'),
        }
      }
    }
  }
}
