describe("Spaceship unit tests", function() {

    const startingX = 10;
    const startingY = 10;

    it("Spaceship turning function works fine clockwise; basic setting.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 15;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine anti-clockwise; basic setting.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 5;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with zero direction.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 10;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 15;

        testSpaceship.rotate(0);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with clockwise turn-around.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 358;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 3;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with anti-clockwise turn-around.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 2;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 357;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with zero starting rotation anti-clockwise.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 355;

        testSpaceship.rotate(-1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with zero starting rotation clockwise.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 5;

        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });

    it("Spaceship turning function works fine with multiple calls.", function () {
        const testSpaceship = new Spaceship(startingX, startingY);
        testSpaceship.rotation = 0;
        testSpaceship.elementaryTurn = 5;
        const expectedRotation = 10;

        testSpaceship.rotate(1);
        testSpaceship.rotate(1);

        expect(testSpaceship.rotation).toBe(expectedRotation);
    });
})