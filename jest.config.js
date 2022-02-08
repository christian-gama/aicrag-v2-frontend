module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/**/*.context.ts',
    '!<rootDir>/src/**/*.css.ts',
    '!<rootDir>/src/**/*.model.ts',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
    '!<rootDir>/src/**/store/*.ts',
    '!<rootDir>/src/**/stylesheet/**/*',
    '!<rootDir>/src/external/**/*'
  ],
  coverageDirectory: 'coverage',
  maxWorkers: '75%',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/tests/config/setupFilesAfterEnv.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }]
  },
  moduleNameMapper: {
    '@/tests/(.*)$': '<rootDir>/tests/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
