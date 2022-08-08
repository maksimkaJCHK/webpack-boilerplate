const paths = require('./services/paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')
const services = require('./services/webpack.services.js')

module.exports = merge(common, services, {
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
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  // ]
})
