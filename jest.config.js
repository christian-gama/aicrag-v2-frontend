module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
