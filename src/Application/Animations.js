

export default class Animations{
    constructor() {
        this.beltRotation = 0;
        this.cranePosition = 0;
        this.craneRotation = 0;

        this.beltRotationIncrement = 0.01;
        this.cranePositionIncrement = 0.02;
        this.craneRotationIncrement = 0.01

        this.headLightsOn = true;
    }

    toggleHeadlights() {
        this.headLightsOn = !this.headLightsOn;
    }

    moveCraneForwards() {
        this.beltRotation -= this.beltRotationIncrement;
        this.cranePosition += this.cranePositionIncrement;
    }

    moveCraneBackwards() {
        this.beltRotation += this.beltRotationIncrement;
        this.cranePosition -= this.cranePositionIncrement;
    }

    rotateBoomDown() {
        this.craneRotation -= this.craneRotationIncrement
    }

    rotateBoomUp() {
        this.craneRotation += this.craneRotationIncrement
    }

    update(currentlyPressedKeys) {
        if(currentlyPressedKeys["KeyW"]) {
            this.moveCraneForwards();
        }
        if(currentlyPressedKeys["KeyS"]) {
            this.moveCraneBackwards();
        }
        if(currentlyPressedKeys["KeyD"]) {
            this.rotateBoomDown();
        }
        if(currentlyPressedKeys["KeyA"]) {
            this.rotateBoomUp();
        }

        if(currentlyPressedKeys["KeyG"]) {
            this.toggleHeadlights();
        }
    }

}