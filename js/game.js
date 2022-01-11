class Game {

    constructor() {
        this.scene = null;
    }

    init(descriptors) {
        const canvas = document.getElementById("c");
        const ctx = canvas.getContext("2d");

        let deviceWidth = window.innerWidth;
        let deviceHeight = window.innerHeight;

        canvas.width = deviceWidth;
        canvas.height = deviceHeight;

        canvas.style.width = deviceWidth + "px";
        canvas.style.height = deviceHeight + "px";

        ctx.imageSmoothingEnabled = false;

        const canvasCenter = {
            x: canvas.width / 2, y: canvas.height / 2
        }

        const padding = 10;
        const container = new HitBoxIntervalContainer(descriptors.spaceship.hitBoxIntervals)
        const spaceship = new Spaceship(container, canvasCenter.x, canvasCenter.y);
        const camera = new Camera(0, 0, canvas.width, canvas.height, padding);
        this.scene = new Scene(canvas, ctx, camera, spaceship);

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
    }

    loopIteration(inputCtx) {
        this.scene.handleInputCtx(inputCtx);
        this.scene.draw();
    }
}