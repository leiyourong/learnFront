var koa = require('koa');
var app = koa();
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
// var convert = require('koa-convert');
// var historyApiFallback = require('koa-connect-history-api-fallback');
var config = require('./webpack.config');
var compiler = webpack(config);

// app.use(convert(historyApiFallback({
//   verbose: false
// })))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
  })
);

app.use(webpackHotMiddleware(compiler, {
    log: console.log
  })
);

app.listen(8081);
