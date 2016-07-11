"use strict";

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";

module.exports = {
  entry: [
    path.join(__dirname, "app/main.js")
  ],
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "[name]-[hash].min.js"
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: "app/images/",
      to: "images/"
    }, {
      from: "app/extras"
    }, {
      from: "app/runtime"
    }]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.tpl.html",
      inject: "body",
      favicon: "app/favicon.ico",
      filename: "index.html"
    }),
    new ExtractTextPlugin("[name]-[hash].min.css"),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
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
      loader: ExtractTextPlugin.extract("style", "css")
    }, {
      test: /\.(ttf|eot|woff2|svg|png|woff)$/,
      loader: "file-loader?name=assets/[name].[ext]"
    }, {
      test: /\.php$/,
      loader: "file-loader?name=[name].[ext]"
    }, {
      test: /\.html$/,
      loader: "raw"
    }]
  }
};
