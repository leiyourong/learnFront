import CalcuModel from './calcuModel'
import NetModel from './netModel'

const calcu = new CalcuModel('TestCalcu')

calcu.add(1, 2) // 3
calcu.del(1, 2) // -1
calcu.getName() // TestCalcu
calcu.alias = 'Test'
calcu.getName()

calcu.diff([1, 2, 4, 1, 2])

var proxy = new Proxy(calcu, {
  get: function(target, property, receiver) {
    if (property === 'className') {
      // Reflect 是为了替代 Object，解决 Object 不存在方式时报错的问题
      return Reflect.get(target, property, receiver)
    }
    return 'Unknown'
  }
})
proxy.xxx

calcu.addOne(1)
setTimeout(() => {
  calcu.addOne(1)
}, 900)

calcu.author // 'lyr'
CalcuModel.author // 'lyr'

const net = new NetModel()
net.getUrl('http://leiyourong.github.io').then(res => {
  console.log(res)
})

var num = {
  values: [2, 4, 6],
  curIndex: 0,
  valueOf: function() {
    return this.values[this.curIndex++]
  },
  toString: function() {
    return this.values[this.curIndex++]
  }
}

console.log(num == 2 && num == 4 && num == 6)
