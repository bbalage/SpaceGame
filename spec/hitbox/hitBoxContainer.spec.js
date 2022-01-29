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

    describe("Rotation handling in HitBoxContainer tests.", function () {
        it("handleRotation does not rotate when not necessary.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const expectedNewIndex = 1;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(100);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation does rotate towards the previous value; normal case.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const expectedNewIndex = 0;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(70);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation does rotate towards the next value; normal case.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const expectedNewIndex = 2;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(290);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation does rotate towards the next value; exact interval border.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const expectedNewIndex = 2;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(271);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation does rotate towards the previous value; exact interval border.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 91, "end": 270, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 271, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3]
            );
            const expectedNewIndex = 0;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(90);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation can choose any forward interval.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 90, "end": 180, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 180, "end": 270, "hitBoxes": null};
            const hitBoxInterval4 = {"start": 270, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3, hitBoxInterval4]
            );
            const expectedNewIndex = 3;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(280);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation can choose any backward interval.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 90, "end": 180, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 180, "end": 270, "hitBoxes": null};
            const hitBoxInterval4 = {"start": 270, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3, hitBoxInterval4]
            );
            const expectedNewIndex = 0;

            hitBoxContainer.currentIndex = 2;
            hitBoxContainer.handleRotation(45);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation can choose any backward interval; negative rotation.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 90, "end": 180, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 180, "end": 270, "hitBoxes": null};
            const hitBoxInterval4 = {"start": 270, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3, hitBoxInterval4]
            );
            const expectedNewIndex = 3;

            hitBoxContainer.currentIndex = 1;
            hitBoxContainer.handleRotation(-6);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation can choose any forward interval; 360+ rotation.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 90, "end": 180, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 180, "end": 270, "hitBoxes": null};
            const hitBoxInterval4 = {"start": 270, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3, hitBoxInterval4]
            );
            const expectedNewIndex = 0;

            hitBoxContainer.currentIndex = 2;
            hitBoxContainer.handleRotation(369);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });

        it("handleRotation for 360 as rotation.", function () {
            const hitBoxInterval1 = {"start": 0, "end": 90, "hitBoxes": null};
            const hitBoxInterval2 = {"start": 90, "end": 180, "hitBoxes": null};
            const hitBoxInterval3 = {"start": 180, "end": 270, "hitBoxes": null};
            const hitBoxInterval4 = {"start": 270, "end": 360, "hitBoxes": null};
            const hitBoxContainer = new HitBoxContainer(
                [hitBoxInterval1, hitBoxInterval2, hitBoxInterval3, hitBoxInterval4]
            );
            const expectedNewIndex = 0;

            hitBoxContainer.currentIndex = 2;
            hitBoxContainer.handleRotation(360);

            expect(hitBoxContainer.currentIndex).toBe(expectedNewIndex);
        });
    });
});