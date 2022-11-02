import Application from "../../../Application";
import * as THREE from "three";
import Bolt from "./Bolt";

export default class DynamicBolts {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'midBeamAndDrums'
        this.resources = this.application.resources

        this.AddBolts();
    }

    AddBolts() {
        const bolt1 = new Bolt();
        bolt1.mesh.position.set(1, 2.55, 0.05);
        bolt1.mesh.scale.set(0.03, 0.03, 0.03);
        this.group.add(bolt1.mesh);

    }

    update() {

    }
}