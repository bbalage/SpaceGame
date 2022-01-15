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

class HitBoxContainer {

    /**
     * Construct from hit box intervals.
     * @param hitBoxIntervals Argument of form [{start: num1, end: num2, hitBox: hitBox}]
     */
    constructor(hitBoxIntervals) {
        this.intervals = hitBoxIntervals;
        this.currentIndex = 0;
    }

    /**
     * Returns the hit box which should be used now, according to the last seen rotation.
     * @return {HitBox}
     */
    getCurrentHitBox() {
        return this.intervals[this.currentIndex].hitBox;
    }

    /**
     * Sets the current position of the current hit box based on its relative position and the position of the
     * object which the hit box belongs to. Should be called when the object changes position.
     * @param objectPositionX X coordinate of the object in absolute space.
     * @param objectPositionY Y coordinate of the object in absolute space.
     */
    handlePosition(objectPositionX, objectPositionY) {
        this.intervals[this.currentIndex].hitBox.setPosition(objectPositionX, objectPositionY);
    }

    /**
     * Check whether the current hit box "hits" with the one given in the parameter.
     * @param hitBox The hit box we check against.
     * @return {boolean}
     */
    checkHit(hitBox) {
        return this.intervals[this.currentIndex].hitBox.isOverlapping(hitBox);
    }

    /**
     * Function to call when the rotation of the object changes. This function sets which
     * hit box should be used according to the rotation.
     * @param rotation Rotation in degrees. Should not be normalized to 0-360.
     */
    handleRotation(rotation) {
        const indexDirection = this.#calcSwapDirection(rotation)
        if (indexDirection === 0) return;
        this.currentIndex += indexDirection;
        if (this.currentIndex === -1) {
            this.currentIndex = this.intervals.length - 1;
        } else if (this.currentIndex === this.intervals.length) {
            this.currentIndex = 0;
        }
    }

    /**
     * Determines based on the rotation whether this interval's hit boxes should be used.
     * IMPORTANT: Input rotation should not be normalized to 0-360 interval; it could be negative and 360+,
     * so this function should be called before the normalization happens.
     * @param rotation The rotation of the object this HitBoxInterval belongs to.
     * @return {number} 0 if no interval switch needed, 1 if the next interval is needed, -1 if the previous.
     */
    // TODO: Elementary turn should always be smaller than the smallest existing interval. Check somehow!
    #calcSwapDirection(rotation) {
        const start = this.intervals[this.currentIndex].start;
        const end = this.intervals[this.currentIndex].end;
        if (rotation >= start && rotation < end) return 0;
        else if (rotation < start) return -1;
        else if (rotation >= end) return 1;
    }
}

class HitBoxDataExtractor {

    /**
     * Serves to create classes from descriptor data.
     * @param hitBoxIntervalsDesc The descriptor retrieved from the des
     */
    extractHitBoxDescriptor(hitBoxIntervalsDesc) {
        const hitBoxIntervals = HitBoxDataExtractor.#extractHitBoxIntervals(hitBoxIntervalsDesc);
        return new HitBoxContainer(hitBoxIntervals);
    }

    static #extractHitBoxIntervals(hitBoxIntervalsDesc) {
        const hitBoxIntervals = [];
        for (let hitBoxIntervalDesc of hitBoxIntervalsDesc) {
            hitBoxIntervals.push({
                "start": hitBoxIntervalDesc.start,
                "end": hitBoxIntervalDesc.end,
                "hitBox": HitBoxDataExtractor.#extractHitBox(hitBoxIntervalDesc.hitBox)
            });
        }
        return hitBoxIntervals;
    }

    static #extractHitBox(hitBoxDesc) {
        return new HitBox(
            hitBoxDesc.x,
            hitBoxDesc.y,
            hitBoxDesc.width,
            hitBoxDesc.height
        );
    }
}