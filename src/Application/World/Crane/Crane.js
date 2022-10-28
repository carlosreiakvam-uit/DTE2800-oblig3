import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import CraneHouse from "./CraneHouse";
import Application from '../../Application.js'
import {position} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Vector3} from "three";

export default class Crane {
    constructor() {
        const application = new Application()
        const items = application.resources.items

        const craneGroup = new THREE.Group()

        const vehicleBody = new VehicleBody()



        application.scene.add(vehicleBody)
    }


}