import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import {position} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Vector3} from "three";

export default class Crane {
    constructor() {
        const application = new Application()
        const craneGroup = new THREE.Group()

        const vehicleBody = new VehicleBody()

        craneGroup.add(vehicleBody)
        application.scene.add(craneGroup)
    }


}