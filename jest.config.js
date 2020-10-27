const { defaults } = require("jest-config");


// https://basarat.gitbook.io/typescript/intro-1/jest
module.exports = {
  verbose: true,
  rootDir: process.cwd(),
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
