const { merge } = require('webpack-merge');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./services/webpack.common.js');
const webpackProdConfug = require('./services/webpack.common.prod.js');

const env_variables = require('./services/env_variables.js');

// Меняю use со style-loader на MiniCssExtractPlugin.loader для css, scss, less файлов

common.module.rules[2].use[0] = MiniCssExtractPlugin.loader;
common.module.rules[3].use[0] = MiniCssExtractPlugin.loader;
common.module.rules[4].use[0] = MiniCssExtractPlugin.loader;

common.module.rules.push({
  test: /\.twig$/,
  use: [
    'raw-loader',
    'twig-html-loader'
  ]
});

module.exports = merge(common, webpackProdConfug, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin(
      {
        filename: '../index.html',
        template: 'templates/index.twig',
        inject: false
      },
    ),
    new webpack.EnvironmentPlugin(env_variables),
  ],
})
