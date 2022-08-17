const path = require('path');

const paths = require('./paths')
const pathToSrc = require('app-root-path');

module.exports = {
  entry: {
    main: [paths.src + '/index.js']
  },
  output: {
    path: paths.build,
    filename: '[name].js',
  },
  target: ['web', 'es5'],
  //target: 'web'
  resolve: {
    extensionAlias: {
      '.js': ['.js', 'jsx', '.coffee'],
    },
    extensions: ['.js', '.jsx', '.coffee'],
    alias: {
      src: path.resolve(pathToSrc.path, 'src/'),
      components: path.resolve(pathToSrc.path, 'src/components/'),
      store: path.resolve(pathToSrc.path, 'src/store/'),
      actions: path.resolve(pathToSrc.path, 'src/store/actions/'),
      const: path.resolve(pathToSrc.path, 'src/store/const/'),
      reducers: path.resolve(pathToSrc.path, 'src/store/reducers/'),
      saga:path.resolve( pathToSrc.path, 'src/store/saga/'),
      api: path.resolve(pathToSrc.path, 'src/api/'),
      css: path.resolve(pathToSrc.path, 'src/css/'),
      helpers: path.resolve(pathToSrc.path, 'src/helpers/'),
    },
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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: 'postcss.config.js'
              },
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "sass-loader" 
        ]
      }, {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "less-loader"
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
}
