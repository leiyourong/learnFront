function* gen(){
  console.log('start')
  var x = yield 1+2
  console.log(x)
  return x
}
var x = gen()
console.log(x.next())
console.log(x.next(2))

// console.log('next')
// console.log(x.next(1))
