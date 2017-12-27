var chai = require('chai')
var expect = chai.expect
var sinonChai = require('sinon-chai')
chai.use(sinonChai)
var sinon = window.sinon
var http=require('http')
var foo = { bar: 'baz' }

describe('Array', function(){
  describe('#indexOf()', function(){
    before(function(){
      console.log('before')
    })
    beforeEach(function(){
      console.log('beforEach')
    })
    it('should return -when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1)
      // 相等或不相等
      expect(4 + 5).to.equal(9)
      expect(4 + 5).to.not.equal(10)
      expect(foo).to.deep.equal({ bar: 'baz' })
      expect('foo').to.have.length(3)

      // 布尔值为true
      expect('everthing').to.be.ok
      expect(false).to.not.be.ok
      expect(foo.bar).to.be.ok

      // typeof
      expect('test').to.be.a('string')
      expect({ foo: 'bar' }).to.be.an('object')
      expect(Array).to.be.an.instanceof(Object)

      // include
      expect([1,2,3]).to.include(2)
      expect('foobar').to.contain('foo')
      expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo')
      expect({ foo: 'bar', hello: 'universe' }).to.have.all.keys('foo','hello')
      expect({ foo: 'bar', hello: 'universe' }).to.have.any.keys('foo')
      expect({ tea: [ 'chai', 'matcha', 'oolong' ] }).to.have.property('tea').with.length(3)

      // empty
      expect([]).to.be.empty
      expect('').to.be.empty
      expect({}).to.be.empty

      // match
      expect('foobar').to.match(/^foo/)
    })
    it('should not return -when the value is present', function(){
      expect([1,2,3].indexOf(2)).to.not.equal(-1)
    })



  })
})
import jquery from 'jquery'
describe('测试Sinon', function () {
  it('测试Stub-ajax', () => {
    let stub = sinon.stub(jquery, 'ajax')
    stub.returns(10)
    stub.withArgs(2,3)
      .onFirstCall().returns(1)
      .onSecondCall().returns(2)

    expect(jquery.ajax(1, 2)).to.equal(10)
    expect(jquery.ajax(2, 3)).to.equal(1)
    expect(jquery.ajax(2, 3)).to.equal(2)
    stub.restore()

    // 指定 jquery.ajax的总是走 fail, 并且入参为 0
    sinon.stub(jquery, 'ajax').yieldsTo('fail', 0)
    const asyncFunc = callback => {
      jquery.ajax({
        type: 'GET',
        url: 'http://localhost:9876',
        success: data => {
          callback('success:' + data)
        },
        fail: data => {
          callback('fail:' + data)
        }
      })
    }
    const callback = data => {
      expect(data).to.equal('fail:0')
    }

    asyncFunc(callback)
  })
})


describe('测试Sinon', function () {
  let func

  before(() => {
    func = {
      add (a, b) {
        return a + b
      },
      divide (a, b) {
        return a / b
      }
    }
  })

  it('测试spy', () => {
    const spyAdd = sinon.spy(func, 'add')
    const spyDiv = sinon.spy(func, 'divide')
    // 开始调用
    func.add(1, 2)
    func.add(2, 3)
    func.divide(4, 2)

    // 获取第一次调用对象
    const firCall = spyAdd.getCall(0)
    // 调用对象信息
    expect(firCall.returnValue).to.equal(3)
    expect(firCall.args.length).to.equal(2)
    // 单个方法的调用情况
    expect(spyAdd).to.have.been.calledTwice
    // 两个方法之间的调用顺序关系
    expect(spyAdd.calledBefore(spyDiv)).to.equal(true)
    // 回收 spy，否则任何监视 func.add 都会报错，两个 spy/stub 不能同时监视一个方法
    spyAdd.restore()
  })
})

describe('测试Sinon', function () {
  let func

  before(() => {
    func = {
      add (a, b) {
        return a + b
      },
      divide (a, b) {
        return a / b
      }
    }
  })

  it('测试mock', () => {
    const mockAdd = sinon.mock(func)
    const mockDivide = sinon.mock(func)

    mockAdd.expects('add').atLeast(1).atMost(2).withArgs(1, 2)
    mockDivide.expects('divide').never()

    // 开始调用 dosomething
    func.add(1, 2)
    func.add(1, 2)

    mockAdd.verify()
    mockDivide.verify()
  })
})

