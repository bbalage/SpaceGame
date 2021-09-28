class HitBoxUtils {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * @param hitBox {HitBoxUtils} The hit box we check for overlapping with this one.
     * @return {boolean} True if
     */
    isOverlapping(hitBox) {
        return !(hitBox.x > this.x + this.width
            || hitBox.x + hitBox.width < this.x
            || hitBox.y > this.y + this.height
            || hitBox.y + hitBox.height < this.y);
    }
}