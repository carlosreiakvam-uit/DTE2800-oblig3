import * as THREE from 'three'
import BoomBase from "./BoomBase.js";

export default class BoomAssembled {
    constructor() {
        this.group = new THREE.Group()
        this.group.position.set(0.3, 2, -0.05) // initial position
        this.group.add(new BoomBase(2, 8, 8).group);
    }
}

