class Scene {

    constructor(canvas, ctx, camera, spaceship, asteroid) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.camera = camera;
        this.spaceship = spaceship;
        this.asteroid = asteroid;
        this.canvasLogger = new CanvasLogger();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasLogger.draw(this.ctx, this.canvas, this.spaceship, this.camera, this.asteroid);
        this.#drawSpaceship();
        this.#drawAsteroids();
        this.asteroid.rotate(1);
        this.asteroid.moveAsteroid();
    }

    #drawSpaceship() {
        this.camera.follow(this.spaceship);
        const spaceshipLocal = this.camera.toCameraView(this.spaceship);
        const spaceshipCenter = {
            x: spaceshipLocal.x + this.spaceship.width / 2,
            y: spaceshipLocal.y + this.spaceship.height / 2
        }
        this.ctx.save();
        this.ctx.translate(spaceshipCenter.x, spaceshipCenter.y);
        this.ctx.rotate(this.spaceship.rotation*Math.PI/180);
        this.ctx.translate(-spaceshipCenter.x, -spaceshipCenter.y);
        this.ctx.drawImage(
            this.spaceship.sprite,
            spaceshipLocal.x,
            spaceshipLocal.y,
            this.spaceship.width,
            this.spaceship.height
        );
        this.ctx.restore();
    }
    #drawAsteroids() {

            const asteroidLocal = this.camera.toCameraView(this.asteroid);
            const asteroidCenter = {
                x: asteroidLocal.x + this.asteroid.width / 2 ,
                y: asteroidLocal.y + this.asteroid.height / 2
            }
            this.ctx.save();
            this.ctx.translate(asteroidCenter.x, asteroidCenter.y);
            this.ctx.rotate(this.asteroid.rotation*Math.PI/180);
            this.ctx.translate(-asteroidCenter.x, -asteroidCenter.y);
            this.ctx.drawImage(
                this.asteroid.sprite,
                asteroidLocal.x,
                asteroidLocal.y,
                this.asteroid.width,
                this.asteroid.height
            );
            this.ctx.restore();
    }

    handleInputCtx(inputCtx) {
        this.#handleTurn(inputCtx);
        this.#handleMove(inputCtx);
        this.spaceship.moveSpaceship();
    }

    #handleTurn(inputCtx) {
        if (inputCtx.KeyA && inputCtx.KeyD) {
            return;
        }
        if (inputCtx.KeyA) {
            this.spaceship.rotate(-1);
        }
        if (inputCtx.KeyD) {
            this.spaceship.rotate(1);
        }
    }

    #handleMove (inputCtx) {
        if (inputCtx.KeyW && inputCtx.KeyS) {
            return;
        }
        if (inputCtx.KeyW) {
            this.spaceship.xspeed += Math.sin(this.spaceship.rotation * Math.PI / 180) * this.spaceship.acceleration
            this.spaceship.yspeed -= Math.cos(this.spaceship.rotation*Math.PI/180) * this.spaceship.acceleration;
        }
        if (inputCtx.KeyS) {
            this.spaceship.xspeed -= Math.sin(this.spaceship.rotation*Math.PI/180) * this.spaceship.acceleration;
            this.spaceship.yspeed += Math.cos(this.spaceship.rotation*Math.PI/180) * this.spaceship.acceleration;
        }
    }
}