const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./services/webpack.common.js');
const services = require('./services/webpack.services.js');
const webpackCommonProd = require('./services/webpack.common.prod.js');

module.exports = merge(common, services, webpackCommonProd, {
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DOMAIN', 'RANDOM_DOG'])
  ]
});
