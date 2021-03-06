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
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
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