const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const SRC_PATH = path.resolve(__dirname, "./src")
const DIST_PATH = path.resolve(__dirname, "./dist")

module.exports = {
  entry: path.join(SRC_PATH, "index.tsx"),
  output: {
    path: DIST_PATH,
    filename: "app.bundle.js",
  },
  devtool: "source-map",
  devServer: {
    port: 5555,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "ts-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [SRC_PATH, "node_modules"]
  },
}