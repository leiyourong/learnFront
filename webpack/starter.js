var koa = require('koa');
var app = koa();
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var staticRes = require('koa-static');
var path = require('path');
var Router = require('koa-router');
var myRouter = new Router();

myRouter.get('/error',function *(){
  this.body = 'error'
})
app.use(myRouter.routes());

// add for mongodb
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
// var testSchema = mongoose.Schema({
//   name: String
// })
// testSchema.methods.speak = function () {
//   console.log('name:'+this.name);
// }
// var TestCol = mongoose.model('testcol',testSchema)
// var test = new TestCol({
//   name: 'lei'
// })
// test.speak()
// test.save(function(err, data) {
//   if (err) return console.error(err)
//   console.log(data);
// })


// add for h5.js test
// var convert = require('koa-convert');
// var historyApiFallback = require('koa-connect-history-api-fallback');

var config = require('./webpack.config');
var compiler = webpack(config);


// app.use(convert(historyApiFallback({
//   verbose: false
// })))
// app.use(staticRes(path.resolve(__dirname,'../public')));

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
