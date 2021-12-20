const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolve } = require('path')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    }),
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, 'src/main/assets/favicon.svg'),
      cache: true
    })
  ]
})
