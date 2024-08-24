const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // create a dist folder with bundle.js
    clean: true, // only show the most recent bundling code
  },
}