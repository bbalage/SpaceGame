function drawRotation(spaceShip) {
    ctx.font = "8px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("X: " + spaceship.x.toFixed(2), canvas.width - 60, 15);
    ctx.fillText("Y: " + spaceship.y.toFixed(2), canvas.width - 60, 25);
    ctx.fillText("Rotation: " + spaceShip.rotation, canvas.width - 60, 35);
}