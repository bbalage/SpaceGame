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
        spaceship.xspeed += Math.sin(spaceship.rotation * Math.PI / 180) * spaceship.inertia
        spaceship.yspeed -= Math.cos(spaceship.rotation*Math.PI/180) * spaceship.inertia;
        //spaceship.x += Math.sin(spaceship.rotation*Math.PI/180) * spaceship.speed;
        //spaceship.y -= Math.cos(spaceship.rotation*Math.PI/180) * spaceship.speed;
    }
    if (inputCtx.KeyS) {
        spaceship.xspeed -= Math.sin(spaceship.rotation*Math.PI/180) * spaceship.inertia;
        spaceship.yspeed += Math.cos(spaceship.rotation*Math.PI/180) * spaceship.inertia;
        //spaceship.x -= Math.sin(spaceship.rotation*Math.PI/180) * spaceship.speed;
        //spaceship.y += Math.cos(spaceship.rotation*Math.PI/180) * spaceship.speed;
    }
}

function moveSpaceship() {
    spaceship.x += spaceship.xspeed;
    spaceship.y += spaceship.yspeed;
}