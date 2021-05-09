const path = require("path");
const pj = require("./package.json");
const peers = Object.keys(pj.peerDependencies).reduce((prev, pd) => {
  prev[pd] = `commonjs2 ${pd}`;

  return prev;
}, {});
console.log(peers);
module.exports = {
  entry: {
    useReactQuery: "./src/useReactQuery/index.ts",
    useTranslations: "./src/useTranslations/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    // library: "someLibName",
    libraryTarget: "umd",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  externals: {
    ...peers,
    ["next/router"]: "common2js next/router",
  },
};
