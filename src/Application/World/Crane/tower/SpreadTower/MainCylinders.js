import * as THREE from 'three'
import Application from '../../../../Application.js'
import {deg2rad, rad2deg} from "../../../../Utils/Math.js";

export default class MainCylinders {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.yOffset = 1

        this.group = new THREE.Group()

        this.spreadAngle = 10 // spread angle
        this.length = 2
        this.backAngle = 20
        this.frontAngle = 40

        this.setGeometry()
        this.setTextures()
        this.setMaterial()

        this.setMainCylinders()
        this.setSquareTopCylinders()

    }

    setGeometry() {
        this.mainCylinderGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 20)
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
        this.yellowMat = new THREE.MeshStandardMaterial({
            color: 0xffff12
        })
        this.redMat = new THREE.MeshStandardMaterial({
            color: 0xff0012
        })
    }

    setMainCylinders() {
        let mainBackNorth = this.genMainCyl('mainBackNorth', -this.backAngle, this.spreadAngle)
        let mainBackSouth = this.genMainCyl('mainBackSouth', -this.backAngle, -this.spreadAngle)
        let mainFrontNorth = this.genMainCyl('mainFrontNorth', -this.frontAngle, this.spreadAngle)
        let mainFrontSouth = this.genMainCyl('mainFrontSouth', -this.frontAngle, -this.spreadAngle)

        this.group.add(mainBackNorth, mainBackSouth, mainFrontNorth, mainFrontSouth)
    }


    genMainCyl(name, zRot, xRot, material = this.material, length = this.length) {
        let cyl = new THREE.Mesh(this.mainCylinderGeometry, material, name)

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

    setSquareTopCylinders(material = this.redMat) {
        console.log(this.group.getObjectByName('mainBackNorth'), true)
        let squareLength = 0.5
        let boxCylinderGeometry = new THREE.CylinderGeometry(0.03, 0.03, squareLength, 20)
        let cyl = new THREE.Mesh(boxCylinderGeometry, material)
        let a = deg2rad(90 - (this.frontAngle - this.frontAngle))
        let aNormal = Math.sin(a) - Math.cos(a)

        let dx = Math.cos(a) * this.length
        let dy = Math.sin(a) * this.length

        cyl.rotation.z = aNormal
        cyl.position.x = dx
        cyl.position.y = dy

        this.group.add(cyl)
    }
}