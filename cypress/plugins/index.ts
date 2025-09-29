/*const path = require('path');
const webpack = require('webpack');
const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = (on, config) => {
  on('file:preprocessor', require('@cypress/webpack-preprocessor')(webpackOptions));
};*/