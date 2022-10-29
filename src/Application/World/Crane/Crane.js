import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import {position} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Vector3} from "three";
import Belt from "./Underbody/Belt.js";
import Underbody from "./Underbody/Underbody.js";

export default class Crane {
    constructor() {
        const application = new Application()
        const craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();

        this.underbody = new Underbody();

        craneGroup.add(this.underbody.group)
        application.scene.add(craneGroup)
    }

    update() {
        this.underbody.update();
    }
}