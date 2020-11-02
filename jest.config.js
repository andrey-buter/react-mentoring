const { defaults } = require("jest-config");


// https://basarat.gitbook.io/typescript/intro-1/jest
module.exports = {
  // verbose: true,
  // rootDir: process.cwd(),
  // roots: ["<rootDir>/src"],
  // testMatch: [
  //   "**/__tests__/**/*.+(ts|tsx|js)",
  //   "**/?(*.)+(spec|test).+(ts|tsx|js)",
  // ],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },
  // moduleNameMapper: {
  //   "@Models": "<rootDir>/src/models",
  //   "@Components": "<rootDir>/src/Components",
  //   "@StyledComponents": "<rootDir>/src/StyledComponents",
  //   "@Services": "<rootDir>/src/Services",
  //   "@Data": "<rootDir>/src/Assets/data",
  //   "@Context": "<rootDir>/src/Context",
  //   "@": "<rootDir>/src",
  //   // "@(.*)$": "<rootDir>/src/$1",
  //   // "^vue$": "vue/dist/vue.common.js"
  // },
  // moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],


  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/(?!@foo)"
  ],

  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json",
      "enableTsDiagnostics": true
    }
  },

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@Models/(.*)": "<rootDir>/src/models/$1",
    "@Components/(.*)": "<rootDir>/src/Components/$1",
    "@StyledComponents/(.*)": "<rootDir>/src/StyledComponents/$1",
    "@Services/(.*)": "<rootDir>/src/Services/$1",
    "@Data/(.*)": "<rootDir>/src/Assets/data/$1",
    "@Context/(.*)": "<rootDir>/src/Context/$1",
    "@/(.*)": "<rootDir>/src/$1",
    
    // https://facebook.github.io/jest/docs/webpack.html#mocking-css-modules
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },

  testEnvironment: "jsdom",

  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@foo)"
  ]
};
