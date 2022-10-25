import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Coordinates {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        const axesHelper = new THREE.AxesHelper(5 );
        this.scene.add(axesHelper);

    }

}