import CalcuModel from './calcuModel'

const calcu = new CalcuModel('TestCalcu')

calcu.add(1, 2) // 3
calcu.del(1, 2) // -1
calcu.getName() // TestCalcu
calcu.alias = 'Test'
calcu.getName()

calcu.diff([1, 2, 4, 1, 2])

var proxy = new Proxy(calcu, {
  get: function(target, property, receiver) {
    console.log(target)
    console.log(property)
    return target[property] || '-'
  }
})

proxy.xxx
