var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var webpack = require('webpack')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin; //代码压缩

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    bundle: ['./detail.js', 'webpack/hot/dev-server', 'webpack-hot-middleware/client?reload=true'], //mix
    // bundle:['./react/reactTest.js','webpack/hot/dev-server','webpack-hot-middleware/client?reload=true'],  //react
    // bundle:['./h5.js','webpack/hot/dev-server','webpack-hot-middleware/client?reload=true'],      //h5
    // bundle:['./vue/vue.js','webpack/hot/dev-server','webpack-hot-middleware/client?reload=true'],  // vue
    // bundle:['./vue/start.js','webpack/hot/dev-server','webpack-hot-middleware/client?reload=true'],  // vue-loader
    vendor: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.handlebars']
  },
  postcss: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-cssnext'),
    require('autoprefixer'),
  ],
  plugins: [
    new HtmlwebpackPlugin({
      title: 'XXXXX',
      // template: path.resolve('./public/tmpl/index.tmpl'), // mix react
      template: path.resolve('./public/tmpl/h5.tmpl'),  // h5
      // template: path.resolve('./public/tmpl/vue.tmpl'),  // vue
      // template: path.resolve('./public/tmpl/vue2.tmpl'),  // vue
      hash: true,
      inject: true,
      filename: 'index.html'
    }),

    //  new uglifyJsPlugin({
    //      compress: {
    //          warnings: false
    //       }
    //   }),
    // new OpenBrowserPlugin({
    //      url: 'http://localhost:8080'
    // }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),

    new CommonsChunkPlugin({
      name: ['commonChunk']
    }),

    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

  ],

  devtool: 'source-map', //错误报在原js上
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },


}
