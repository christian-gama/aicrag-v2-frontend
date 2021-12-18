const config = require('./jest.config')
config.testMatch = ['!**/*.test.ts', '**/*.spec.ts']
config.maxWorkers = 8
config.displayName = {
  color: 'magenta',
  name: 'UNIT',
}
module.exports = config
