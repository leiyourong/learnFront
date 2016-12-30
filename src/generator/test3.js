'use strict'

var fetch = require('node-fetch')
var co = require('co')
const fs = require('fs')
var thunkify = require('thunkify')
var read = thunkify(fs.readFile)
function* gen(){
  const data = yield read('package.json', 'utf-8')
  console.log(data)
  return data
}
co(gen)
