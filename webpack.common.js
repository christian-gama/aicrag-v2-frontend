const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    filename: 'main-bundle-[fullhash].js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }]
    }),
    new VanillaExtractPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[fullhash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
