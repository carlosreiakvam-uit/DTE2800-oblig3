import * as THREE from 'three'
import Application from '../../Application.js'


export default class VehicleBody {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources

        // Resource
        this.resource = this.resources.items.vehicle
        this.resources.resolveName('ape')
        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.set(0.9, 1, 0)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

}