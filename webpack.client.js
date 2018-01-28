/* eslint-env node */

const merge = require('webpack-merge')

const common = require('./webpack.base.js')

const { EnvironmentPlugin } = require('webpack')

module.exports = merge(common, {
  entry: {
    app: './ts-out/client/index.jsx'
  },

  output: {
    publicPath: '/',
    filename: 'client.js'
  },

  plugins: [
    new EnvironmentPlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'WEBPACK_BUILD_TARGET': 'client'
    })
  ]
})
