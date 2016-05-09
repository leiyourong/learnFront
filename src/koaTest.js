var koa = require('koa')
var app = koa()
var path = require('path');
var onerror = require('koa-onerror');
var staticRes = require('koa-static');
var staticCache = require('koa-static-cache');
var Router = require('koa-router');
var myRouter = new Router();

myRouter.get('/',function *(next){
    console.log(this.method+' /');
    yield next;

})

myRouter.get('/e',function *(){
    this.redirect('/error');
    this.status = 301;
  //  myRouter.redirect('/error');
})

myRouter.get('/error',function *(){
    console.log('error');
    this.body = '404'
})

app.use(myRouter.routes());

onerror(app);
app.use(staticRes(path.resolve(__dirname,'../public')))
/*
app.use(staticCache(path.resolve(__dirname,'../public')))
app.use(staticCache(path.join(__dirname, '../public'), {
maxAge: 10
}))
/*
app.on('error', function(err){
  console.log('server error', err);
  log.error('server error', err);
});
app.use(function* (next) {
  try {
    yield* next;
  } catch(e) {
    var status = e.status || 500;
    var message = e.message || '服务器错误';

    if (e instanceof JsonError) { // 错误是 json 错误
      this.body = {
        'status': status,
        'message': message
      };
      if (status == 500) {
        // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
        this.app.emit('error', e, this);
      }
      return;
    }

    this.status = status;
    // 根据 status 渲染不同的页面
    if (status == 403) {
      this.body = yield this.render('403.html', {'err': e});
    }
    if (status == 404) {
      this.body = yield this.render('404.html', {'err': e});
    }
    if (status == 500) {
      this.body = yield this.render('500.html', {'err': e});
      // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
      this.app.emit('error', e, this);
    }
  }
});
*/

app.use(function *(next){
  var start = new Date;
  yield next;
 // var ms = new Date - start;
 // this.set('X-Response-Time', ms + 'ms');
 console.log('22');
});


app.use(function *(next){
  var start = new Date;
  yield next;
  console.log('11');
});



app.use(function *(){
  this.body = 'Hello World';
});

app.listen(8080,'127.0.0.1')
