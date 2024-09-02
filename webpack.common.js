const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Translate CSS into JS module, then take JS module and inject CSS into html
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};