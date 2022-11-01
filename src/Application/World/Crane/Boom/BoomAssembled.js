import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";

export default class BoomAssembled {
    constructor() {
        this.group = new THREE.Group()
        this.group.position.set(0.3, 2, -0.05) // initial position
        const angle = 7

        let boomBase = new BoomEnd(2, angle, angle).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, angle, angle).group

        boomExtender.group.position.z = -0.25
        boomExtender.group.position.y = 0.99
        boomExtender.group.position.x = boomBase.position.x - 0.25

        boomTop.rotateX(deg2rad(180))
        boomTop.position.set(boomBase.position.x, boomExtender.length + 2 - 0.05, 0)

        this.group.rotateZ(deg2rad(-70))
        this.group.add(boomBase, boomExtender.group, boomTop);
    }
}

