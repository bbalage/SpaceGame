function drawRotation(spaceShip) {
    ctx.font = "8px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("X: " + spaceship.x + ", Y: " + spaceship.y, canvas.width-65, 10);
    ctx.fillText("Rotation: " + spaceShip.rotation, canvas.width-65, 20);
}