describe("Spaceship unit tests", function() {

    const startingX = 10;
    const startingY = 10;
    let hitBoxIntervalContainer = null;

    beforeEach(function () {
        hitBoxIntervalContainer = {
            handleRotation: function() {}
        }
        spyOn(hitBoxIntervalContainer, 'handleRotation');
    });

    it("Spaceship turning function works fine clockwise; basic setting.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 15;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedRotation);
    });

    it("Spaceship turning function works fine anti-clockwise; basic setting.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 5;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedRotation);
    });

    it("Spaceship turning function works fine with zero direction.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 15;

        testSpaceship.rotate(0);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedRotation);
    });

    it("Spaceship turning function works fine with clockwise turn-around.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 358;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 3;
        const expectedHandleTurnParameter = 363;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedHandleTurnParameter);
    });

    it("Spaceship turning function works fine with anti-clockwise turn-around.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 2;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 357;
        const expectedHandleTurnParameter = -3;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedHandleTurnParameter);
    });

    it("Spaceship turning function works fine with zero starting rotation anti-clockwise.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 355;
        const expectedHandleTurnParameter = -5;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedHandleTurnParameter);
    });

    it("Spaceship turning function works fine with zero starting rotation clockwise.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 5;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedRotation);
    });

    it("Spaceship turning function works fine with multiple calls.", function () {
        const testSpaceship = new Spaceship(hitBoxIntervalContainer, startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 10;

        testSpaceship.rotate(1);
        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
        expect(hitBoxIntervalContainer.handleRotation).toHaveBeenCalledWith(expectedRotation);
    });
})