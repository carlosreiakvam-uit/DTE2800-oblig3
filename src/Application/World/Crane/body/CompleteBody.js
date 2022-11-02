import * as THREE from 'three'
import Application from '../../../Application.js'
import BodyDetails from "./BodyDetails/BodyDetails.js";
import BlenderBody from "./BlenderBody.js";


export default class CompleteBody {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()
        this.group.name = 'completeBody'

        this.bodyDetails = new BodyDetails();
        this.blender_vehicle = new BlenderBody()

        this.group.add(
            this.bodyDetails.group,
            this.blender_vehicle.group
        )
    }


    update() {
        this.bodyDetails.update();
        this.group.rotation.set(0, this.application.animations.craneRotation, 0)
    }
}