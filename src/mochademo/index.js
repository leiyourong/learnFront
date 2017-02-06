const http = require('http')
const https = require('https')
this
module.exports = {
  add: (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
    return 'error'
  },
  getHtml: url => {
    let protocol
    if (/^https/.test(url)) {
      protocol = https
    } else {
      protocol = http
    }
    return protocol.get(url)
  },
  multiGetHtml: function(urlArr) {
    console.log(this)
    if (typeof urlArr !== 'array') {
      urlArr = [urlArr]
    }
    return urlArr.map((url, index) => {
      if(index > 3)
        return
      return this.getHtml(url)
    })
  }
}
