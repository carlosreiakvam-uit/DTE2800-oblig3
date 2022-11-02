import * as THREE from 'three'
import Application from '../../../../Application.js'

export default class Circle {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources


        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()

    }

    setGeometry() {

        this.geometry = new THREE.CylinderGeometry(1, 1, 1, 50)
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

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }
}