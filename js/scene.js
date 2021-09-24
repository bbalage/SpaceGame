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
        objectInCameraSpace.x = objectInPlaygroundSpace.x - this.x;
        objectInCameraSpace.y = objectInPlaygroundSpace.y - this.y;
        return objectInCameraSpace;
    }

    /**
     * Checks whether the followed object(s) are in the camera viewport and changes the camera
     * position if not.
     */
    follow() {
        const followedInCameraSpace = this.toCameraView(this.followed);
        this.followX(followedInCameraSpace)
        this.followY(followedInCameraSpace)
    }

    followX(followedInCameraSpace) {
        const width = this.viewportWidth - this.padding * 2;
        const dx = width - followedInCameraSpace.x;
        if (dx < this.followed.width) {
            this.x -= dx - this.followed.width;
        }
        else if (dx > width - 2 * this.padding) {
            this.x += followedInCameraSpace.x - 2 * this.padding;
        }
    }

    followY(followedInCameraSpace) {
        const height = this.viewportHeight - this.padding * 2;
        const dy = height - followedInCameraSpace.y;
        if (dy < this.followed.height) {
            this.y -= dy - this.followed.height;
        }
        else if (dy > height - this.padding) {
            this.y += followedInCameraSpace.y - this.padding;
        }
    }
}

const camera = new Camera(deviceWidth, deviceHeight, spaceship, 10);