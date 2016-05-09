var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpack = require('webpack')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;//代码压缩
/*
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
*/
module.exports = {
    context : path.resolve( __dirname,'../src'),
    entry : {
      //  bundle:["./detail.js","webpack/hot/dev-server","webpack-hot-middleware/client?reload=true"],
        // bundle:["./reactTest.js","webpack/hot/dev-server","webpack-hot-middleware/client?reload=true"],
        bundle:["./h5.js","webpack/hot/dev-server","webpack-hot-middleware/client?reload=true"],
        vendor:['jquery']
    },
    output :{
        path : path.resolve( __dirname,'../dist'),
        filename : "[name].js",
    },
    node: {
        fs: "empty"
    },
    module:{
        loaders:[
            { test:/\.css$/,loader:"style!css" },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015','stage-0']
                }
            },
            { test:/\.(png|jpg)$/,loader:"url-loader?limit=8192"},
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css' ,'.handlebars']
    },
    plugins:[
       new HtmlwebpackPlugin({
        title : '为毛重复了？',
        // template: path.resolve('./public/tmpl/index.tmpl'),
        template: path.resolve('./public/tmpl/h5.tmpl'),
        hash: true,
        inject: true,
        filename: 'index.html'
       }),

       new uglifyJsPlugin({
           compress: {
               warnings: false
            }
        }),
        // new OpenBrowserPlugin({
        //      url: 'http://localhost:8080'
        // }),
        // devFlagPlugin

        new CommonsChunkPlugin({
          name:['commonChunk']
        }),

        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

    ],


    devtool: 'eval-source-map',  //错误报在原js上
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
    },


}
