import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import KeyPress from "../../Utils/KeyPress";


export default class Crane {
    constructor() {
        this.keypress = new KeyPress()
        this.application = new Application()
        this.craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();

        this.craneGroup.add(
            this.underbody.group,
            this.vehicleBody.group,
            //this.vehicleBody.model,

        )
        application.scene.add(this.craneGroup)
    }

    update() {
        this.underbody.update();
        this.vehicleBody.update();
        this.craneGroup.position.setX(this.application.animations.cranePosition);
    }
}