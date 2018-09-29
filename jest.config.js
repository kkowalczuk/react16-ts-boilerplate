module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupTestFrameworkScriptFile: "<rootDir>/test.config.ts",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};