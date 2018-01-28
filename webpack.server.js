/* eslint-env node */

const merge = require('webpack-merge')

const common = require('./webpack.base.js')

const { EnvironmentPlugin } = require('webpack')

module.exports = merge(common, {
  target: 'node',

  entry: {
    app: './ts-out/server/index.jsx'
  },

  output: {
    filename: 'server.js'
  },

  plugins: [
    new EnvironmentPlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'WEBPACK_BUILD_TARGET': 'server'
    })
  ]
})
