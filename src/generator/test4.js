'use strict'
const fetch = require('node-fetch');
const url = 'https://leiyourong.github.io'
const fs = require('fs')
const co = require('co')
const thunkify = require('thunkify')
const read = thunkify(fs.readFile)

const callback = function(err, data){
  console.log(data)
}

function* gen(){
  const data = yield fs.readFile('package.json', 'utf-8', callback)
  console.log(data)
  return data
}

co(gen)
