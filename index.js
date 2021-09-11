const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
let base_image = undefined;
let should_draw = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    return null;
}
function keyUpHandler(e) {
    return null;
}
function mouseMoveHandler(e) {
    return null;
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