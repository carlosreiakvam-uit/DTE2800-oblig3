import Application from "../../../Application";
import * as THREE from "three";

export default class Rod {
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
        this.geometry = new THREE.CylinderGeometry(1, 1, 1, 30, 30)
    }

    setTextures() {
        this.textures = {}

        //Få ny textur, glass
        this.textures.color = this.resources.items.blackDirtyTexture
        this.textures.color.encoding = THREE.sRGBEncoding;
        this.textures.color.wrapS = THREE.RepeatWrapping;
        this.textures.color.wrapT = THREE.RepeatWrapping;
    }

    setMaterial() {
        this.material = new THREE.MeshPhysicalMaterial({
            metalness: .9,
            roughness: .05,
            envMapIntensity: 0.9,
            clearcoat: 1,
            transparent: true,
// transmission: .95,
            opacity: .5,
            reflectivity: 0.2,
            refractionRatio: 0.985,
            ior: 0.9,
            side: THREE.DoubleSide,
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.mesh.name = 'headlightGlassMesh'
    }
}