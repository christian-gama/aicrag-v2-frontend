const config = require('./jest.config')
config.testMatch = ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}']
config.displayName = {
  color: 'magenta',
  name: 'UNIT'
}
module.exports = config
