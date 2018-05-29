const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [
      // jsx
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // styles
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // images
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      },
    ]
  },
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: '[name].min.js',
  },
};
