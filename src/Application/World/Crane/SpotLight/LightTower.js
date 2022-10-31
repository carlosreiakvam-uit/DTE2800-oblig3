import * as THREE from 'three'
import Application from '../../../Application.js'
import BeltWithCarriage from "../Underbody/BeltWithCarriage";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";
import BeltCarriage from "../Underbody/BeltCarriage";
import Rod from "./Rod.js";
import HeadLight from "./HeadLight";

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
        frontSpotLightLeft.mesh.rotation.set(0,0,3.14/2)
        frontSpotLightLeft.mesh.scale.set(0.07, 0.09, 0.07);
        this.group.add(frontSpotLightLeft.mesh);

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
        frontSpotLightRight.mesh.rotation.set(0,0,3.14/2)
        frontSpotLightRight.mesh.scale.set(0.07, 0.09, 0.07);
        this.group.add(frontSpotLightRight.mesh);


        // const backBeam = new Beam();
        // backBeam.mesh.position.set(-30, 0.2, 0);
        // backBeam.mesh.scale.set(0.1, 2.2, 0.6);
        //
        // this.group.add(backBeam.mesh);
        //
        // const frontMiddleBeam = new Beam();
        // frontMiddleBeam.mesh.position.set(10, 0.9, 0);
        // frontMiddleBeam.mesh.scale.set(0.1, 1, 0.6);
        //
        // this.group.add(frontMiddleBeam.mesh);
        //
        // const backMiddleBeam = new Beam();
        // backMiddleBeam.mesh.position.set(-10, 0.9, 0);
        // backMiddleBeam.mesh.scale.set(0.1, 1, 0.6);
        //
        // this.group.add(backMiddleBeam.mesh);
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
