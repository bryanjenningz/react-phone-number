const { resolve } = require('path');

module.exports = {
  entry: ['./index.js'],
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
};
