import * as THREE from 'three'
import Application from "../../../../Application";
import BoomBaseMainframe from "./BoomBaseMainframe";

export default class BoomBase {
    constructor() {
        const application = new Application()
        this.group = new THREE.Group()
        this.addMainCylinders();
    }

    addMainCylinders() {
        this.mainCylinders = new BoomBaseMainframe().group;
        this.mainCylinders.position.y = 2
        this.group.add(this.mainCylinders);
    }


    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}