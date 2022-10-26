import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import CraneHouse from "./CraneHouse";
import Application from '../../Application.js'
import {position} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Vector3} from "three";
import Belt from "./Belt.js";

export default class Crane {
    constructor() {
        const application = new Application()
        this.clock = new THREE.Clock();

        //TODO: trenger position stack eller lignende

        const craneGroup = new THREE.Group()

        const vehicleBody = new VehicleBody()
        vehicleBody.mesh.position.set(0, 0.3, 0)
        vehicleBody.mesh.scale.set(1,0.3,2);

        const craneHouse = new CraneHouse()
        craneHouse.mesh.position.set(2, 1, 0)

        const rightBelt = new Belt()
        rightBelt.mesh.position.set(0, 0.3, 1.5);
        rightBelt.mesh.scale.set(0.3, 0.2, 0.2);

        this.leftBelt = new Belt();
        this.leftBelt.mesh.position.set(0, 0.3, -1.5);
        this.leftBelt.mesh.scale.set(0.3, 0.2, 0.2);


        craneGroup.add(vehicleBody.mesh, craneHouse.mesh, rightBelt.mesh, this.leftBelt.mesh)

        application.scene.add(craneGroup)
    }

}