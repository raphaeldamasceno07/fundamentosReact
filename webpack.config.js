//para ficar o mesmo caminho seja no linux ou windows
const path = require("path");

module.exports = {
  // arquivo de entrada
  entry: path.resolve(__dirname, "src", "index.jsx"),
  //arquivo a ser gerado
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
