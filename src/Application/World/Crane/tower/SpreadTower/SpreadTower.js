import * as THREE from 'three'
import MainCylinders from "./MainCylinders.js";
import Application from "../../../../Application";

export default class SpreadTower {
    constructor() {
        const application = new Application()
        this.group = new THREE.Group()
        this.addMainCylinders();
    }

    addMainCylinders() {
        this.mainCylinders = new MainCylinders().group;
        //this.group.add(this.mainCylinders);
    }


    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}