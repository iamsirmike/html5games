let canvas = document.getElementById('myCanvas');

//set canvas dimension
canvas.height = window.innerHeight - 25;
canvas.width = window.innerWidth - 50;

//get canvas context
let ctx = canvas.getContext('2d');

//set circle initial position
let x = 50;
let y = 50;
//set radius
let radius = 20;
//set speed of the ball
speedx = 8;
speedy = 8;

//set position for the paddle
let paddlex = canvas.width / 2;
//dimesion of paddle
let paddleHeight = 20;
let paddleWidth = 200;
//paddle speed
let paddleSpeed = 8;

//get user pressing left and right arrow keys
let k = { ArrowLeft: 0, ArrouwRight: 0 };
onkeydown = d => (k[d.key] = 1);
onkeyup = d => (k[d.key] = 0);

//moving the paddle

function paddle() {
	ctx.fillStyle = 'red';
    ctx.fillRect(paddlex, canvas.height - 25, paddleWidth, paddleHeight);
    
    //moving the paddle
    if (k.ArrowRight == 1 && paddlex + paddleHeight + paddleSpeed < canvas.width - 150) {
		paddlex += paddleSpeed;
	}
	if (k.ArrowLeft == 1 && paddlex - paddleSpeed > 0) {
		paddlex -= paddleSpeed;
	}
}


function circle() {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = 'red';
	ctx.stroke();
	ctx.fillStyle = 'cyan';
	ctx.fill();

	//move ball
	moveball();
}

function moveball() {
	if (x + radius > canvas.width || x - radius < 0) {
		speedx = -speedx;
	}
	x += speedx;
	if (y + radius > canvas.height- 25 && (x > paddlex && x < paddlex + paddleWidth) || y - radius < 0) {
		speedy = -speedy;
	}
	y += speedy;
}

function animate() {
	//animation method
	requestAnimationFrame(animate);

	//clear entire screen
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw circle
    circle();
    paddle();
}
animate();
