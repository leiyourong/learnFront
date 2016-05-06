'use strict';

var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
canvas.height = 100;
canvas.width = 160;
ctx.fillStyle='#FF0000';
ctx.fillRect(0,0,80,100);
ctx.strokeRect(80,0,80,100);
