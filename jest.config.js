module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/store/**/*',
    '!<rootDir>/src/**/*.css.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { configFile: './babel-jest.config.js' }]
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/config/jestDom.ts']
}
