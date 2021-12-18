const inputCtx = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Space: false,
    ShiftLeft: false,
    Tab: false,
    KeyF: false,
    Escape: false
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
