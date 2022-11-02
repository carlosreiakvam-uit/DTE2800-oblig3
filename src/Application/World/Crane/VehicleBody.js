import * as THREE from 'three'
import Application from '../../Application.js'
import StaticBodyParts from "./BodyDetails/StaticBodyParts.js";
import MovableTowerParts from "./BodyDetails/MovableTowerParts";


export default class VehicleBody {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()

        this.movableTowerParts = new MovableTowerParts();
        this.staticBodyParts = new StaticBodyParts();

        // Resource
        this.setModel()

        this.group.add(
            this.staticBodyParts.group,
            this.movableTowerParts.group,
        )
    }

    setModel() {
        this.resource = this.resources.items.vehicle
        this.resources.resolveName('ape')
        this.model = this.resource.scene
        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.set(0.9, 1, 0)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })

        this.group.add(this.model)
    }

    update() {
        this.staticBodyParts.update();
        this.movableTowerParts.update();
        this.group.rotation.set(0, this.application.animations.craneRotation, 0)
    }
}