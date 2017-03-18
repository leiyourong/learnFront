const http = require('http')
const https = require('https')

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
    if (!Array.isArray(urlArr)) {
      urlArr = [urlArr]
    }

    return urlArr.map((url, index) => {
      return this.getHtml(url)
    })
  }
}
