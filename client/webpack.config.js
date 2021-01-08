const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    port: 8000,
    host: 'localhost',
    historyApiFallback: true,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: 'public/favicon.ico'
    })
  ]
};