import Application from "../../../Application";
import * as THREE from "three";
import Drum from "../body/MidBeamsAndDrums/Drum.js";

export default class WireFromTopOfBoomToBeam {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'wireFromTopOfBoom'
        this.AddWire();
        this.group.position.set(1.15,5.6,0.05);
        this.group.rotateZ(-Math.PI/2.89);
    }

    AddWire() {
        const lineRight = new Drum();
        lineRight.mesh.position.set(0,0 , 0.06);
        lineRight.mesh.scale.set(0.01, 6.35, 0.01);
        lineRight.mesh.rotateX(0.02)
        this.group.add(lineRight.mesh);

        const lineLeft = new Drum();
        lineLeft.mesh.position.set(0,0 , -0.3);
        lineLeft.mesh.scale.set(0.01, 6.35, 0.01);
        lineLeft.mesh.rotateX(-0.02)
        this.group.add(lineLeft.mesh);
    }

    update() {

    }
}