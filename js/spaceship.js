class Spaceship {

    static elementaryTurn = 2;

    constructor(spaceshipDesc) {
        this.mass = 10;
        this.thrusterForce = 1;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.width = 639 * 0.1;
        this.height = 787 * 0.1;
        this.rotation = 0;
        this.acceleration = this.thrusterForce / this.mass;
        this.xspeed = 0;
        this.yspeed = 0;
        this.sprite = new Image();
        this.sprite.src = "img/spaceship.png";
        this.hitBoxIntervals = []
        this.extractHitBoxIntervals(spaceshipDesc);
    }

    extractHitBoxIntervals(spaceshipDesc) {
        const hitBoxIntervals = spaceshipDesc.hitBoxIntervals;
        for (let i = 0; i < hitBoxIntervals.length; i++) {
            const hitBoxes = this.extractHitBoxes(hitBoxIntervals[i].hitBoxes);
            this.hitBoxIntervals.push({
                "start": hitBoxIntervals[i].start,
                "end": hitBoxIntervals[i].end,
                "hitBoxes": hitBoxes
            });
        }
    }

    extractHitBoxes(hitBoxes) {
        const hitBoxObjects = []
        for (let i = 0; i < hitBoxes.length; i++) {
            let hitBox = new HitBoxUtils(
                hitBoxes[i].x,
                hitBoxes[i].y,
                hitBoxes[i].width,
                hitBoxes[i].height
            )
            hitBoxObjects.push(
                hitBox
            )
        }
        return hitBoxObjects;
    }

    /**
     * Change the rotation member clockwise or anti-clockwise by elementaryTurn.
     *
     * @param direction if lower than zero, turn anti-clockwise, otherwise, turn clockwise.
     */
    rotate(direction) {
        this.rotation += direction > 0 ? Spaceship.elementaryTurn : -Spaceship.elementaryTurn;
        if (this.rotation >= 360) {
            this.rotation -= 360;
        }
        if (this.rotation < 0) {
            this.rotation += 360;
        }
    }

    //TODO: Move functions that move the spaceship here!


}

const spaceship = new Spaceship(spaceshipDesc);