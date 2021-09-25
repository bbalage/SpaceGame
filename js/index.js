ctx.imageSmoothingEnabled = false;

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
    camera.follow();
    const spaceshipLocal = camera.toCameraView(spaceship);
    // console.log(spaceshipLocal)
    const spaceshipCenter = {
        x: spaceshipLocal.x + spaceship.width / 2,
        y: spaceshipLocal.y + spaceship.height / 2
    }
    ctx.save();
    ctx.translate(spaceshipCenter.x, spaceshipCenter.y);
    ctx.rotate(spaceship.rotation*Math.PI/180);
    ctx.translate(-spaceshipCenter.x, -spaceshipCenter.y);
    ctx.drawImage(spaceship.sprite, spaceshipLocal.x, spaceshipLocal.y, spaceship.width, spaceship.height);
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