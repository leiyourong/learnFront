'use strict'

const fs = require('fs')

const callback = function(err, data){
  console.log(data)
}

fs.readFile('package.json', callback)
