import * as THREE from 'three'
import BoomBase from "./BoomBase/BoomBase.js";
import {length} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

export default class BoomAssembled {
    constructor() {
        this.group = new THREE.Group()
        this.addBoomBase()
        this.group.position.set(0.3, 2, -0.05)
    }

    addBoomBase() {
        let xAngle = 10
        let zAngle = -8
        let length = 2

        this.boomBase = new BoomBase(length, xAngle, zAngle).group;
        this.group.add(this.boomBase);
    }


    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}