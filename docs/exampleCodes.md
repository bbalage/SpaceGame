```
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var lives = 3;
var base_image = undefined;
var should_draw = false;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
if(e.key === "Right" || e.key === "ArrowRight") {
rightPressed = true;
}
else if(e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = true;
}
}

function keyUpHandler(e) {
if(e.key === "Right" || e.key === "ArrowRight") {
rightPressed = false;
}
else if(e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = false;
}

}
function mouseMoveHandler(e) {
var relativeX = e.clientX - canvas.offsetLeft;
if(relativeX > 0 && relativeX < canvas.width) {
paddleX = relativeX - paddleWidth/2;
}
}

function drawBall() {
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function drawBricks() {
ctx.beginPath();
ctx.rect(0, 0, brickWidth, brickHeight);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function drawLives() {
ctx.font = "16px Arial";
ctx.fillStyle = "#0095DD";
ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw_images() {
    if (should_draw) {
        ctx.drawImage(base_image, 0, 0, 29, 21.5);
    }
}

function load_image(path)
{
    base_image = new Image();
    base_image.src = path;
    base_image.onload = function(){
        should_draw = true;
    }
}

load_image('img/spaceship.png');

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_images();
    requestAnimationFrame(loop);
}

loop();
```

Code for rotating:
```
ctx.save();
ctx.translate(canvas.width/2,canvas.height/2);
ctx.rotate(270*Math.PI/180);
//draw here ...
ctx.restore();
```