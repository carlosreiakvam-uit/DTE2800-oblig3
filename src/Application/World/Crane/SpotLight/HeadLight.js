import * as THREE from 'three'
import Application from '../../../Application.js'
import Rod from "./Rod.js";
import CraneSpotLight from "./CraneSpotLight.js";
import Glass from "./Glass.js";
import GUI from 'lil-gui';
import Circle from "../Underbody/Circle";

export default class HeadLight {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.spotLightLeft = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.spotLightRight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.addLightTowers();
    }

    addLightTowers() {
        const frontBeamLeftbase = new Rod();
        frontBeamLeftbase.mesh.position.set(0.95, 1.94, 0.25);
        frontBeamLeftbase.mesh.scale.set(0.04, 0.01, 0.04);
        this.group.add(frontBeamLeftbase.mesh);

        const frontBeamLeft = new Rod();
        frontBeamLeft.mesh.position.set(0.95, 2.00, 0.25);
        frontBeamLeft.mesh.scale.set(0.02, 0.1, 0.02);
        this.group.add(frontBeamLeft.mesh);

        const frontSpotLightLeft = new CraneSpotLight();
        frontSpotLightLeft.mesh.position.set(0.95, 2.05, 0.25);
        frontSpotLightLeft.mesh.rotation.set(0,0.122173085039786,Math.PI/2.5)
        frontSpotLightLeft.mesh.scale.set(0.07, 0.09, 0.07);
        this.group.add(frontSpotLightLeft.mesh);

        const frontSpotLightLeftGlass = new Glass();
        frontSpotLightLeftGlass.mesh.position.set(0.995, 2.04, 0.25);
        frontSpotLightLeftGlass.mesh.rotation.set(0,0.122173085039786,Math.PI/2.5)
        frontSpotLightLeftGlass.mesh.scale.set(0.05, 0.005, 0.05);
        this.group.add(frontSpotLightLeftGlass.mesh);

        this.setSpotLight(this.spotLightLeft, {x:5, y:0, z:-0.2}, {x:0.996, y:2.05, z:0.25});
        this.setSpotLight(this.spotLightRight, {x:5, y:0, z:1.5}, {x:0.996, y:2.05, z:0.62});

        const frontBeamRightbase = new Rod();
        frontBeamRightbase.mesh.position.set(0.95, 1.94, 0.62);
        frontBeamRightbase.mesh.scale.set(0.04, 0.01, 0.04);
        this.group.add(frontBeamRightbase.mesh);

        const frontBeamRight = new Rod();
        frontBeamRight.mesh.position.set(0.95, 2.00, 0.62);
        frontBeamRight.mesh.scale.set(0.02, 0.1, 0.02);
        this.group.add(frontBeamRight.mesh);

        const frontSpotLightRight = new CraneSpotLight();
        frontSpotLightRight.mesh.position.set(0.95, 2.05, 0.62);
        frontSpotLightRight.mesh.rotation.set(0,-0.122173085039786,Math.PI/2.5)
        frontSpotLightRight.mesh.scale.set(0.07, 0.09, 0.07);
        this.group.add(frontSpotLightRight.mesh);

        const frontSpotLightRightGlass = new Glass();
        frontSpotLightRightGlass.mesh.position.set(0.995, 2.04, 0.62);
        frontSpotLightRightGlass.mesh.rotation.set(0,-0.122173085039786,Math.PI/2.5)
        frontSpotLightRightGlass.mesh.scale.set(0.05, 0.005, 0.05);
        this.group.add(frontSpotLightRightGlass.mesh);
    }

    setSpotLight(spotLight, targetPosition, lightPosition) {
        console.log(spotLight)
        let lilGui = new GUI();
        spotLight.target.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
        spotLight.position.set(lightPosition.x, lightPosition.y, lightPosition.z);

        spotLight.visible = true;
        spotLight.castShadow = true;

        this.group.add(spotLight);
        this.group.add(spotLight.target);
        // Viser lyskilden:
        const spotLightHelper = new THREE.SpotLightHelper( spotLight );
        spotLightHelper.visible = false;
        this.group.add( spotLightHelper );
        // Viser lyskildekamera (hva lyskilden "ser")
        const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
        spotLightCameraHelper.visible = true;
        this.group.add(spotLightCameraHelper);
        //lil-gui:
        const spotFolder = lilGui.addFolder( 'Spotlight' );
        spotFolder.add(spotLight, 'visible').name("On/Off").onChange(value => {
            spotLightHelper.visible = value;
            spotLightCameraHelper.visible = value;
        });
        spotFolder.add(spotLight, 'intensity').min(0).max(1).step(0.01).name("Intensity");
        spotFolder.addColor(spotLight, 'color').name("Color");
    }

    update() {
        this.spotLightLeft.isLight = this.application.animations.headLightsOn;
        this.spotLightRight.isLight = this.application.animations.headLightsOn;
    }
}
