module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/(*)Context.ts',
    '!<rootDir>/src/**/stylesheet/**/*',
    '!<rootDir>/src/**/*.css.ts',
    '!<rootDir>/src/**/*.model.ts',
    '!<rootDir>/src/**/api/index.ts',
    '!<rootDir>/src/**/store/*.ts',
    '!<rootDir>/src/external/**/*'
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
