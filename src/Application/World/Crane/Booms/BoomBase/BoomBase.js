import * as THREE from 'three'
import Application from "../../../../Application";
import BoomBaseMainframe from "./BoomBaseMainframe";
import BoomBaseSubCylinders from "./BoomBaseSubCylinders";

export default class BoomBase {
    constructor(length, xAngle,zAngle) {
        this.group = new THREE.Group()
        this.xAngle = xAngle
        this.zAngle = zAngle
        this.mainLength = length

        this.mainCylinders = new BoomBaseMainframe(this.mainLength, this.xAngle, this.zAngle).group
        this.subCylinders = new BoomBaseSubCylinders(this.mainLength, this.xAngle, this.zAngle).group

        this.group.add(this.mainCylinders, this.subCylinders);
    }

}