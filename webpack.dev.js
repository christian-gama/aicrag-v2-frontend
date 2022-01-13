const HtmlWebpackPlugin = require('html-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './public'
    },
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new EnvironmentPlugin({
      API_URL: 'http://localhost:4000/graphql'
    }),
    new HtmlWebpackPlugin({
      template: './public/template.dev.html'
    })
  ]
})
