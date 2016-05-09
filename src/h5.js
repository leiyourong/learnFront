'use strict';

var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
canvas.height = 100;
canvas.width = 160;
ctx.fillStyle='#FF0000';
ctx.fillRect(0,0,80,100);
ctx.strokeRect(80,0,80,100);

$('#btn').on('click',function(){
  var inputArr = $('input')
  inputArr.each(function(index,input){
    console.log($(input).val())
  })
  if(!localStorage.clickTime){
    localStorage.clickTime = 1
  }else{
    localStorage.clickTime = Number(localStorage.clickTime) + 1;
  }
  if(!sessionStorage.clickTime){
    sessionStorage.clickTime = 1
  }else{
    sessionStorage.clickTime = Number(sessionStorage.clickTime) + 1;
  }
})
