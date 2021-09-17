function handleInputCtx() {
    handleTurn();
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