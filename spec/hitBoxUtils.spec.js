describe("Hit box handling classes' unit tests", function() {

    describe("HitBox tests.", function () {
        it("isOverlapping says true for partial overlap on both x and y axis.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(10, 5, 3, 5);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeTrue();
            expect(overlapsCommuted).toBeTrue();
        });

        it("isOverlapping says false for no overlap at all.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(8, 3, 3, 4);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeFalse();
            expect(overlapsCommuted).toBeFalse();
        });

        it("isOverlapping says false for only x overlap.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(8, 3, 5, 4);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeFalse();
            expect(overlapsCommuted).toBeFalse();
        });

        it("isOverlapping says false for only y overlap.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(8, 5, 3, 4);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeFalse();
            expect(overlapsCommuted).toBeFalse();
        });

        it("isOverlapping says false for x line touch.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(8, 5, 4, 4);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeFalse();
            expect(overlapsCommuted).toBeFalse();
        });

        it("isOverlapping says false for y line touch.", function () {
            const hitBox1 = new HitBox(12, 8, 6, 4);
            const hitBox2 = new HitBox(8, 3, 8, 5);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeFalse();
            expect(overlapsCommuted).toBeFalse();
        });

        it("isOverlapping says true for containment.", function () {
            const hitBox1 = new HitBox(12, 8, 8, 7);
            const hitBox2 = new HitBox(13, 9, 5, 5);

            const overlaps = hitBox1.isOverlapping(hitBox2);
            const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

            expect(overlaps).toBeTrue();
            expect(overlapsCommuted).toBeTrue();
        });

        it("isOverlapping says true for self check.", function () {
            const hitBox1 = new HitBox(12, 8, 8, 7);

            const overlaps = hitBox1.isOverlapping(hitBox1);

            expect(overlaps).toBeTrue();
        });

        it("isOverlapping says the truth for various value pairs with negative and zero numbers.", function () {
            const pairs = [
                {
                    "hb1": {"x": 10, "y": -5, "w": 3, "h": 15},
                    "hb2": {"x": 1, "y": 8, "w": 12, "h": 1},
                    "overlaps": true
                },
                {
                    "hb1": {"x": -20, "y": -12, "w": 1, "h": 1},
                    "hb2": {"x": -19, "y": -11, "w": 1, "h": 1},
                    "overlaps": false
                },
                {
                    "hb1": {"x": -12, "y": 5, "w": 2, "h": 5},
                    "hb2": {"x": -12, "y": 5, "w": 1, "h": 1},
                    "overlaps": true
                },
                {
                    "hb1": {"x": -12, "y": 5, "w": 2, "h": 5},
                    "hb2": {"x": -12, "y": 3, "w": 1, "h": 1},
                    "overlaps": false
                },
                {
                    "hb1": {"x": 0, "y": -5, "w": 3, "h": 15},
                    "hb2": {"x": 1, "y": 8, "w": 1, "h": 3},
                    "overlaps": true
                }
            ]
            for (let pair of pairs) {
                const hitBox1 = new HitBox(pair.hb1.x, pair.hb1.y, pair.hb1.w, pair.hb1.h);
                const hitBox2 = new HitBox(pair.hb2.x, pair.hb2.y, pair.hb2.w, pair.hb2.h);

                const overlaps = hitBox1.isOverlapping(hitBox2);
                const overlapsCommuted = hitBox2.isOverlapping(hitBox1);

                expect(overlaps).toBe(pair.overlaps);
                expect(overlapsCommuted).toBe(pair.overlaps);
            }
        });

        it("Moving object works fine on basic test.", function () {
            const hitBox = new HitBox(12, 8, 8, 7);
            const objectPositionX = 10, objectPositionY = 5;
            const expectedNewHitBoxPositionX = 22, expectedNewHitBoxPositionY = 13;

            hitBox.setPosition(objectPositionX, objectPositionY);

            expect(hitBox.x).toBe(expectedNewHitBoxPositionX);
            expect(hitBox.y).toBe(expectedNewHitBoxPositionY);
        });
    });

    describe("HitBoxContainer tests.", function () {
        let hitBoxes = null;

        beforeEach(function () {
            hitBoxes = [];
            for (let i = 0; i < 6; i++) {
                const hitBox= {
                    isOverlapping: function() {},
                    setPosition: function () {}
                }
                spyOn(hitBox, 'isOverlapping').and.returnValue(false);
                spyOn(hitBox, 'setPosition');
                hitBoxes.push(hitBox);
            }
        });

        it("Getting current hit boxes according to index works fine.", function () {
            const hitBoxes1 = [hitBoxes[0]];
            const hitBoxes2 = [hitBoxes[1]];
            const hitBoxes3 = [hitBoxes[2], hitBoxes[3]];
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": hitBoxes1};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": hitBoxes2};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": hitBoxes3};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );

            hitBoxContainer.currentIndex = 0;
            const actualHitBoxes1 = hitBoxContainer.getCurrentHitBoxes();
            hitBoxContainer.currentIndex = 1;
            const actualHitBoxes2 = hitBoxContainer.getCurrentHitBoxes();
            hitBoxContainer.currentIndex = 2;
            const actualHitBoxes3 = hitBoxContainer.getCurrentHitBoxes();

            expect(actualHitBoxes1).toEqual(hitBoxes1);
            expect(actualHitBoxes2).toEqual(hitBoxes2);
            expect(actualHitBoxes3).toEqual(hitBoxes3);
        });

        it("handlePosition calls the setPosition of the appropriate hit boxes and not any others'.", function () {
            const hitBoxes1 = [hitBoxes[0]];
            const hitBoxes2 = [hitBoxes[1], hitBoxes[2], hitBoxes[3]];
            const hitBoxes3 = [hitBoxes[4], hitBoxes[5]];
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": hitBoxes1};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": hitBoxes2};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": hitBoxes3};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const objectPositionX = 30, objectPositionY = 50;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handlePosition(objectPositionX, objectPositionY);

            expect(hitBoxes[1].setPosition).toHaveBeenCalledWith(objectPositionX, objectPositionY);
            expect(hitBoxes[2].setPosition).toHaveBeenCalledWith(objectPositionX, objectPositionY);
            expect(hitBoxes[3].setPosition).toHaveBeenCalledWith(objectPositionX, objectPositionY);
            expect(hitBoxes[0].setPosition).toHaveBeenCalledTimes(0);
            expect(hitBoxes[4].setPosition).toHaveBeenCalledTimes(0);
            expect(hitBoxes[5].setPosition).toHaveBeenCalledTimes(0);
        });

        it("checkHit calls the isOverlapping of the appropriate hit boxes and not any others'.", function () {
            const hitBoxes1 = [hitBoxes[0]];
            const hitBoxes2 = [hitBoxes[1], hitBoxes[2]];
            const hitBoxes3 = [hitBoxes[3], hitBoxes[4]];
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": hitBoxes1};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": hitBoxes2};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": hitBoxes3};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );

            hitBoxContainer.currentIndex = 1;
            const doesHit = hitBoxContainer.checkHit(hitBoxes[5]);

            expect(doesHit).toBeFalse();
            expect(hitBoxes[1].isOverlapping).toHaveBeenCalledWith(hitBoxes[5]);
            expect(hitBoxes[2].isOverlapping).toHaveBeenCalledWith(hitBoxes[5]);
            expect(hitBoxes[0].isOverlapping).toHaveBeenCalledTimes(0);
            expect(hitBoxes[3].isOverlapping).toHaveBeenCalledTimes(0);
            expect(hitBoxes[4].isOverlapping).toHaveBeenCalledTimes(0);
        });

        it("if inside checkHit the isOverlapping returns true, then the checkHit also returns true.", function () {
            const hitBox= {
                isOverlapping: function() {},
                setPosition: function () {}
            }
            spyOn(hitBox, 'isOverlapping').and.returnValue(true);
            const hitBoxes1 = [hitBoxes[0]];
            const hitBoxes2 = [hitBox, hitBoxes[1]];
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": hitBoxes1};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": hitBoxes2};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2]
            );

            hitBoxContainer.currentIndex = 1;
            const doesHit = hitBoxContainer.checkHit(hitBoxes[5]);

            expect(doesHit).toBeTrue();
        });
        // TODO: Test handleRotation of HitBoxContainer.
    });

    describe("HitBoxDataExtractor tests.", function () {
        // TODO: Test public functions of HitBoxDataExtractor.
    });
});