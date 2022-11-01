import * as THREE from 'three'
import Application from '../../../../Application.js'
import {deg2rad} from "../../../../Utils/Math.js";

export default class BoomBaseMainframe {
    constructor(mainLength, xAngle, zAngle) {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.group = new THREE.Group()

        this.yOffset = 1
        this.length = mainLength
        this.xRotAngle = xAngle // spread angle
        this.zRotAngle = zAngle

        this.setTextures()
        this.setMaterial()

        this.setMainCylinders()
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
            metalness: 0.1,
            roughness: 0.5
        })
    }

    setMainCylinders() {
        this.mainCylinderGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 20)
        this.group.add(
            this.mainBackNorth = this.genMainCyl('mainBackNorth', -this.zRotAngle, this.xRotAngle),
            this.mainBackSouth = this.genMainCyl('mainBackSouth', -this.zRotAngle, -this.xRotAngle),
            this.mainFrontNorth = this.genMainCyl('mainFrontNorth', this.zRotAngle, this.xRotAngle),
            this.mainFrontSouth = this.genMainCyl('mainFrontSouth', this.zRotAngle, -this.xRotAngle)
        )
    }


    genMainCyl(name, zRot, xRot, material = this.material, length = this.length) {
        let cyl = new THREE.Mesh(this.mainCylinderGeometry, material, name)
        cyl.name = name

        let dx = Math.cos(deg2rad(90 + zRot)) * length / 2
        let dy = (length - (Math.sin(deg2rad(90 + zRot)) * length) / 2)
        let dz = Math.cos(deg2rad(90 + xRot)) * length / 2

        cyl.rotation.z = deg2rad(zRot)
        cyl.rotation.x = deg2rad(xRot)
        cyl.position.x = dx
        cyl.position.y = this.yOffset - dy
        cyl.position.z = -dz

        cyl.receiveShadow = true
        cyl.castShadow = true
        return cyl
    }

}