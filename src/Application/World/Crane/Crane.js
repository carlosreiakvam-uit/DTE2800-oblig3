import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import CraneHouse from "./CraneHouse";
import Application from '../../Application.js'
import {position} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Vector3} from "three";

export default class Crane {
    constructor() {
        const application = new Application()


        //TODO: trenger position stack eller lignende

        const craneGroup = new THREE.Group()

        const vehicleBody = new VehicleBody()
        vehicleBody.mesh.position.set(0, 0.5, 0)

        const craneHouse = new CraneHouse()
        craneHouse.mesh.position.set(0.5, 1, 0)


        craneGroup.add(vehicleBody.mesh, craneHouse.mesh)

        application.scene.add(craneGroup)
    }


}