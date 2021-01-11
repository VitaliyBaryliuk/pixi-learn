const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    host: '127.0.0.1',
    hot: true,
  }
})