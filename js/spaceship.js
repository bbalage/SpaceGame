class Spaceship {

    constructor(hitBoxContainer, startingX, startingY) {
        this.mass = 10;
        this.thrusterForce = 1;
        this.x = startingX;
        this.y = startingY;
        this.width = 639 * 0.1;
        this.height = 787 * 0.1;
        this.rotation = 0;
        this.acceleration = this.thrusterForce / this.mass;
        this.xspeed = 0;
        this.yspeed = 0;
        this.elementaryTurn = 2; // Must be an integer
        this.sprite = new Image();
        this.sprite.src = "img/spaceship.png";
        this.hitBoxContainer = hitBoxContainer;
    }

    /**
     * Change the rotation member clockwise or anti-clockwise by elementaryTurn.
     *
     * @param direction if lower than zero, turn anti-clockwise, otherwise, turn clockwise.
     */
    rotate(direction) {
        this.rotation += direction >= 0 ? this.elementaryTurn: -this.elementaryTurn;
        this.hitBoxContainer.handleRotation(this.rotation);
        if (this.rotation >= 360) {
            this.rotation -= 360;
        }
        if (this.rotation < 0) {
            this.rotation += 360;
        }
    }

    /**
     * Change the spaceship's coordinates according to its current speed.
     */
    moveSpaceship() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.hitBoxContainer.handlePosition(this.x, this.y);
    }

    /**
     * Return the currently active hit box of the spaceship.
     * @return {HitBox}
     */
    getHitBoxes() {
        return this.hitBoxContainer.getCurrentHitBoxes();
    }

    checkHit(hitBox) {
        return this.hitBoxContainer.checkHit(hitBox);
    }

}