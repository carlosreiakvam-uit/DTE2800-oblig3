import * as THREE from 'three'
import Application from '../../../../Application.js'
import Belt from "./Belt.js";
import Circle from "./Circle.js";
import BeltCarriage from "./BeltCarriage.js";
import BeltWithCarriage from "./BeltWithCarriage.js";
import Beam from "./Beam.js";

export default class Underbody {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.clock = new THREE.Clock();

        this.addBelts();
        this.addBody();
    }

    addBelts() {
        this.rightBelt = new BeltWithCarriage()
        this.rightBelt.setPosition(0, 0.31, 1.2);
        this.rightBelt.setScale(0.3);

        this.leftBelt = new BeltWithCarriage()
        this.leftBelt.setPosition(0, 0.31, -1.2);
        this.leftBelt.setScale(0.3);

        this.group.add(this.rightBelt.group);
        this.group.add(this.leftBelt.group);
    }

    addBody() {
        this.mainBeam = new Beam('underBodyBeam');
        this.mainBeam.mesh.position.set(0, 0.35, 0);
        this.mainBeam.mesh.scale.set(1, 0.4, 2);

        this.group.add(this.mainBeam.mesh);

        this.rotatingPlate = new Circle();
        this.rotatingPlate.mesh.position.set(0, 0.65, 0);
        this.rotatingPlate.mesh.scale.set(0.4, 0.25, 0.4);

        this.group.add(this.rotatingPlate.mesh);
    }


    update() {
        this.leftBelt.belt.mesh.material.map.offset.x = this.application.animations.beltRotation;
        // console.log(this.application.time.elapsed)
    }
}