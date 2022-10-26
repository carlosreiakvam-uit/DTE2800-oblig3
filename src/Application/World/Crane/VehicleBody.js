import * as THREE from 'three'
import Application from '../../Application.js'
import {Vector3} from "three";

export default class VehicleBody {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
        this.height = 1

    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry(1, this.height, 1)
    }

    setTextures() {
        this.textures = {}

        this.textures.color = this.resources.items.grassColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            // map: this.textures.color,
            // normalMap: this.textures.normal
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        // this.mesh.rotation.x = -Math.PI * 0.5
        this.mesh.receiveShadow = true
        // this.scene.add(this.mesh)
    }
}