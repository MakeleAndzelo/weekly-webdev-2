let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/./assets',
              useRelativePath: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001,
      files: ['./*.html'],
      server: { baseDir: ['.'] },
      browser: 'chromium'
    }),
  ]
};