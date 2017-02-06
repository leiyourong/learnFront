var chai = require('chai')
var expect = chai.expect
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var sinon = window.sinon

var demo = require('../src/mochademo/index')

describe('add', function(){
  var add = demo.add
  expect(add(1, 2)).to.equal(3)
  expect(add(1, '2')).to.equal('error')
})
