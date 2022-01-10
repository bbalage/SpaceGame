const game = new Game();
game.init(descriptors);

function gameLoop() {
    game.loopIteration(inputCtx);
    requestAnimationFrame(gameLoop);
}

gameLoop();
