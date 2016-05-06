
var express = require('express');
var app = express();
var path =require('path');
var router = express.Router();

//加载router
app.use(router);
app.use(express.static('css'));
//加载错误级中间件
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
 // throw new Error();  抛出异常,会被错误级中间件捕获
  next();

});

router.get('/user/:id', function (req, res, next) {
  if (req.params.id == 0)
      next('route');
  else next(); //
},function(req, res, next){
  res.send('id not equal 0')
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/user/:id', function (req, res, next) {
  res.send('special');
});
// 将路由挂载至应用


app.listen(8081);






function saveUsed(){
  var fs = require('fs')
  var read = fs.createReadStream('.babelrc')
  read.on('data',function(data){
    console.log(data.toString())
  })
  read.on('end',function(){
    console.log('finished')
  })
}

/*
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var process = require('process');

var urlObj = url.parse('http://localhost:8080?id=10&name=lisi');
var queryObj = querystring.parse(urlObj.query);

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081);
*/
