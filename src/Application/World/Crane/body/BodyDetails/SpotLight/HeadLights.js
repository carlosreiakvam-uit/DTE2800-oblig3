import * as THREE from 'three'
import Application from '../../../../../Application.js'
import HeadLight from "./HeadLight.js";

export default class HeadLights {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.addLights();
    }


    update() {
        this.leftLight.update()
        this.rightLight.update()
    }

    addLights() {
        this.leftLight = new HeadLight()
        this.leftLight.group.scale.multiplyScalar(0.15);
        this.leftLight.group.position.set(0.9,1.93,0.6)

        this.group.add(this.leftLight.group);

        this.rightLight = new HeadLight()
        this.rightLight.group.scale.multiplyScalar(0.15);
        this.rightLight.group.position.set(0.9,1.93,0.28)

        this.group.add(this.rightLight.group);
    }
}