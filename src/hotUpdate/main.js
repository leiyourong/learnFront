var express = require('express');
var app = express();

var fs = require('fs');
var code = require('./code.js');

var router = express.Router();
app.use(router);

fs.watch(require.resolve('./code.js'), function () {
    cleanCache(require.resolve('./code.js'))
    try {
      code = require('./code.js');
    } catch (ex) {
      console.error('module update failed')
    }
});

function cleanCache(modulePath) {
  require.cache[modulePath] = null
}

app.get('/', function(req, res){
  res.send(code);
});
app.listen(3000);
