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
    drawRotation(spaceship);
    drawSpaceship(spaceship);
}

function drawSpaceship(spaceship) {
    ctx.save();
    const spaceshipCenter = {
        x: spaceship.x + spaceship.width / 2,
        y: spaceship.y + spaceship.height / 2
    }
    ctx.translate(canvasCenter.x - spaceshipCenter.x, canvasCenter.y - spaceshipCenter.y);
    ctx.rotate(spaceship.rotation*Math.PI/180);
    ctx.drawImage(spaceship.sprite, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
    ctx.restore();
}

function loop() {
    handleInputCtx();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(loop);
}

init();
loop();