class Spaceship {

    static elementaryTurn = 2;

    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height * 0.8;
        this.width = 639 * 0.1;
        this.height = 787 * 0.1;
        this.rotation = 0;
        this.speed = 3;
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