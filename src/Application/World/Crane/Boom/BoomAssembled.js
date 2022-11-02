import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";
import Application from "../../../Application";

export default class BoomAssembled {
    constructor(midBeam) {
        // this.platformPos = midBeam.group.getObjectByName('midBeamAndDrums').getObjectByName('platform').position
        this.platformPos = 0 // todo fix
        this.application = new Application()
        this.scene = this.application.scene
        this.group = new THREE.Group()
        this.group.name = 'boomAssembled'
        this.group.position.set(0.3, 2, -0.05) // initial position
        const thetaDeg = 7

        this.boomBase = new BoomEnd(2, thetaDeg, thetaDeg).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, thetaDeg, thetaDeg).group

        boomExtender.group.position.set(-0.25, 0.99, this.boomBase.position.x - 0.25)

        boomTop.rotateX(deg2rad(180)) // turn top boom upside down
        boomTop.position.set(this.boomBase.position.x, boomExtender.length + 2 - 0.05, 0)
        this.group.animations = {angle: 0}

        this.group.add(this.boomBase, boomExtender.group, boomTop);
    }

    update() {
        if (this.group.rotation.z < -1) {
            this.group.rotation.z = -1
        } else if (this.group.rotation.z > 0) {
            this.group.rotation.z = 0
        }
        if (this.group.rotation.z >= -1
            && this.group.rotation.z <= 0) {
            this.group.rotateZ(this.application.animations.boomRotation)
            this.group.position.set(this.platformPos.x, this.platformPos.y, this.platformPos.z)
            this.group.translateY(1)
            this.application.animations.boomRotation = 0
        }
    }

}

