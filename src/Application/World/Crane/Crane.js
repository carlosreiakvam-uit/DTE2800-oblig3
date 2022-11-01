import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import SpreadTower from "./tower/SpreadTower/SpreadTower.js";
import LightTower from "./SpotLight/LightTower.js";

export default class Crane {
    constructor() {
        this.application = new Application()
        this.craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();
        this.lightTower = new LightTower();

        this.spreadTower = new SpreadTower()
        // this.spreadTower.group.position.set(1.5, 1.6, 0.08)
        this.spreadTower.group.position.set(4, 1, 0)


        this.craneGroup.add(
            this.underbody.group,
            this.vehicleBody.model,
            this.lightTower.group,
            this.spreadTower.group)
        application.scene.add(this.craneGroup)
        console.log(application.scene)
    }

    update() {
        this.underbody.update();
        this.craneGroup.position.setX(this.application.animations.cranePosition);
    }
}