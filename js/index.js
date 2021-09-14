function init () {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
}

function keyDownHandler(e) {
    inputCtx[e.code] = true;
}
function keyUpHandler(e) {
    inputCtx[e.code] = false;
}
function mouseMoveHandler(e) {
    return null;
}

function draw() {
    ctx.drawImage(spaceship.sprite, spaceship.x, spaceship.y, 29, 21.5);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(loop);
}

init();
loop();