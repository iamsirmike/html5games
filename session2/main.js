let canvas = document.getElementById('myCanvas');
let start = document.getElementById('start').addEventListener('click', mystart);


//set canvas dimension
canvas.height = window.innerHeight - 50;
canvas.width = window.innerWidth;

//set canvas context
let ctx = canvas.getContext('2d');

//initial position for the circle
let x = 50;
let y = 50;

//radius of the circle
let radius = 20;

//set ball speed
let speedx = 8;
let speedy = 8;

function drawcircle() {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'red';
	ctx.stroke();
	ctx.fillStyle = 'cyan';
	ctx.fill();
}
drawcircle();


function bounceball() {
	if (x + radius > canvas.width || x - radius < 0) {
		speedx = -speedx;
	}
	x += speedx;
	if (y + radius > canvas.height || y - radius < 0) {
		speedy = -speedy;
	}
	y += speedy;
}

function animate() {
	//request animation frame to enable us to add animations
	requestAnimationFrame(animate);

	//clear all the path
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	//draw our ball
	drawcircle();

	//moving the ball
	bounceball();
}

function mystart() {
	drawcircle();
	animate();
}
