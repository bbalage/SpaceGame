function drawRotation(spaceShip) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Rotation: " + spaceShip.rotation, canvas.width * 0.8, canvas.height * 0.1);
    ctx.fillText("X: " + spaceship.x.toFixed(2), canvas.width * 0.8, canvas.height * 0.15);
    ctx.fillText("Y: " + spaceship.y.toFixed(2), canvas.width * 0.8, canvas.height * 0.2);
}