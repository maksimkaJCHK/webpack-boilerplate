const path = require('path');
const paths = require('./paths');

module.exports = {
  entry: {
    main: [paths.src + '/app.js']
  },
  output: {
    path: paths.build,
    filename: '[name].js',
    clean: true,
  },
  //target: ['web', 'es5'],
  target: 'web',
  resolve: {
    extensionAlias: {
      '.js': ['.js', 'jsx', '.coffee'],
    },
    extensions: ['.js', '.jsx', '.coffee'],
    alias: {
      '@src': path.resolve(paths.src),
      '@styles': path.resolve(paths.src, 'styles'),
      '@helpers': path.resolve(paths.src, 'helpers'),
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
