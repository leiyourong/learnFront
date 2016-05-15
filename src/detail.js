'use strict';

import p from '../my_module/log';
var mycss = require("../public/css/b-gray")
var handlebars = require('handlebars/runtime')
var mongoose = require('mongoose')

handlebars.registerHelper('print',function(item1,item2,options){
  console.log(options.fn(this))
  return '<div>'+item1+'_'+item2+'</div>'
})

handlebars.registerHelper('print2',function(item1,options){
  return item1
})
handlebars.registerHelper('addone',function(index){
  return index+1;
})
document.write("<div class={mycss.h1}>Hello Front!</div>")
var img1 = document.createElement("img");
img1.src = require('../public/image/small.jpg');
document.body.appendChild(img1);
var content = {
    barInfo : '<h1>Handlebars</h1>',
    autoInfo : {
        name : '<h1>LYRRR</h1>'
    },
    pro:[
        {lang:'C++ ',grade:1},
        {lang:'JAVA ',grade:100,learner:[{name:'li'},{name:'lei'}]},
        {lang:'PHP ',grade:0},
      ],
    error:'list不存在'
};
var ele = require('../handlebars/content.handlebars')(content);
$('body').append(ele);

function saveUsed(){
    //解构赋值
    var [x,y] = [1,3];
    p(x);p(y);
    //字符串的扩展方法-双字符
    var arr = '1dde𠮷ehf';
    for(let item of arr){
        p(item);
    }
    //字符串的扩展方法-字符串模版
    var name = "lei";
    var str = `${name} is so cool`;
    p(str);
    //rest参数
    function add(...values) {
        let sum = 0;
        for (var val of values) {
            sum += val;
        }
        return sum;
    }
    p(add(2, 5, 3,12)); // 10
    //...扩展运算符(与rest相反)
    let ar = [2,3];
    p([1,...ar]);
    //Symbol
    let sym = Symbol.for("value1");
    var a = {};
    Object.defineProperty(a,sym,{value:'123'})
    p(a[sym]);//123
    p(Symbol.keyFor(sym));//value1
    //代理
    var arr = [1,2];
    var arrHandler = {
        get : function(target,property){
            return 'tt';
        },
        set: function(target, name, value, receiver) {
                var success = Reflect.set(target,name, value, receiver);
                if (success) {

                    p('property ' + name + ' on ' + target + ' set to ' + value);
                    p(target);
                    p(receiver);
                }else{
                    p('sorry');
                }
                return success;
        },
        deleteProperty(target, key) {
                p("can't delete "+key);
                return key;
        },
        has : p('way to has'),
    }
    var arrProxy = new Proxy(arr,arrHandler);
    p(arrProxy[0]);
    arrProxy.length=12;
    delete arrProxy[0];
    p('1' in arrProxy);

    var func = function(x,y){
        return (x+y);
    }
    var funcHandler = {
        apply:function(target,property){
            p(target);
        }
    }
    var funcProxy = new Proxy(func,funcHandler);
    funcProxy(1,2);
    //set/map
    var set = new Set([1]);
    set.add('1');
    p(set.size)
    var map = new Map();
    var obj = {'name':'key'};
    map.set(obj,"testMap");
    p(map.get(obj));
    //Iterator
    var obj = {
      0:'a',
      1:'b',
      length:2
    };
    obj[Symbol.iterator]= Array.prototype[Symbol.iterator]
    for(let x of obj){
        if(x === 'b') return
        p(x)
    }
    //Generator函数
    function* objectEntries(obj) {
      var propKeys = Reflect.ownKeys(obj);
      for (let propKey of propKeys) {
         yield [propKey, obj[propKey]];
      }
    }
    let jane = { first: 'Jane', last: 'Doe' };
    for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
    }
    //Promise
    var obj = {
       then : function(){
           p('obj')
       }
    }
    var px1 = Promise.resolve({name:"123"});
    px1.then(function(data){
            p("1"+data.name)
    })
    var px2 = Promise.resolve(px1);
    px2.then(function(data){
            p(data)
    })
    var px3 = Promise.resolve(obj);
    var px4 = Promise.resolve();
    px4.then(function(){
        console.log('px4')
    })
    //thunkify
     function f(a, b, callback){
        var sum = a + b;
        callback(sum);
        callback(sum);
    }

    var ft = thunkify(f);
    var print = data => p(data);
    f(1,2,print);
    ft(1, 2)(print);
    //class
    class A {
        get type(){
            return this.t;
        }
        set type(type){
            this.t = type;
        }
    }

    class B extends A {
    }
    var a = new A();
    a.type = 'test';
    p(a.type);
    /*export/import
    export default function(){

    }
    import xxxx from 'xxxx'
    */
}
