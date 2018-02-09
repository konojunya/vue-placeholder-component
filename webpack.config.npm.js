var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./src/npm.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'img-placehlder.js',
    libraryTarget: 'umd',
    library: 'ImgPlaceholder',
    umdNamedDefine: true
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}