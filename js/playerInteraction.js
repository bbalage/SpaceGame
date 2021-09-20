function handleInputCtx() {
    handleTurn();
    handleMove();
}

function handleTurn() {
    if (inputCtx.KeyA && inputCtx.KeyD) {
        return;
    }
    if (inputCtx.KeyA) {
        spaceship.rotate(-1);
    }
    if (inputCtx.KeyD) {
        spaceship.rotate(1);
    }
}

function handleMove () {
    if (inputCtx.KeyW && inputCtx.KeyS) {
        return;
    }
    if (inputCtx.KeyW) {
        spaceship.x -= Math.sin(spaceship.rotation) * spaceship.speed;
        spaceship.y -= Math.cos(spaceship.rotation) * spaceship.speed;
    }
    if (inputCtx.KeyS) {
        spaceship.x += Math.sin(spaceship.rotation) * spaceship.speed;
        spaceship.y += Math.cos(spaceship.rotation) * spaceship.speed;
    }
}