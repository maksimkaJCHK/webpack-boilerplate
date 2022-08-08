const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackProdConfug = require('./services/webpack.common.prod.js');

module.exports = merge(common, webpackProdConfug, {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        options: {
          bare: false,
          transpile: {
            presets: ["@babel/env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              config: {path: 'postcss.config.js'},
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "sass-loader" 
        ]
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "less-loader" 
        ]
      }, {
        test: /\.twig$/,
        use: [
          'raw-loader',
          'twig-html-loader'
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            },
          },
        ],
      }
    ]
  },
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
