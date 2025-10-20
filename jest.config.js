/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/packages/ui/tsconfig.json",
      },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|@unimodules|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  // This is needed to resolve the @repo/* aliases in tests
  moduleNameMapper: {
    "^@repo/(.*)$": "<rootDir>/packages/$1/src",
    "^react-native$": "react-native-web",
  },
};

module.exports = config;
