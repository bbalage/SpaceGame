class HitBox {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * @param hitBox {HitBox} The hit box we check for overlapping with this one.
     * @return {boolean} True if
     */
    isOverlapping(hitBox) {
        return !(hitBox.x > this.x + this.width
            || hitBox.x + hitBox.width < this.x
            || hitBox.y > this.y + this.height
            || hitBox.y + hitBox.height < this.y);
    }
}

class HitBoxInterval {

    constructor(hitBoxIntervalDescriptor) {
        this.start = hitBoxIntervalDescriptor.start;
        this.end = hitBoxIntervalDescriptor.end;
        this.hitBoxes = this.extractHitBoxes(hitBoxIntervalDescriptor.hitBoxes);
    }

    extractHitBoxes(hitBoxes) {
        const hitBoxObjects = []
        for (let i = 0; i < hitBoxes.length; i++) {
            let hitBox = new HitBox(
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
     * Determines based on the rotation whether this interval's hit boxes should be used.
     * @param rotation The rotation of the object this HitBoxInterval belongs to.
     * @return {boolean} True if this should be active, false if not.
     */
    isActive(rotation) {

    }
}