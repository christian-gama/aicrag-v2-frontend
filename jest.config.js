module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/(*)Context.ts',
    '!<rootDir>/src/**/*.css.ts',
    '!<rootDir>/src/**/store/*.ts',
    '!<rootDir>/src/**/*.model.ts'
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
