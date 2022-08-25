const { merge } = require('webpack-merge');
const common = require('./services/webpack.common.js');
const webpackProdConfug = require('./services/webpack.common.prod.js');

module.exports = merge(common, webpackProdConfug);
