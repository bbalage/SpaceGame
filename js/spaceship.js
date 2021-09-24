class Spaceship {

    static elementaryTurn = 2;

    constructor() {
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
    }

    /**
     * Change the rotation member clockwise or anti-clockwise by elementaryTurn.
     *
     * @param direction if lower than zero, turn anti-clockwise, otherwise, turn clockwise.
     */
    rotate(direction) {
        this.rotation += direction > 0 ? Spaceship.elementaryTurn: -Spaceship.elementaryTurn;
        if (this.rotation >= 360) {
            this.rotation -= 360;
        }
        if (this.rotation < 0) {
            this.rotation += 360;
        }
    }

    //Create functions that move the spaceship


}

const spaceship = new Spaceship();