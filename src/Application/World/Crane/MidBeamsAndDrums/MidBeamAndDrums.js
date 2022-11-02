import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../body/Underbody/Beam";
import Circle from "../body/Underbody/Circle";
import Rod from "../SpotLight/Rod";
import Drum from "./Drum";
import WhiteStuffAroundDrums from "./WhiteStuffAroundDrums";

export default class MidBeamAndDrums {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'midBeamAndDrums'
        this.AddBeamsDrumsAndWires();
    }

    AddBeamsDrumsAndWires() {

        const beam1 = new Beam();
        beam1.mesh.position.set(-.6, 2.55, 0.05);
        beam1.mesh.scale.set(0.15, 4, 0.07);
        beam1.mesh.rotation.set(0, 0, Math.PI / 5);
        this.group.add(beam1.mesh);

        const beam2 = new Beam();
        beam2.mesh.position.set(-.6, 2.55, -0.2);
        beam2.mesh.scale.set(0.15, 4, 0.07);
        beam2.mesh.rotation.set(0, 0, Math.PI / 5);
        this.group.add(beam2.mesh);

        const beam3 = new Circle();
        beam3.mesh.position.set(0.25, 2.7, -0.3);
        beam3.mesh.scale.set(0.05, 4.2, 0.05);
        beam3.mesh.rotation.set(0, 0, -Math.PI / 3);
        beam3.mesh.name = 'beam3'
        this.group.add(beam3.mesh);

        const beam4 = new Circle();
        beam4.mesh.position.set(0.25, 2.7, 0.14);
        beam4.mesh.scale.set(0.05, 4.2, 0.05);
        beam4.mesh.rotation.set(0, 0, -Math.PI / 3);
        beam4.mesh.name = 'beam4'
        this.group.add(beam4.mesh);


        const drum4 = new Drum();
        drum4.mesh.position.set(-1.65, 4, -0.07);
        drum4.mesh.scale.set(0.12, 0.18, 0.12);
        drum4.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(drum4.mesh);

        const outerLine1 = new Drum();
        outerLine1.mesh.position.set(-1.77, 3, 0);
        outerLine1.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine1.mesh);

        const outerLine2 = new Drum();
        outerLine2.mesh.position.set(-1.77, 3, -0.025);
        outerLine2.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine2.mesh);

        const outerLine3 = new Drum();
        outerLine3.mesh.position.set(-1.77, 3, -0.05);
        outerLine3.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine3.mesh);

        const outerLine4 = new Drum();
        outerLine4.mesh.position.set(-1.77, 3, -0.075);
        outerLine4.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine4.mesh);

        const outerLine5 = new Drum();
        outerLine5.mesh.position.set(-1.77, 3, -0.1);
        outerLine5.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine5.mesh);

        const outerLine6 = new Drum();
        outerLine6.mesh.position.set(-1.77, 3, -0.125);
        outerLine6.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(outerLine6.mesh);

        const innerLine1 = new Drum();
        innerLine1.mesh.position.set(-1.53, 3, 0);
        innerLine1.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine1.mesh);

        const innerLine2 = new Drum();
        innerLine2.mesh.position.set(-1.53, 3, -0.025);
        innerLine2.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine2.mesh);

        const innerLine3 = new Drum();
        innerLine3.mesh.position.set(-1.53, 3, -0.05);
        innerLine3.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine3.mesh);

        const innerLine4 = new Drum();
        innerLine4.mesh.position.set(-1.53, 3, -0.075);
        innerLine4.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine4.mesh);

        const innerLine5 = new Drum();
        innerLine5.mesh.position.set(-1.53, 3, -0.1);
        innerLine5.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine5.mesh);

        const innerLine6 = new Drum();
        innerLine6.mesh.position.set(-1.53, 3, -0.125);
        innerLine6.mesh.scale.set(0.005, 2, 0.005);
        this.group.add(innerLine6.mesh);
    }

    update() {
        // let xPos = this.application.world.crane.boom.boomBase.getObjectByName('sqcyl').position.x
        let xPos = 0
        // todo: get xpos from crane rotation
        let y = 3
        this.group.getObjectByName('beam3').scale.set(0.05, 1.5+xPos, 0.05)
        this.group.getObjectByName('beam4').scale.set(0.05, 1.5+xPos, 0.05)
        this.group.getObjectByName('beam3').position.set(-0.2, 2.4, 0.17)
        this.group.getObjectByName('beam4').position.set(-0.2, 2.4, -0.3)

    }
}