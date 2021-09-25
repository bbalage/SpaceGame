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
        this.x = this.followOnAxis(followedInCameraSpace.x, this.followed.width, this.x, this.viewportWidth);
        this.y = this.followOnAxis(followedInCameraSpace.y, this.followed.height, this.y, this.viewportHeight);
    }

    /**
     * Checks whether the followed object is visible on a certain axis (X or Y) and changes the
     * camera position accordingly.
     * @param followedCoor The coordinate of the followed object along the given axis (an X or Y coordinate)
     * in camera space (not global space).
     * @param followedSize The size of the followed object along the certain axis (either the width or the height).
     * @param viewportCoor The X or Y coordinate of the camera.
     * @param viewportSize The width or the height of the camera.
     * @returns {*} The modified value of the viewportCoor parameter.
     */
    followOnAxis(followedCoor, followedSize, viewportCoor, viewportSize) {
        const depaddedSize = viewportSize - this.padding;
        const difference = depaddedSize - followedCoor;
        if (difference < followedSize) {
            viewportCoor -= difference - followedSize;
        }
        else if (difference > depaddedSize - this.padding) {
            viewportCoor += followedCoor - this.padding;
        }
        return viewportCoor
    }
}

const camera = new Camera(deviceWidth, deviceHeight, spaceship, 50);