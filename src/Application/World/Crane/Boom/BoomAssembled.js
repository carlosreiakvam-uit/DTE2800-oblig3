import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";
import Application from "../../../Application";
import {assertPluginList} from "@babel/core/lib/config/validation/option-assertions";

export default class BoomAssembled {
    constructor(midBeam) {
        this.platformPos = midBeam.group.getObjectByName('midBeamAndDrums').getObjectByName('platform').position
        this.application = new Application()
        this.scene = this.application.scene
        this.group = new THREE.Group()
        this.group.name = 'boomAssembled'
        this.group.position.set(0.3, 2, -0.05) // initial position
        const thetaDeg = 7

        let boomBase = new BoomEnd(2, thetaDeg, thetaDeg).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, thetaDeg, thetaDeg).group

        boomExtender.group.position.set(-0.25, 0.99, boomBase.position.x - 0.25)

        boomTop.rotateX(deg2rad(180))
        boomTop.position.set(boomBase.position.x, boomExtender.length + 2 - 0.05, 0)

        // this.group.position.set(platformPos.x, platformPos.y, platformPos.z)
        this.group.add(boomBase, boomExtender.group, boomTop);
    }

    update() {
        this.group.rotateZ(this.application.animations.craneRotation)
        this.group.position.set(this.platformPos.x, this.platformPos.y, this.platformPos.z)
        this.group.translateY(1)
    }

}

