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
        return hitBox.x < this.x + this.width
            && hitBox.x + hitBox.width > this.x
            && hitBox.y < this.y + this.height
            && hitBox.y + hitBox.height > this.y;
    }
}

class HitBoxInterval {

    constructor(hitBoxIntervalDescriptor) {
        this.start = hitBoxIntervalDescriptor.start;
        this.end = hitBoxIntervalDescriptor.end;
        this.hitBoxes = HitBoxInterval.#extractHitBoxes(hitBoxIntervalDescriptor.hitBoxes);
    }

    // TODO: Elementary turn should always be smaller than the smallest existing interval. Check somehow!
    /**
     * Determines based on the rotation whether this interval's hit boxes should be used.
     * @param rotation The rotation of the object this HitBoxInterval belongs to.
     * @return {number} 0 if no interval switch needed, 1 if the next interval is needed, -1 if the previous.
     */
    calcSwapDirection(rotation) {
        if (rotation >= this.start && rotation < this.end) return 0;
        else if (rotation < this.start) return -1;
        else if (rotation >= this.end) return 1;
    }

    static #extractHitBoxes(hitBoxes) {
        const hitBoxObjects = [];
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
}

class HitBoxIntervalContainer {

    constructor(hitBoxIntervals) {
        this.intervals = HitBoxIntervalContainer.#extractHitBoxIntervals(hitBoxIntervals);
        this.currentIndex = 0;
    }

    handleRotation(rotation) {
        const indexDirection = this.intervals[this.currentIndex].calcSwapDirection(rotation);
        if (indexDirection === 0) return;
        this.currentIndex += indexDirection;
        if (this.currentIndex === -1) {
            this.currentIndex = this.intervals.length - 1;
        } else if (this.currentIndex === this.intervals.length) {
            this.currentIndex = 0;
        }
    }

    static #extractHitBoxIntervals(hitBoxIntervalsDesc) {
        const hitBoxIntervals = [];
        for (let i = 0; i < hitBoxIntervalsDesc.length; i++) {
            const hitBoxInterval = new HitBoxInterval(hitBoxIntervalsDesc[i])
            hitBoxIntervals.push(hitBoxInterval);
        }
        return hitBoxIntervals;
    }
}