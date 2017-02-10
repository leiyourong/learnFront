var chai = require('chai')
var expect = chai.expect
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var sinon = window.sinon

var demo = require('../src/mochademo/index')

describe('add', function(){
  var add = demo.add
  it('1 加 2 应该等于 3', function() {
    expect(add(1, 2)).to.equal(3)
  })

  
  it('1 加 "2" 应该返回error', function() {
    expect(add(1, '2')).to.equal('error')
  })
})



describe('getHtml/multiGetHtml', function(){
  var httpUrl = 'http://www.qq.com'
  var httpsUrl = 'https://www.tieba.com'
  var urls = ['http://www.qq.com', 'http://www.qq.com', 'http://www.qq.com']
  var getHtml = demo.getHtml
  var http = require('http')
  var https = require('https')
  it('getHtml httpUrl', function() {
    sinon.stub(http, 'get').returns(2)
    expect(getHtml(httpUrl)).to.equal(2)
  })
  it('getHtml httpsUrl', function() {
    sinon.stub(https, 'get', function(){
      return 1 + 2
    })
    expect(getHtml(httpsUrl)).to.equal(3)
  })
  it('multiGetHtml', function() {
    var res = demo.multiGetHtml(urls)
    expect(res).to.equal(3)
  })
})
