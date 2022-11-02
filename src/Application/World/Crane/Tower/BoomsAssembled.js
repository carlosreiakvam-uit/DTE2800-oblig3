import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";
import Application from "../../../Application";

export default class BoomsAssembled {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.group = new THREE.Group()
        this.group.name = 'boomAssembled'
        this.group.position.set(0.3, 2, -0.05) // initial position
        this.totalLength = 2 + 2 + 5
        const thetaDeg = 7

        this.boomBase = new BoomEnd(2, thetaDeg, thetaDeg).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, thetaDeg, thetaDeg).group

        boomExtender.group.position.set(-0.25, 0.99, this.boomBase.position.x - 0.25)

        boomTop.rotateX(deg2rad(180)) // turn top boom upside down
        boomTop.position.set(this.boomBase.position.x, boomExtender.length + 2 - 0.05, 0)
        this.group.animations = {angle: 0}
        this.group.translateX(0.9)
        this.group.translateY(-0.2)
        this.group.translateZ(-0.02)
        this.group.rotation.set(0, 0, -Math.PI / 6);
        this.group.add(this.boomBase, boomExtender.group, boomTop);
    }

    update() {
        let platformPos = this.application.scene.children[3].children[1].children[0].getObjectByName('platform').position
        if (this.group.rotation.z >= -1 && this.group.rotation.z <= 0) {
            this.changeBoomRotation(platformPos, this.application.animations.boomRotation)
        }
        if (this.group.rotation.z < -1) {
            this.changeBoomRotation(platformPos, -1)
        } else if (this.group.rotation.z > 0) {
            this.changeBoomRotation(platformPos, 0)
        }
    }

    changeBoomRotation(platformPos, zRot) {
        this.group.rotation.set(0, 0, zRot)
        this.group.position.set(platformPos.x, platformPos.y, platformPos.z)
        this.group.translateY(1)

    }

}

