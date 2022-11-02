import * as THREE from 'three'
import Application from '../../../Application.js'
import StaticBodyParts from "./BodyDetails/StaticBodyParts.js";


export default class VehicleBody {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()

        this.staticBodyParts = new StaticBodyParts();
        this.blender_vehicle = this.setModel()

        this.group.add(
            this.staticBodyParts.group,
            this.blender_vehicle
        )
    }

    setModel() {
        let blender_vehicle = this.resources.items.vehicle
        this.resources.resolveName('vehicle')
        this.model = blender_vehicle.scene
        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.set(0.9, 1, 0)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })

        return blender_vehicle.scene
    }

    update() {
        this.staticBodyParts.update();
        this.group.rotation.set(0, this.application.animations.craneRotation, 0)
    }
}