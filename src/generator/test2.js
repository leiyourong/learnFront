var fetch = require('node-fetch')
var co = require('co')
url = 'https://leiyourong.github.io'
function* gen(){
  const data = yield [fetch(url), fetch(url)]
  console.log(data)
  const res = yield {'xx': fetch(url), 'yy': fetch(url)}
  console.log(res)
  return res
}

co(gen)
// console.log(x.next())


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
