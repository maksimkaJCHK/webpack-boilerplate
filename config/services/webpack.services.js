module.exports = {
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
              config: {path: 'postcss.config.js'},
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