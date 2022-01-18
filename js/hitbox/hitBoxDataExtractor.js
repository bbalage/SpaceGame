class HitBoxDataExtractor {

    /**
     * Serves to create classes from descriptor data.
     * @param hitBoxIntervalsDesc The interval descriptor retrieved from the descriptor object.
     */
    // TODO: You should not be able to extract a semantically or syntactically invalid descriptor without an error!
    extractHitBoxDescriptor(hitBoxIntervalsDesc) {
        const hitBoxIntervals = HitBoxDataExtractor.#extractHitBoxIntervals(hitBoxIntervalsDesc);
        return new HitBoxContainer(hitBoxIntervals);
    }

    static #extractHitBoxIntervals(hitBoxIntervalsDesc) {
        const hitBoxIntervals = [];
        for (let hitBoxIntervalDesc of hitBoxIntervalsDesc) {
            if (hitBoxIntervalDesc.start === undefined || hitBoxIntervalDesc.end === undefined ||
                !Array.isArray(hitBoxIntervalDesc.hitBoxes)) {
                throw new Error("hitBoxIntervalDescriptor is syntactically incorrect.");
            }
            hitBoxIntervals.push({
                "start": hitBoxIntervalDesc.start,
                "end": hitBoxIntervalDesc.end,
                "hitBoxes": HitBoxDataExtractor.#extractHitBoxes(hitBoxIntervalDesc.hitBoxes)
            });
        }
        HitBoxDataExtractor.#checkIntervalsSemantically(hitBoxIntervals);
        return hitBoxIntervals;
    }

    static #extractHitBoxes(hitBoxesDesc) {
        if (hitBoxesDesc.length === 0) throw new Error("Not all intervals have hit boxes.")
        const hitBoxes = [];
        for (let hitBoxDesc of hitBoxesDesc) {
            if (hitBoxDesc.x === undefined || hitBoxDesc.y === undefined ||
                hitBoxDesc.width === undefined || hitBoxDesc.height === undefined) {
                throw new Error("HitBox descriptor is incorrect.");
            }
            let hitBox = new HitBox(
                hitBoxDesc.x,
                hitBoxDesc.y,
                hitBoxDesc.width,
                hitBoxDesc.height
            )
            hitBoxes.push(
                hitBox
            )
        }
        return hitBoxes;
    }

    static #checkIntervalsSemantically(hitBoxIntervals) {
        if (!Array.isArray(hitBoxIntervals) || !hitBoxIntervals) {
            throw new Error("HitBoxIntervals is not a valid array.");
        }
        let start = 0;
        for (let hitBoxInterval of hitBoxIntervals) {
            if (hitBoxInterval.start !== start) {
                throw new Error("HitBoxIntervals are semantically incorrect.");
            }
            start = hitBoxInterval.end;
        }
    }
}