const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

nativeWidth = 1920;
nativeHeight = 1080;

deviceWidth = window.innerWidth;
deviceHeight = window.innerHeight;



canvas.width = deviceWidth;
canvas.height = deviceHeight;

canvas.style.width = deviceWidth + "px";
canvas.style.height = deviceHeight + "px";

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