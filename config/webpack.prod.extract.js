const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackProdConfug = require('./services/webpack.common.prod.js');

common.module.rules[2].use[0] = MiniCssExtractPlugin.loader;
common.module.rules[3].use[0] = MiniCssExtractPlugin.loader;
common.module.rules[4].use[0] = MiniCssExtractPlugin.loader;

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
    )
  ],
})
