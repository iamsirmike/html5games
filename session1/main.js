let canvas = document.getElementById('myCanvas');

//set canvas dimension
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//set canvas context
let ctx = canvas.getContext('2d');

//draw some objects

//draw a square
ctx.fillStyle = 'red';
ctx.fillRect(600,100,50,50);

//draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(900,200,120,80);

//draw a line
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(100,300);
// ctx.stroke();

//draw a triangle
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,300);
ctx.lineTo(300,300);
ctx.closePath();
ctx.strokeStyle = 'violet';
ctx.stroke();
ctx.fillStyle = 'cyan';
ctx.fill();

//draw a circle
ctx.beginPath();
ctx.arc(600,400,60,0,Math.PI*2, false);
ctx.stroke();
