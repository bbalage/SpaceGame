const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
const canvasCenter = {
    x: canvas.width / 2, y: canvas.height / 2
}
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