import * as THREE from 'three'
import BoomEnd from "./BoomEnd.js";
import BoomExtension from "./BoomExtension";
import {deg2rad} from "../../../Utils/Math";
import Application from "../../../Application";
import {assertPluginList} from "@babel/core/lib/config/validation/option-assertions";
import BoomWireAndHook from "./BoomWireAndHook";

export default class BoomAssembled {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.group = new THREE.Group()
        this.group.name = 'boomAssembled'
        this.group.position.set(0.3, 2, -0.05) // initial position
        const angle = 7

        let boomBase = new BoomEnd(2, angle, angle).group
        let boomExtender = new BoomExtension()
        let boomTop = new BoomEnd(2, angle, angle).group
        //let boomWireAndHook = new BoomWireAndHook().group

        boomExtender.group.position.set(-0.25, 0.99, boomBase.position.x - 0.25)

        boomTop.rotateX(deg2rad(180))
        boomTop.position.set(boomBase.position.x, boomExtender.length + 2 - 0.05, 0)

        // let platform = this.scene.getObjectByName('platform')

        this.group.rotateZ(deg2rad(-40))
        this.group.position.set(0.8, 2, -0.09)
        this.group.add(boomBase, boomExtender.group, boomTop, );

    }
}

