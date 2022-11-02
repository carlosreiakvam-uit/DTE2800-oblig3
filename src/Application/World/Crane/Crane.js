import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./body/Underbody/Underbody.js";
import Tower from "./Tower/Tower.js";
import CompleteBody from "./body/CompleteBody";


export default class Crane {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.underbody = new Underbody();
        this.vehicleBody = new CompleteBody();
        this.tower = new Tower()

        this.group.add(
            this.underbody.group,
            this.vehicleBody.group,
            this.tower.group
        )

        application.scene.add(this.group)
    }

    update() {
        this.underbody.update();
        this.vehicleBody.update();
        this.tower.update()
        this.group.position.setX(this.application.animations.cranePosition);
    }
}