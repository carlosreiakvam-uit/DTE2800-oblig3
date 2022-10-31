import * as THREE from 'three'
import BoomBase from "./BoomBase/BoomBase.js";

export default class BoomAssembled {
    constructor() {
        this.group = new THREE.Group()
        this.addBoomBase()
        this.group.position.set(0.3,2,-0.05)
    }

    addBoomBase() {
        this.boomBase = new BoomBase().group;
        this.group.add(this.boomBase);
    }


    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}