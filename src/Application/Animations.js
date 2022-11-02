import THREE from "three";
import {Utils} from "three/examples/jsm/libs/flow.module";
import Application from "./Application";


export default class Animations{
    craneRotation;

    constructor() {
        this.beltRotation = 0;
        this.cranePosition = 0;
        this.boomRotation = -0.3;

        this.beltRotationIncrement = 0.01;
        this.cranePositionIncrement = 0.02;
        this.boomRotationIncrement = 0.01

        this.headLightsOn = true;
        this.headLightsIntensity = 0.5;
        this.headLightsColor = 0xFFFF00;

        this.theSunIsShining = true;

        this.craneRotation = 0;
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
        if (this.boomRotation > -1) {
            this.boomRotation -= this.boomRotationIncrement
        }
    }

    rotateBoomUp() {
        if (this.boomRotation < -0.2){
            this.boomRotation += this.boomRotationIncrement
        }
    }

    rotateCraneLeft() {
        this.craneRotation += 0.02;
    }

    rotateCraneRight() {
        this.craneRotation -= 0.02;
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

        if(currentlyPressedKeys["KeyQ"]) {
            this.rotateCraneLeft();
        }

        if(currentlyPressedKeys["KeyE"]) {
            this.rotateCraneRight();
        }
    }

}