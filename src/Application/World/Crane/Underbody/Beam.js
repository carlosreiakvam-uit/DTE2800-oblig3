import * as THREE from 'three'
import Application from '../../../Application.js'

export default class Beam {
    constructor(name = '') {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources


        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh(name)

    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry()
    }

    setTextures() {
        this.textures = {}

        this.textures.color = this.resources.items.blackDirtyTexture
        this.textures.color.encoding = THREE.sRGBEncoding;
        this.textures.color.wrapS = THREE.RepeatWrapping;
        this.textures.color.wrapT = THREE.RepeatWrapping;
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
            map: this.textures.color,
            metalness: 0.01,
            roughness: 0.5
        })
    }

    setMesh(name) {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.mesh.name = name
    }
}