module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/(*).context.ts',
    '!<rootDir>/src/**/stylesheet/**/*',
    '!<rootDir>/src/**/*.css.ts',
    '!<rootDir>/src/**/*.model.ts',
    '!<rootDir>/src/**/api/index.ts',
    '!<rootDir>/src/**/store/*.ts',
    '!<rootDir>/src/external/**/*',
    '!<rootDir>/src/**/*.stories.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }]
  },
  moduleNameMapper: {
    '@/tests/(.*)$': '<rootDir>/tests/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/config/jestDom.ts']
}
