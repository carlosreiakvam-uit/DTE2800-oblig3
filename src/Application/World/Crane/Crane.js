import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import BoomBase from "./Booms/BoomBase/SpreadTower.js";

export default class Crane {
    constructor() {
        const application = new Application()
        const craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();
        this.boomBase = new BoomBase()

        craneGroup.add(
            this.underbody.group,
            this.vehicleBody.model,
            this.boomBase.group)
        application.scene.add(craneGroup)
    }

    update() {
        this.underbody.update();
    }
}