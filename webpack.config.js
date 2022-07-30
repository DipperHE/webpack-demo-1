const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  // mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  // entry: "./src/index.js",
  // output: {
  //   filename: "[name].[contenthash].js",
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "XDML",
  //     template: "src/assets/index.html",
  //   }),
  // new MiniCssExtractPlugin({
  //   filename: "[name].[contenthash].css",
  //   chunkFilename: "[id].[contenthash].css",
  //   ignoreOrder: false,
  // }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
