"use strict";

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "app/main.js")
  ],
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: "app/images/", to: "images/"}, {
        from: "app/extras"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "app/index.tpl.html",
      inject: "body",
      favicon: "app/favicon.ico",
      filename: "index.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.json?$/,
      loader: "json"
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.(ttf|eot|woff2|svg|png|woff|php)$/,
      loader: "file-loader"
    }, {
      test: /\.(jpg|jpeg)$/,
      loader: "file-loader?name=images/[name].[ext]"
    }, {
      test: /\.html$/,
      loader: "raw"
    }
    ]
  }
};
