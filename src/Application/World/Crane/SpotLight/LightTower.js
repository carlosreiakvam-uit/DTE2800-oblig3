import * as THREE from 'three'
import Application from '../../../Application.js'
import Rod from "./Rod.js";
import HeadLight from "./HeadLight.js";
import Glass from "./Glass.js";
import GUI from 'lil-gui';
import Circle from "../Underbody/Circle";

export default class LightTower {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.addRod();
        //this.addLantern();
    }

    addRod() {
        const frontBeamLeftbase = new Rod();
        frontBeamLeftbase.mesh.position.set(0.95, 1.94, 0.25);
        frontBeamLeftbase.mesh.scale.set(0.04, 0.01, 0.04);
        this.group.add(frontBeamLeftbase.mesh);

        const frontBeamLeft = new Rod();
        frontBeamLeft.mesh.position.set(0.95, 2.00, 0.25);
        frontBeamLeft.mesh.scale.set(0.02, 0.1, 0.02);
        this.group.add(frontBeamLeft.mesh);

        const frontSpotLightLeft = new HeadLight();
        frontSpotLightLeft.mesh.position.set(0.95, 2.05, 0.25);
        frontSpotLightLeft.mesh.rotation.set(0,0.122173085039786,Math.PI/2.5)
        frontSpotLightLeft.mesh.scale.set(0.07, 0.09, 0.07);
        this.group.add(frontSpotLightLeft.mesh);

        const frontSpotLightLeftGlass = new Glass();
        frontSpotLightLeftGlass.mesh.position.set(0.995, 2.04, 0.25);
        frontSpotLightLeftGlass.mesh.rotation.set(0,0.122173085039786,Math.PI/2.5)
        frontSpotLightLeftGlass.mesh.scale.set(0.05, 0.005, 0.05);
        this.group.add(frontSpotLightLeftGlass.mesh);

        const spotLightLeft = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        const spotLightRight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.setSpotLight(spotLightLeft, {x:5, y:0, z:-0.2}, {x:0.996, y:2.05, z:0.25});
        this.setSpotLight(spotLightRight, {x:5, y:0, z:1.5}, {x:0.996, y:2.05, z:0.62});

        const frontBeamRightbase = new Rod();
        frontBeamRightbase.mesh.position.set(0.95, 1.94, 0.62);
        frontBeamRightbase.mesh.scale.set(0.04, 0.01, 0.04);
        this.group.add(frontBeamRightbase.mesh);

        const frontBeamRight = new Rod();
        frontBeamRight.mesh.position.set(0.95, 2.00, 0.62);
        frontBeamRight.mesh.scale.set(0.02, 0.1, 0.02);
        this.group.add(frontBeamRight.mesh);

        const frontSpotLightRight = new HeadLight();
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

    // addBody() {
    //     this.mainBeam = new Beam();
    //     this.mainBeam.mesh.position.set(0, 0.35, 0);
    //     this.mainBeam.mesh.scale.set(1, 0.4, 2);
    //
    //     this.group.add(this.mainBeam.mesh);
    //
    //     this.rotatingPlate = new Circle();
    //     this.rotatingPlate.mesh.position.set(0, 0.65, 0);
    //     this.rotatingPlate.mesh.scale.set(0.4,0.25,0.4);
    //
    //     this.group.add(this.rotatingPlate.mesh);
    // }


    update() {
        // this.leftBelt.mesh.material.map.offset.setX(this.application.time.elapsed);
        // console.log(this.application.time.elapsed)
    }
}
