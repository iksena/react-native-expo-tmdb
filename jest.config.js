module.exports = {
  preset: 'react-native',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '<rootDir>/tests/test-utils.js',
  ],
};
