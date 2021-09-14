class Spaceship {

    static elementaryTurn = 5;
    static turnSlowerFactor = 2;
    constructor() {
        this.x = 10;
        this.y = 10;
        this.rotate = 0;
        this.sprite = new Image();
        this.sprite.src = "img/spaceship.png";
    }

    /**
     * Change the rotate member to be closer to the targetAngle.
     *
     * @param targetAngle The angle which is desired for the spaceship.
     */
    rotateTo(targetAngle) {
        //1. Determine the direction of the rotation
        const diff = targetAngle - this.rotate;
        const absDiff = Math.abs(diff);
        if (absDiff <= Spaceship.elementaryTurn) {
            this.rotate = targetAngle;
            return;
        }
        const totalNeededTurn = absDiff < 180 ? diff : -diff;
        this.rotate = this.rotate + totalNeededTurn / Spaceship.turnSlowerFactor;
    }

    //Create functions that move the spaceship
}

const spaceship = new Spaceship();