var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  }
}
