class HitBox {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
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
}

class HitBoxInterval {

    constructor(start, end, hitBoxes) {
        this.start = start;
        this.end = end;
        this.hitBoxes = hitBoxes;
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
}

class HitBoxIntervalContainer {

    constructor(hitBoxIntervals) {
        this.intervals = hitBoxIntervals;
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

    check
}

class HitBoxDataExtractor {

    /**
     * Serves to create classes from descriptor data.
     * @param hitBoxIntervalsDesc The descriptor retrieved from the des
     */
    extractHitBoxDescriptor(hitBoxIntervalsDesc) {
        const hitBoxIntervals = HitBoxDataExtractor.#extractHitBoxIntervals(hitBoxIntervalsDesc);
        return new HitBoxIntervalContainer(hitBoxIntervals);
    }

    static #extractHitBoxIntervals(hitBoxIntervalsDesc) {
        const hitBoxIntervals = [];
        for (let hitBoxIntervalDesc of hitBoxIntervalsDesc) {
            const hitBoxInterval = new HitBoxInterval(
                hitBoxIntervalDesc.start,
                hitBoxIntervalDesc.end,
                HitBoxDataExtractor.#extractHitBoxes(hitBoxIntervalDesc.hitBoxes)
            );
            hitBoxIntervals.push(hitBoxInterval);
        }
        return hitBoxIntervals;
    }

    static #extractHitBoxes(hitBoxesDesc) {
        const hitBoxes = [];
        for (let i = 0; i < hitBoxesDesc.length; i++) {
            let hitBox = new HitBox(
                hitBoxesDesc[i].x,
                hitBoxesDesc[i].y,
                hitBoxesDesc[i].width,
                hitBoxesDesc[i].height
            )
            hitBoxes.push(
                hitBox
            )
        }
        return hitBoxes;
    }
}