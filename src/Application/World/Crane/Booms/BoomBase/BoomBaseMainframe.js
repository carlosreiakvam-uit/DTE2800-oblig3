import * as THREE from 'three'
import Application from '../../../../Application.js'
import {deg2rad} from "../../../../Utils/Math.js";

export default class BoomBaseMainframe {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.group = new THREE.Group()

        this.yOffset = 1
        this.spreadAngle = 10 // spread angle
        this.length = 2
        this.mainAngel = -15

        this.setTextures()
        this.setMaterial()

        this.setMainCylinders()
        this.setSquareTopCylinders()
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
            this.mainBackNorth = this.genMainCyl('mainBackNorth', -this.mainAngel, this.spreadAngle),
            this.mainBackSouth = this.genMainCyl('mainBackSouth', -this.mainAngel, -this.spreadAngle),
            this.mainFrontNorth = this.genMainCyl('mainFrontNorth', this.mainAngel, this.spreadAngle),
            this.mainFrontSouth = this.genMainCyl('mainFrontSouth', this.mainAngel, -this.spreadAngle)
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

    setSquareTopCylinders(material = this.material) {
        let yOffsetAdjustment = 0.06
        let squareLength1 = Math.cos(deg2rad(90 - this.mainAngel)) * this.length * 2
        let squareLength2 = Math.cos(deg2rad(90 - this.spreadAngle)) * this.length * 2

        let geometry1 = new THREE.CylinderGeometry(0.03, 0.03, squareLength1, 20)
        let squareCyl1 = new THREE.Mesh(geometry1, material)
        let squareCyl2 = new THREE.Mesh(geometry1, material)

        let geometry2 = new THREE.CylinderGeometry(0.03, 0.03, squareLength2, 20)
        let squareCyl3 = new THREE.Mesh(geometry2, material)
        let squareCyl4 = new THREE.Mesh(geometry2, material)

        squareCyl1.rotation.z = deg2rad(90)
        squareCyl1.position.y = (Math.sin(deg2rad(90 - (this.mainAngel))) * this.length / 2) - yOffsetAdjustment
        squareCyl1.position.z = Math.sin(deg2rad(this.spreadAngle)) * this.length

        squareCyl2.rotation.z = deg2rad(90)
        squareCyl2.position.y = (Math.sin(deg2rad(90 - (this.mainAngel))) * this.length / 2) - yOffsetAdjustment
        squareCyl2.position.z = -Math.sin(deg2rad(this.spreadAngle)) * this.length

        squareCyl3.rotation.z = deg2rad(90)
        squareCyl3.rotation.y = deg2rad(90)
        squareCyl3.position.y = (Math.sin(deg2rad(90 - (this.mainAngel))) * this.length / 2) - yOffsetAdjustment
        squareCyl3.position.x = -Math.cos(deg2rad(this.mainAngel)) * this.length / 4


        squareCyl4.rotation.z = deg2rad(90)
        squareCyl4.rotation.y = deg2rad(90)
        squareCyl4.position.y = (Math.sin(deg2rad(90 - (this.mainAngel))) * this.length / 2) - yOffsetAdjustment
        squareCyl4.position.x = Math.cos(deg2rad(this.mainAngel)) * this.length / 4
        console.log(Math.cos(deg2rad(this.mainAngel)) * this.length / 2)

        this.group.add(squareCyl1, squareCyl2, squareCyl3, squareCyl4)
    }
}