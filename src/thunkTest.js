
var thunkify = require('thunkify');
var co = require('co');  
var fs = require('fs')
var p = require('../my_module/log');
var read = thunkify(fs.readFile)

co(function *(){
    var x = yield read('package.json');
    console.log(x.toString());
    var y = yield read('.babelrc');
    console.log(y.toString());
})