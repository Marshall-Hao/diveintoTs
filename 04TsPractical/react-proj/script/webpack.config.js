/*
 * @Author: your name
 * @Date: 2022-01-04 06:09:34
 * @LastEditTime: 2022-01-04 06:37:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/04TsPractical/react-proj/script/webpack.config.js
 */
const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/main.tsx"),
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../buildwebpack"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../build"),
    },
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: path.resolve(__dirname, "./template.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
