/* eslint-env node */

const merge = require('webpack-merge')

const common = require('./webpack.base.js')

module.exports = merge(common, {
  entry: {
    app: './ts-out/client/index.jsx'
  },

  output: {
    publicPath: '/',
    filename: 'client.js'
  }
})
