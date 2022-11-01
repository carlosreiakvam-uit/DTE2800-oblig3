import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";

export default class Tower {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.spotLightLeft = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.spotLightRight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        //this.addMainBeams();
    }

    addMainBeams() {
        const beam4 = new Circle();
        beam4.mesh.position.set(0.5, 2.8, 0.14);
        beam4.mesh.scale.set(0.05, 4, 0.05);
        beam4.mesh.rotation.set(0, 0, -Math.PI / 4);
        this.group.add(beam4.mesh);


    }

    update() {
        this.spotLightLeft.isLight = this.application.animations.headLightsOn;
        this.spotLightRight.isLight = this.application.animations.headLightsOn;
    }
}