const config = require('./jest.config')
config.testMatch = [
  '<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}',
  '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'
]
config.maxWorkers = '50%'
config.displayName = {
  color: 'cyan',
  name: 'CI'
}
module.exports = config
