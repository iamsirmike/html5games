let canvas = document.getElementById('myCanvas');

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

function animate() {
	//request animation frame to enable us to add animations
	requestAnimationFrame(animate);

	//clear all the path
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	//draw our ball
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'red';
	ctx.stroke();
	ctx.fillStyle = 'cyan';
	ctx.fill();

	//moving the ball
	if (x + radius > innerWidth || x - radius < 0) {
		speedx = -speedx;
	}
	x += speedx;

	if (y + radius > innerHeight || y - radius < 0) {
		speedy = -speedy;
	}
	y += speedy;
}
animate();
