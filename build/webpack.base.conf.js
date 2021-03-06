var product_cdn = 'http://wx.cdn.pipapay.com/static/'

var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/main.js',
    vendor: [ 'vue', 'vue-router', 'vue-resource',
          './src/components/qrcode/index.js',
          './src/components/barcode/JsBarcode.code128.min.js']
  },
  output: {
    path: path.resolve(__dirname, '../site/static'),
    publicPath: product_cdn,
    filename: '[name].js'
  },
  stats: {
    children: false
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
