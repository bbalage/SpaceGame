class HitBox {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.relativeX = x;
        this.relativeY = y;
        this.width = width;
        this.height = height;
    }

    /**
     * @param hitBox {HitBox} The hit box we check for overlapping with this hit box.
     * @return {boolean} True if
     */
    isOverlapping(hitBox) {
        return hitBox.x < this.x + this.width
            && hitBox.x + hitBox.width > this.x
            && hitBox.y < this.y + this.height
            && hitBox.y + hitBox.height > this.y;
    }

    /**
     * Sets the current position of the hit box based on its relative position and the position of the
     * object which the hit box belongs to. Should be called when the object changes position.
     * @param objectPositionX X coordinate of the object in absolute space.
     * @param objectPositionY Y coordinate of the object in absolute space.
     */
    setPosition(objectPositionX, objectPositionY) {
        this.x = objectPositionX + this.relativeX;
        this.y = objectPositionY + this.relativeY;
    }
}