function drawRotation(spaceShip) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Rotation: " + spaceShip.rotation, canvas.width/2-40, canvas.height / 2);
    ctx.fillText("X: " + spaceship.x.toFixed(2), canvas.width/2 - 40, canvas.height / 2 - 200);
    ctx.fillText("Y: " + spaceship.y.toFixed(2), canvas.width/2 - 40, canvas.height / 2 - 150);
}