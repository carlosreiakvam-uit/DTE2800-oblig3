import * as THREE from 'three'
import Application from "../../../../Application.js";

export default class BeltCarriage {
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
        let shape = new THREE.Shape();
        shape.absarc(5, 0, 1, Math.PI * 0.35, Math.PI * 1.5, true);
        shape.absarc(-5, 0, 1, Math.PI * 1.5, Math.PI * 0.65, true);
        shape.lineTo(-3, 1.5);
        shape.lineTo(3, 1.5);
        shape.closePath();

        const extrudeSettings = {
            depth: 1,
            bevelEnabled: false
        };

        this.geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
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
        this.mesh.receiveShadow = true
        this.mesh.castShadow = true
    }
}