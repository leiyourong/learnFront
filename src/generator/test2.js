var fetch = require('node-fetch')
// var co = require('co')

function* gen(url){
  const data = yield fetch(url)
  console.log('firstYield: ' + data.url)
  const res = yield fetch(data.url)
  console.log('secondYield: ' + res.url)
  return res.url
}

var x = gen('https://leiyourong.github.io')



// function* gen(url){
//   const data = yield [fetch(url), fetch(url)]
//   console.log(data)
//   const res = yield {'xx': fetch(url), 'yy': fetch(url)}
//   console.log(res)
//   return res
// }
//
// co(gen.call(this, 'https://leiyourong.github.io')).then(data => {
//   console.log(data)
// })
