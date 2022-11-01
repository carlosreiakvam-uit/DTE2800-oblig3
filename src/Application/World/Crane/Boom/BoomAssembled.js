import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";
import Application from "../../../Application";
import {assertPluginList} from "@babel/core/lib/config/validation/option-assertions";

export default class BoomAssembled {
    constructor(midBeam) {
        let platformPos = midBeam.group.getObjectByName('midBeamAndDrums').getObjectByName('platform').position
        this.application = new Application()
        this.scene = this.application.scene
        this.group = new THREE.Group()
        this.group.name = 'boomAssembled'
        this.group.position.set(0.3, 2, -0.05) // initial position
        const angle = 7

        let boomBase = new BoomEnd(2, angle, angle).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, angle, angle).group

        boomExtender.group.position.set(-0.25, 0.99, boomBase.position.x - 0.25)

        boomTop.rotateX(deg2rad(180))
        boomTop.position.set(boomBase.position.x, boomExtender.length + 2 - 0.05, 0)

        this.group.rotateZ(deg2rad(-10))
        this.group.position.set(platformPos.x, platformPos.y, platformPos.z)
        this.group.translateY(1)
        this.group.add(boomBase, boomExtender.group, boomTop);
    }
}

