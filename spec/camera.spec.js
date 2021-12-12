describe("Camera unit tests", function() {

    describe("Test toCameraView", function () {
        it("Camera and object are in origin.", function () {
            const camera = new Camera(0, 0, 200, 100, 5);
            const objectInSceneSpace = {"x": 0, "y": 0}

            const objectInCameraSpace = camera.toCameraView(objectInSceneSpace);

            expect(objectInCameraSpace.x).toBeDefined()
            expect(objectInCameraSpace.y).toBeDefined()
            expect(objectInCameraSpace.x).toBe(0);
            expect(objectInCameraSpace.y).toBe(0);
        });

        it("Camera looks at object; object is in origin.", function () {
            const camera = new Camera(10, 20, 200, 100, 5);
            const objectInSceneSpace = {"x": 0, "y": 0}

            const objectInCameraSpace = camera.toCameraView(objectInSceneSpace);

            expect(objectInCameraSpace.x).toBeDefined()
            expect(objectInCameraSpace.y).toBeDefined()
            expect(objectInCameraSpace.x).toBe(-10);
            expect(objectInCameraSpace.y).toBe(-20);
        });

        it("Camera and object are not in origin.", function () {
            const camera = new Camera(500, 100, 200, 100, 5);
            const objectInSceneSpace = {"x": 600, "y": 800}

            const objectInCameraSpace = camera.toCameraView(objectInSceneSpace);

            expect(objectInCameraSpace.x).toBeDefined()
            expect(objectInCameraSpace.y).toBeDefined()
            expect(objectInCameraSpace.x).toBe(100);
            expect(objectInCameraSpace.y).toBe(700);
        });
    });

    describe("Test object following", function () {

    });
});