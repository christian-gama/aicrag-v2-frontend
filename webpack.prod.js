const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const { EnvironmentPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new EnvironmentPlugin({
      API_URL: 'https://aicrag-v2-backend.herokuapp.com/graphql'
    }),
    new HtmlWebpackPlugin({
      template: './public/template.prod.html'
    }),
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, 'public/assets/favicon.svg'),
      cache: true
    })
  ]
})
