const game = new Game();
game.init();

function gameLoop() {
    game.loopIteration(inputCtx);
    requestAnimationFrame(gameLoop);
}

gameLoop();