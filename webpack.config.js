//para ficar o mesmo caminho seja no linux ou windows
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "PRODUCTION";

module.exports = {
  mode: isDevelopment ? "development" : 'production',
  //mostrar no lugar exato onde o erro se encontra.
  devtool: isDevelopment ? "eval-source-map" : "source-map",
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
  devServer: {
    static: {
      directory: path.resolve(__dirname, "app"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      
    ],
  },
};
