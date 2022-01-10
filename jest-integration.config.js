const config = require('./jest.config')
config.testMatch = ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}']
config.maxWorkers = 6
config.displayName = {
  color: 'blueBright',
  name: 'INTEGRATION'
}
module.exports = config
