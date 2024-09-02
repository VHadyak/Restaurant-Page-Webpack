const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: {
      paths: ["./src/template.html"], // Watch for html file changes to trigger automatic reload
      options: {
        usePolling: true, // Use polling to detect changes 
      },
    },
    static: "./dist",
    open: true,
  },
});