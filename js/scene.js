class Playground {

    constructor() {
    }
}

class Camera {

    constructor(width, height, followed, padding) {
        this.x = 0;
        this.y = 0;
        this.viewportWidth = width;
        this.viewportHeight = height;
        this.padding = padding;
        this.followed = followed;
    }

    /**
     * Converts an object from global (playground) space into camera viewport space.
     * Camera viewport space corresponds to the canvas space.
     *
     * @param objectInPlaygroundSpace An object that has the x, y, width, height properties
     * @returns {{objectInCameraSpace}} An object with the x, y, width, height properties, all
     * in canvas/camera space.
     */
    toCameraView(objectInPlaygroundSpace) {
        const objectInCameraSpace = {}
        objectInCameraSpace.x = this.x + objectInPlaygroundSpace.x;
        objectInCameraSpace.y = this.y + objectInPlaygroundSpace.y;
        return objectInCameraSpace;
    }

    follow() {
        const followedInCameraSpace = this.toCameraView(this.followed);
        const dx = this.viewportWidth - followedInCameraSpace.x;
        if (dx < 0) {
            this.x -= dx;
        }
    }
}

const camera = new Camera(deviceWidth, deviceHeight, spaceship, 20);