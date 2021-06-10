module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!next-env.d.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
}
