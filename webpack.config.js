const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
  mode: "development"
};