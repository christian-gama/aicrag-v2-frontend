const config = require('./jest.config')
config.testMatch = ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}']
config.maxWorkers = '50%'
config.displayName = {
  color: 'magenta',
  name: 'UNIT'
}
module.exports = config
