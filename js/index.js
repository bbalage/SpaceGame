

scaleFillNative = Math.max(deviceWidth / nativeWidth, deviceHeight / nativeHeight);

ctx.setTransform(
    scaleFillNative,0,
    0,scaleFillNative,
    Math.floor(deviceWidth/2),
    Math.floor(deviceHeight/2)
);

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
    const spaceshipCenter = {
        x: spaceship.x + spaceship.width / 2,
        y: spaceship.y + spaceship.height / 2
    }
    ctx.save();
    ctx.translate(spaceshipCenter.x, spaceshipCenter.y);
    ctx.rotate(spaceship.rotation*Math.PI/180);
    ctx.translate(-spaceshipCenter.x, -spaceshipCenter.y);
    ctx.drawImage(spaceship.sprite, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
    ctx.restore();
}

function loop() {
    handleInputCtx();
    ctx.clearRect(-800, -600, nativeWidth, nativeHeight);
    draw();
    requestAnimationFrame(loop);
}

init();
loop();