var fetch = require('node-fetch')
var async = require('async')
const url = 'https://leiyourong.github.io'

async function gen(){
  const data = await fetch(url)
  console.log('firstYield: ' + data.url)
  const res = await fetch(data.url)
  console.log('secondYield: ' + res.url)
  return res.url
}
gen()
