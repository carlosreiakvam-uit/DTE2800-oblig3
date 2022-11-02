import Application from "../../../Application";
import * as THREE from "three";

export default class Rod {
    constructor() {
        this.application = new Application()

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.CylinderGeometry(1, 1, 1, 30, 30)
    }


    setMaterial() {
//         this.material = new THREE.MeshPhysicalMaterial({
//             metalness: .9,
//             roughness: .05,
//             envMapIntensity: 0.9,
//             clearcoat: 1,
//             transparent: true,
// // transmission: .95,
//             opacity: .5,
//             reflectivity: 0.2,
//             refractionRatio: 0.985,
//             ior: 0.9,
//             side: THREE.DoubleSide,
//         })

        this.material = new THREE.ShaderMaterial(
            {
                uniforms:
                    {
                        "c":   { type: "f", value: 1 },
                        "p":   { type: "f", value: this.application.animations.headLightsIntensity },
                        glowColor: { type: "c", value: new THREE.Color(0xffff00) },
                        viewVector: { type: "v3", value: this.application.camera.instance.position }
                    },
                vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
                fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
                side: THREE.FrontSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            }   );
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
    }

    update() {
        this.mesh.visible = this.application.animations.headLightsOn;
        this.material.uniforms[ "p" ].value = this.application.animations.headLightsIntensity;
        this.material.uniforms.glowColor.value.setHex(this.application.animations.headLightsColor)
        this.material.uniforms.viewVector.value =
            new THREE.Vector3().subVectors( this.application.camera.instance.position, this.mesh.position );
    }
}