import * as THREE from 'three'
import Application from '../../../../Application.js'
import {cylHyp, cylX, deg2rad} from "../../../../Utils/Math.js";

export default class MainCylinders {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources

        this.group = new THREE.Group()


        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMeshes()

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
    }

    setMeshes() {
        const sa = 10 // spread angle
        const height = 2.5
        let main_cylinders = []
        const backAngle = 20
        const frontAngle = 30

        const backCylLength = cylHyp(backAngle, height)
        const backCylXTrans = cylX(backAngle, backCylLength)

        const frontCylLength = cylHyp(frontAngle, height)
        const frontCylXTrans = cylX(frontCylLength, backCylLength)

        this.backCylinderGeo = new THREE.CylinderGeometry(0.03, 0.03, backCylLength, 20)
        this.frontCylinderGeo = new THREE.CylinderGeometry(0.03, 0.03, frontCylLength, 20)

        let mainBackNorth = new THREE.Mesh(this.backCylinderGeo, this.material)
        mainBackNorth.position.z = -0.4
        mainBackNorth.rotation.z = deg2rad(-backAngle)
        mainBackNorth.rotation.x = deg2rad(-sa)
        mainBackNorth.position.x = mainBackNorth.position.x - backCylXTrans
        mainBackNorth.position.y = 0.5

        let mainBackSouth = new THREE.Mesh(this.backCylinderGeo, this.material)
        mainBackSouth.position.z = 0.1
        mainBackSouth.rotation.z = deg2rad(-backAngle)
        mainBackSouth.rotation.x = deg2rad(sa)
        mainBackSouth.position.x = mainBackSouth.position.x - backCylXTrans
        mainBackSouth.position.y = 0.5

        let mainFrontNorth = new THREE.Mesh(this.frontCylinderGeo, this.material)
        mainFrontNorth.position.z = -0.4
        mainFrontNorth.rotation.z = deg2rad(-frontAngle)
        mainFrontNorth.rotation.x = deg2rad(-sa)
        // mainFrontNorth.position.x = mainFrontNorth.position.x - frontCylXTrans
        mainFrontNorth.position.x = -0.5
        mainFrontNorth.position.y = 0.5

        let mainFrontSouth = new THREE.Mesh(this.frontCylinderGeo, this.material)
        mainFrontSouth.position.z = 0.1
        mainFrontSouth.rotation.z = deg2rad(-frontAngle)
        mainFrontSouth.rotation.x = deg2rad(sa)
        // mainFrontSouth.position.x = - frontCylXTrans
        mainFrontSouth.position.x = -0.5
        mainFrontSouth.position.y = 0.5


        main_cylinders.push(mainBackNorth, mainBackSouth, mainFrontSouth, mainFrontNorth)

        for (let i = 0; i < main_cylinders.length; i++) {
            main_cylinders[i].receiveShadow = true
            main_cylinders[i].castShadow = true
            this.group.add(main_cylinders[i])
        }

    }
}