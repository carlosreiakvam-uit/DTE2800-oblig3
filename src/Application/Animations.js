

export default class Animations{
    constructor() {
        this.beltRotation = 0;
        this.cranePosition = 0;

        this.beltRotationIncrement = 0.01;
        this.cranePositionIncrement = 0.02;
    }

    moveCraneForwards() {
        this.beltRotation -= this.beltRotationIncrement;
        this.cranePosition += this.cranePositionIncrement;
    }

    moveCraneBackwards() {
        this.beltRotation += this.beltRotationIncrement;
        this.cranePosition -= this.cranePositionIncrement;
    }

    update(currentlyPressedKeys) {
        if(currentlyPressedKeys["KeyW"]) {
            this.moveCraneForwards();
        }
        if(currentlyPressedKeys["KeyS"]) {
            this.moveCraneBackwards();
        }
    }
}