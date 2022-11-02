import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";


export default class Crane {
    constructor() {
        this.application = new Application()
        this.craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();

        this.craneGroup.add(
            this.underbody.group,
            this.vehicleBody.group,
        )
        application.scene.add(this.craneGroup)
    }

    update() {
        this.underbody.update();
        this.vehicleBody.update();
        this.craneGroup.position.setX(this.application.animations.cranePosition);
    }
}