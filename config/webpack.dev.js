const paths = require('./services/paths');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./services/webpack.common.js');

const env_variables = require('./services/env_variables.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: {
      directory: paths.public,
      watch: true,
      publicPath: '',
    },
    watchFiles: {
      paths: [
        'src/**/*.js',
        'src/*.js',
      ],
      options: {
        usePolling: false,
      },
    },
    devMiddleware: {
      index: true,
      mimeTypes: {
        phtml: 'text/html'
      },
      serverSideRender: true,
      writeToDisk: true,
    },
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
      logging: 'error',
      progress: true,
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: true,
    liveReload: true,
  },
}, {
  plugins: [
    new webpack.EnvironmentPlugin(env_variables)
  ]
})
