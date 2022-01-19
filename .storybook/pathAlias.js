const path = require('path')

module.exports = {
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          '@/tests': path.resolve(__dirname, '../tests'),
          '@': path.resolve(__dirname, '../src')
        }
      }
    }
  }
}
