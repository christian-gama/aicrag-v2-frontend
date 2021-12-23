const config = require('./jest.config')
config.testMatch = ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}']
config.maxWorkers = 12
config.displayName = {
  color: 'magenta',
  name: 'UNIT'
}
module.exports = config
