'use strict'
const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio')
const readline = require('readline')
const path = require('path')
let urlArray = []
let allUrlArray = []
let targetFile = ''
let num = 0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getHtml(url){
  http.get(url, function(res) {
  	var html = ''
  	res.on('data', function(data) {
  		html += data
  	})
  	res.on('end', function() {
      callback(html, url)
  	})
  })
}

function parseUrlForFileName(address) {
    var filename = path.basename(address)
    return filename
}

function getImg(url, pageUrl) {
  http.get(url, function(res) {
    var imgData = ''
    res.setEncoding('binary') //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on('data', function(chunk){
        imgData += chunk
    })
    var fileName = parseUrlForFileName(url)
    var validIndex = fileName.indexOf('!')
    if (validIndex !== -1) {
      fileName = fileName.substring(0, validIndex)
    }
    fileName = new Date().getTime() + '-' + fileName
    res.on('end', function(){
        fs.writeFile(targetFile + '/' + fileName, imgData, 'binary', function(err){
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


function callback(html, url) {
	var $ = cheerio.load(html)
	$('a').each(function(index, element) {
		var href = $(element).attr('href')
    if (/^http/.test(href) && allUrlArray.indexOf(href) === -1) {
      urlArray.push(href)
      allUrlArray.push(href)
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

function getFile() {
  rl.question('请输入目标文件夹全路径：',function(answer){
      if (!fs.existsSync(answer)) {
        fs.mkdirSync(answer)
        targetFile = answer
        console.log('文件夹创建成功！')
        getSite()
      } else {
        console.log('文件夹已存在！是否使用？（Y/N）')
        rl.on('line', function(line) {
            switch(line.trim()) {
                case 'y':
                case 'Y':
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

function getSite() {
  rl.question('请输入目标网址（http）：',function(answer){
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