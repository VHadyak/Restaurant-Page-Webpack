const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // create a dist folder with bundle.js
    clean: true, // only show the most recent bundling code
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // generate html file in dist directory with injected js bundle
    }),
  ],
}