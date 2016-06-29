'use strict';

const join = require('path').join;

module.exports = {
  entry: join(__dirname, 'client/index.js'),
  output: {
    filename: join(__dirname, 'public/index.js')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015&presets[]=react!svg-react'
      }
    ]
  }
};
