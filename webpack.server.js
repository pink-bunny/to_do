/* eslint-env node */

const merge = require('webpack-merge')

const common = require('./webpack.base.js')

module.exports = merge(common, {
  target: 'node',

  entry: {
    app: './ts-out/index.jsx'
  },

  output: {
    filename: 'server.js'
  }
})
