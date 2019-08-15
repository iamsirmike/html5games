let canvas = document.getElementById('myCanvas');

//set canvas dimension
canvas.height = window.innerHeight - 25;
canvas.width = window.innerWidth - 50;

//get canvas context
let ctx = canvas.getContext('2d');

//draw square
ctx.fillStyle = 'red';
ctx.fillRect(800, 200, 80, 80);

//draw a circle
ctx.beginPath();
ctx.arc(500, 200, 80, 0, Math.PI * 2, false);
ctx.strokeStyle = 'cyan';
ctx.stroke();

//triangle
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.lineTo(100, 100);
ctx.stroke();
