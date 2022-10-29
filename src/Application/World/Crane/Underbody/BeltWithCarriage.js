import * as THREE from 'three'
import Belt from "./Belt.js";
import BeltCarriage from "./BeltCarriage.js";
import Circle from "./Circle.js";
import Beam from "./Beam.js";

export default class BeltWithCarriage {
    constructor() {
        this.group = new THREE.Group()
        this.addBelt();
        this.addBeltCarriage();
        this.addCarriageDetails();
        this.addWheels();
        this.group.scale.setZ(2);
    }

    addBelt() {
        this.belt = new Belt();
        this.group.add(this.belt.mesh);
    }

    addBeltCarriage() {
        this.beltCarriage = new BeltCarriage();
        this.beltCarriage.mesh.scale.setZ(0.4);
        this.beltCarriage.mesh.scale.multiplyScalar(0.95);
        this.beltCarriage.mesh.position.setZ(-0.2)
        this.group.add(this.beltCarriage.mesh);
    }

    addCarriageDetails() {
        const frontBeam = new Beam();
        frontBeam.mesh.position.set(3, 0.2, 0);
        frontBeam.mesh.scale.set(0.1, 2.2, 0.6);

        this.group.add(frontBeam.mesh);

        const backBeam = new Beam();
        backBeam.mesh.position.set(-3, 0.2, 0);
        backBeam.mesh.scale.set(0.1, 2.2, 0.6);

        this.group.add(backBeam.mesh);

        const frontMiddleBeam = new Beam();
        frontMiddleBeam.mesh.position.set(1, 0.9, 0);
        frontMiddleBeam.mesh.scale.set(0.1, 1, 0.6);

        this.group.add(frontMiddleBeam.mesh);

        const backMiddleBeam = new Beam();
        backMiddleBeam.mesh.position.set(-1, 0.9, 0);
        backMiddleBeam.mesh.scale.set(0.1, 1, 0.6);

        this.group.add(backMiddleBeam.mesh);
    }

    addWheels() {
        this.frontWheel = new Circle();
        this.frontWheel.mesh.position.set(5, 0, 0);
        this.frontWheel.mesh.scale.setY(0.8);
        this.frontWheel.mesh.scale.multiplyScalar(0.95);
        this.frontWheel.mesh.rotateX(Math.PI * 0.5);

        this.backWheel = new Circle();
        this.backWheel.mesh.position.set(-5, 0, 0);
        this.backWheel.mesh.scale.setY(0.8);
        this.backWheel.mesh.scale.multiplyScalar(0.95);
        this.backWheel.mesh.rotateX(Math.PI * 0.5);


        this.group.add(this.frontWheel.mesh);
        this.group.add(this.backWheel.mesh);
    }

    setPosition(x, y, z) {
        this.group.position.set(x, y, z)
    }

    setScale(scale) {
        this.group.scale.multiplyScalar(scale)
    }
}