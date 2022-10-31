import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import SpreadTower from "./tower/SpreadTower/SpreadTower.js";

export default class Crane {
    constructor() {
        const application = new Application()
        const craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();

        this.underbody = new Underbody();

        this.spreadTower = new SpreadTower()
        // this.spreadTower.group.position.set(1.5, 1.6, 0.08)
        this.spreadTower.group.position.set(4, 1, 0)


        craneGroup.add(
            this.underbody.group,
            this.vehicleBody.model,
            this.spreadTower.group)
        application.scene.add(craneGroup)
        console.log(application.scene)
    }

    update() {
        this.underbody.update();
    }
}