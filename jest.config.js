module.exports = {
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "graphql"],
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage/",
    "<rootDir>/cypress",
    "<rootDir>/cache",
    "<rootDir>/dist",
  ],
  transform: {
    "\\.tsx?$": "babel-jest",
  },
  globals: {
    __VERSION__: "test",
  },
};
