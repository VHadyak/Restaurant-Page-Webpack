const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // create a dist folder with bundle.js
    clean: true, // only show the most recent bundling code
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: {
      paths: ["./src/template.html"], // Watch for html file changes to trigger automatic reload
      options: {
        usePolling: true, // Use polling to detect changes 
      },
    },
    open: true,
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