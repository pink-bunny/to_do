/* eslint-env node */

const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'ts-out'),
      path.resolve(__dirname, 'ts-src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: [
      '.js',
      '.jsx'
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