function mapsh(id){
  console.log(Object.keys(foo))
  return id+1
}
var fooArr = []
fooArr.push({ bar: 'baz' })
describe("sinon spy obj-method", function () {
  it("should show this caller", function () {
    var spy = sinon.spy(Object,'keys')
    mapsh(1)
    console.log('-----------------------第一次----------------------')
    expect(spy.getCall(0).args).to.eql(fooArr) //[{ bar: 'baz' }]
    expect([{ bar: 'baz' }]).to.eql([{ bar: 'baz' }]) //[{ bar: 'baz' }]
    console.log(spy.withArgs({ bar: 'baz' }).calledOnce)
    Object.keys.restore()
  })
})
describe("sinon spy func", function () {
  it("should show this caller", function () {
    var spy = sinon.spy(mapsh)
    spy(1)
    console.log('-----------------------第二次----------------------')
    console.log(spy.calledOnce)
    console.log(spy.getCall(0).args)
    console.log(spy.getCall(0).returnValue)
  })
})


describe("sinon spy", function () {
  it("should show this caller", function () {
    console.log('-----------------------第三次----------------------')
    // Event.on(xxx,spy) 在Event.emit时 spy得到调用信息
  })
})

describe("sinon stub", function () {
  //basic usage
  var obj = {
    multiply: function (a, b) { return a * b },
    error: function (msg) { throw new Error(msg) }
  }

  it("stubs multiply", function () {
    // Stub with a hard-coded return value.
    sinon.stub(obj, "multiply").returns(5)
    expect(obj.multiply(1, 2)).to.equal(5)
    obj.multiply.restore()

    // Stub with a function.
    sinon.stub(obj, "multiply", function (a, b) {
      return a + b
    })
    expect(obj.multiply(1, 2)).to.equal(3)
    obj.multiply.restore()
  })

  it("stubs error", sinon.test(function () {
    this.stub(obj, "error")
    expect(obj.error).to.not.throw()
  }))


  //use yieldsTo
  it("stubs with yieldsTo", function () {
    var obj = {
      async: function (opts) {
        opts.failure("a", "b")
      }
    },
    spyObj = {
      failure: sinon.spy(),
      success: sinon.spy()
    }

    sinon.stub(obj, "async").yieldsTo("success", 1, 2)

    // Call on object with callback spies.
    obj.async(spyObj)

    expect(spyObj.failure).to.have.not.have.been.called
    expect(spyObj.success)
    .to.have.been.calledOnce.and
    .to.have.been.calledWith(1, 2)
  })
})

describe("Sinon.JS mocks", function () {
  // Object literal with two methods.
  var obj = {
    multiply: function (a, b) { return a * b },
    error: function (msg) { throw new Error(msg) }
  }

  it("mocks multiply", function () {
    // Create the mock.
    var mock = sinon.mock(obj)

    // The multiply method is expected to be called:
    mock.expects("multiply")
    .atLeast(2)    // 2+ times,
    .atMost(4)     // no more than times, and
    .withArgs(2) // was first arg on *all* calls.
    // Make calls to `multiply()`.
    obj.multiply(2, 1)

    obj.multiply(2, 0)
    obj.multiply(2, 3)

    // Verify **all** of the previous expectations.
    mock.verify()

    // Restore the object.
    mock.restore()
  })

})

function throttle(callback) {
  var timer
  return function () {
    clearTimeout(timer)
    var args = [].slice.call(arguments)
    timer = setTimeout(function () {
      callback.apply(this, args)
    }, 10000)
  }
}
describe("fake timer", function () {
  var clock
  before(function () { clock = sinon.useFakeTimers() })
  after(function () { clock.restore() })
  it("calls callback after 100ms", function () {
    var callback = sinon.spy()
    var throttled = throttle(callback)

    throttled()

    clock.tick(9999)
    expect(callback.notCalled).to.be.ok

    clock.tick(2)
    expect(callback.calledOnce).to.be.ok
    // Also:
    // assert.equals(new Date().getTime(), 100)
  })

})

describe("fake server", function () {
  before(function () {
    this.server = sinon.fakeServer.create()
    // autoRespond:true}
  })
  beforeEach(() => {
    sinon.stub(window, 'fetch')
    var res = new window.Response('{"hello":"world"}', {
      status: 200,
      headers: {
        'Content-type': 'application/json'
      }
    })
    window.fetch.returns(Promise.resolve(res))
  })

  afterEach(() => {
    window.fetch.restore()
  })
  after(function () {
    this.server.restore()
  })
  it("xxxxxx", function (done) {
    var callback = sinon.spy()
    this.server.respondWith("haha")
    /*  this.server.respondWith("get", "some/article/comments",
    [200, { "Content-Type": "application/json" },
    '[{ "id": 12, "comment": "Hey there" }]'])
    http.get("some/article/comments", callback)
    http.get("some/article/comments", function(data){
    console.log(data)
    done()
  }).on('error', function(e) {
  console.log("Got error: " + e.message)
})
*/

window.fetch('some/article/comments').then(function(data){
  console.log(data)
  done()
})
this.server.respond()
})

})
