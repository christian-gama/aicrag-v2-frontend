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
    '^.+\\.css.ts': ['babel-jest', { configFile: './babel-jest.config.js' }],
    '^.+\\.tsx?$': '@swc/jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/config/jestDom.ts']
}
