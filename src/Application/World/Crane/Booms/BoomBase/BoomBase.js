import * as THREE from 'three'
import Application from "../../../../Application";
import BoomBaseMainframe from "./BoomBaseMainframe";

export default class BoomBase {
    constructor() {
        this.group = new THREE.Group()
        this.addMainCylinders();
    }

    addMainCylinders() {
        this.mainCylinders = new BoomBaseMainframe().group;
        // this.mainCylinders.position.set(0.3,2,-0.05) // place in vehicle
        this.group.add(this.mainCylinders);
    }


    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}