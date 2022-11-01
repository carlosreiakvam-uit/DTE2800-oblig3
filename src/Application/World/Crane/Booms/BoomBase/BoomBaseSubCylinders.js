import * as THREE from 'three'
import Application from '../../../../Application.js'
import {deg2rad} from "../../../../Utils/Math.js";

export default class BoomBaseSubCylinders {
    constructor(mainCylinderLength, xAngle, zAngle) {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.group = new THREE.Group()

        this.yOffset = 1
        this.length = mainCylinderLength
        this.xRotAngle = xAngle // spread angle
        this.zRotAngle = zAngle

        this.setTextures()
        this.setMaterial()
        this.setHorCylinders(2)
        this.setHorCylinders(1)

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

    setHorCylinders(height) {
        let material = this.material
        let yOffsetAdjustment = 0.06

        let squareLength1 = Math.cos(deg2rad(90 - this.zRotAngle)) * height * 2
        let geometry1 = new THREE.CylinderGeometry(0.02, 0.02, squareLength1, 20)
        let squareCyl1 = new THREE.Mesh(geometry1, material)
        let squareCyl2 = new THREE.Mesh(geometry1, material)

        let squareLength2 = Math.cos(deg2rad(90 - this.zRotAngle)) * height * 2
        let geometry2 = new THREE.CylinderGeometry(0.02, 0.02, squareLength2, 20)
        let squareCyl3 = new THREE.Mesh(geometry2, material)
        let squareCyl4 = new THREE.Mesh(geometry2, material)

        squareCyl1.rotation.z = deg2rad(90)
        squareCyl1.position.y = (height / 2) - yOffsetAdjustment
        squareCyl1.position.z = Math.cos(deg2rad(90 - this.zRotAngle)) * height

        squareCyl2.rotation.z = deg2rad(90)
        squareCyl2.position.y = (Math.sin(deg2rad(90 - (this.zRotAngle))) * height / 2) - yOffsetAdjustment
        squareCyl2.position.y = (height / 2) - yOffsetAdjustment
        squareCyl2.position.z = -Math.sin(deg2rad(this.xRotAngle)) * height

        squareCyl3.rotation.z = deg2rad(90)
        squareCyl3.rotation.y = deg2rad(90)
        squareCyl3.position.y = (height / 2) - yOffsetAdjustment
        squareCyl3.position.x = -Math.cos(deg2rad(90 + this.zRotAngle)) * height


        squareCyl4.rotation.z = deg2rad(90)
        squareCyl4.rotation.y = deg2rad(90)
        squareCyl4.position.y = (height / 2) - yOffsetAdjustment
        squareCyl4.position.x = Math.cos(deg2rad(90 + this.zRotAngle)) * height

        this.group.add(squareCyl1, squareCyl2, squareCyl3, squareCyl4)
    }

}

