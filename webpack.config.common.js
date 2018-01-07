/* eslint-env node */

const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './ts-out/index.js',

    vendor: [
      'react',
      'react-dom',
      'prop-types',

      'redux',
      'react-redux',
      'redux-multi',
      'redux-thunk',
      'redux-logger',
      'redux-devtools-extension',

      'react-router-dom',
      'react-router-redux'
    ]
  },

  devServer: {
    historyApiFallback: true
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

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Application',
      template: 'public/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.HashedModuleIdsPlugin()
  ]
}
