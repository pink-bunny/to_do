/* eslint-env node */

const webpack = require('webpack')
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',

  output: {
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin([
      'build'
    ]),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      parallel: true
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
