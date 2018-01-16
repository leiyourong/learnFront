/**
 * @author leiyourong <460951178@qq.com>
 * @description 一个小爬虫
 */

const http = require('http')
const https = require('https')
const fs = require('fs')
/**
 * @description node版的jQuery
 */
const cheerio = require('cheerio')
const readline = require('readline')
const path = require('path')

/**
 * @description 当前页的url数组缓存
 * @type {Array}
 */
let urlArray = []

/**
 * @description 全部页的url数组缓存
 * @type {Array}
 */
let allUrlArray = []

/**
 * @description 目标文件路径
 * @type {String}
 */
let targetFile = ''

/**
 * @description 搜索次数
 * @type {Number}
 * @class Object pachong
 */
let num = 0

/**
 * @memberof num
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * @description 获取目标网页的html
 * @param {string} url 请求的路径
 */
function getHtml(url) {
  var protocol
  if (/^https/.test(url)) {
    protocol = https
  } else {
    protocol = http
  }
  protocol.get(url, function(res) {
    var html = ''
    res.on('data', function(data) {
      html += data
    })
    res.on('end', function() {
      callback(html, url)
    })
  })
}

/**
 * @description 获取目标地址的文件名
 * @param {string} address 请求的路径
 * @returns {string}
 */
function parseUrlForFileName(address) {
  var filename = path.basename(address)
  return filename
}

/**
 * @description 拉取目标地址图片
 * @param {string} url 目标地址
 */
function getImg(url) {
  var protocol
  if (/^https/.test(url)) {
    protocol = https
  } else {
    protocol = http
  }
  protocol.get(url, function(res) {
    var imgData = ''
    res.setEncoding('binary') //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on('data', function(chunk) {
      imgData += chunk
    })
    var fileName = parseUrlForFileName(url)
    var validIndex = fileName.indexOf('!')
    if (validIndex !== -1) {
      fileName = fileName.substring(0, validIndex)
    }
    fileName = new Date().getTime() + '-' + fileName
    if (fileName.indexOf('.jpg') === -1 && fileName.indexOf('.png') === -1 && fileName.indexOf('.gif') === -1) {
      fileName += '.jpg'
    }
    res.on('end', function() {
      fs.writeFile(targetFile + '/' + fileName, imgData, 'binary', function(err) {
        if (err) {
          console.log(err)
          return false
        }
        console.log(num + '-down success' + fileName)
        num++
      })
    })
  })
}

/**
 * @description 回调函数，为了抓取url
 * @param {string} url 当前地址
 * @param {string} html 网页内容
 */
function callback(html, url) {
  var $ = cheerio.load(html)
  $('a').each(function(index, element) {
    var href = $(element).attr('href')
    if (/^http/.test(href) && allUrlArray.indexOf(href) === -1) {
      urlArray.push(href)
      allUrlArray.push(href)
    }
    if (/^\//.test(href)) {
      href = url + href
      if (allUrlArray.indexOf(href) === -1) {
        urlArray.push(href)
        allUrlArray.push(href)
      }
    }
  })
  $('img').each(function(index, element) {
    var src = $(element).attr('src')
    if (/^http/.test(src)) {
      getImg(src, url)
    }
  })
  var nextUrl = urlArray.shift()
  if (nextUrl) {
    getHtml(nextUrl)
  } else {
    console.log('没啦！')
  }

}

/**
 * @description 创建文件
 */
function getFile() {
  rl.question('请输入目标文件夹全路径：', function(answer) {
    if (!fs.existsSync(answer)) {
      fs.mkdirSync(answer)
      targetFile = answer
      console.log('文件夹创建成功！')
      getSite()
    } else {
      console.log('文件夹已存在！是否清空？（Y/N）')
      rl.on('line', function(line) {
        switch (line.trim()) {
          case 'y':
          case 'Y':
            deleteFile(answer)
          case 'n':
          case 'N':
            targetFile = answer
            getSite()
            break
          default:
            getFile()
            break
        }
      })
    }
  })
}
getFile()

/**
 * @description 删除目标
 */
function deleteFile(path) {
  var files = fs.readdirSync(path)
  files.forEach(function(file) {
    var stats = fs.statSync(path + '/' + file)
    if (stats.isDirectory()) {
      deleteFile(path + '/' + file)
    } else {
      fs.unlinkSync(path + '/' + file)
      console.log("删除文件" + path + '/' + file + "成功")
    }
  })
}

/**
 * @description 获取网站内容
 */
function getSite() {
  rl.question('请输入目标网址（http）：', function(answer) {
    if (!/^http/.test(answer)) {
      console.log('输入不正确')
      getSite()
    } else {
      // getHtml('http://www.tuicool.com/articles/AjmQFrJ')
      getHtml(answer)
      rl.close()
    }
  })
}
