describe("Player", function() {
    it("Check whether the spaceship turning function works fine.", function () {
        const testCanvas = {"width": 10, "height": 10}
        const testSpaceship = new Spaceship(testCanvas);
        testSpaceship.rotation = 10;
        Spaceship.elementaryTurn = 5;
        testSpaceship.rotate(1);
        expect(testSpaceship.rotation).toBe(15);
    });
})