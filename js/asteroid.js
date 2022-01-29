class Asteroid {

    constructor(startingX, startingY) {
        this.x = startingX;
        this.y = startingY;
        this.width = 140;
        this.height = 95;
        this.rotation = 0;
        this.xspeed = 0.1;
        this.yspeed = 0.1;
        this.elementaryTurn = 0.05;
        this.sprite = new Image();
        this.sprite.src = "img/asteroid2.png";
    }

    /**
     * Change the rotation member clockwise or anti-clockwise by elementaryTurn.
     *
     * @param direction if lower than zero, turn anti-clockwise, otherwise, turn clockwise.
     */
    rotate(direction) {
        this.rotation += direction >= 0 ? this.elementaryTurn: -this.elementaryTurn;
        if (this.rotation >= 360) {
            this.rotation -= 360;
        }
        if (this.rotation < 0) {
            this.rotation += 360;
        }
    }

    moveAsteroid() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
}