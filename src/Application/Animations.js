import THREE from "three";
import {Utils} from "three/examples/jsm/libs/flow.module";
import Application from "./Application";


export default class Animations{
    constructor() {
        this.application = new Application();
        this.beltRotation = 0;
        this.cranePosition = 0;

        this.beltRotationIncrement = 0.01;
        this.cranePositionIncrement = 0.02;
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


    update(currentlyPressedKeys) {
        if(currentlyPressedKeys["KeyW"]) {
            this.moveCraneForwards();
        }

        if(currentlyPressedKeys["KeyS"]) {
            this.moveCraneBackwards();
        }

        if(currentlyPressedKeys["KeyG"]) {
            this.toggleHeadlights();
        }
    }
}