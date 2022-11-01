import * as THREE from 'three'
import Application from '../../../Application.js'

export default class Belt {
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
        let path = new THREE.Path();
        path.absarc(5, 0, 1, Math.PI * 0.35, Math.PI * 1.5, true);
        path.absarc(-5, 0, 1, Math.PI * 1.5, Math.PI * 0.65, true);
        path.lineTo(-3, 1.5);
        path.lineTo(3, 1.5);
        path.closePath();

        let basePts = path.getSpacedPoints(200);

        this.geometry = new THREE.PlaneGeometry(1, 1, 200, 1);

        basePts.forEach((p, idx) => {
            this.geometry.attributes.position.setXYZ(idx, p.x, p.y, -0.5);
            this.geometry.attributes.position.setXYZ(idx + 201, p.x, p.y, 0.5);
        })
        this.geometry.computeVertexNormals()
    }

    setTextures() {
        this.textures = {}

        this.textures.color = this.resources.items.rustColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding;
        this.textures.color.repeat.set(2, 1);
        this.textures.color.wrapS = THREE.RepeatWrapping;
        this.textures.color.wrapT = THREE.RepeatWrapping;

        this.textures.alpha = this.resources.items.rustAlphaTexture
        this.textures.alpha.repeat.set(2, 1);
        this.textures.alpha.wrapS = THREE.RepeatWrapping;
        this.textures.alpha.wrapT = THREE.RepeatWrapping;
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
            map: this.textures.color,
            alphaMap: this.textures.alpha,
            transparent: true,
            metalness: 0.01,
            roughness: 0.5
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        // this.mesh.rotation.x = -Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.mesh.castShadow = true
        // this.scene.add(this.mesh)
    }
}