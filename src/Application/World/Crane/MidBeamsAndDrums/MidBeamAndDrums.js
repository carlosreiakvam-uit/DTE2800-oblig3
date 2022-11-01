import Application from "../../../Application";
import * as THREE from "three";
import {BoxGeometry} from "three";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";
import Rod from "../SpotLight/Rod";
import Drum from "./Drum";
import WhiteStuffAroundDrums from "./WhiteStuffAroundDrums";

export default class MidBeamAndDrums {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.AddBeamsDrumsAndWires();
    }

    AddBeamsDrumsAndWires() {

        const plattform = new Beam();
        plattform.mesh.position.set(0.62, 0.94, -0.06);
        plattform.mesh.scale.set(0.5, 0.1, 0.5);
        this.group.add(plattform.mesh);


        const beam3 = new Circle();
        beam3.mesh.position.set(0.25, 2.7, -0.3);
        beam3.mesh.scale.set(0.05, 4.2, 0.05);
        beam3.mesh.rotation.set(0, 0, -Math.PI / 3);
        this.group.add(beam3.mesh);

        const beam4 = new Circle();
        beam4.mesh.position.set(0.25, 2.7, 0.14);
        beam4.mesh.scale.set(0.05, 4.2, 0.05);
        beam4.mesh.rotation.set(0, 0, -Math.PI / 3);
        this.group.add(beam4.mesh);

        const drum1 = new Drum();
        drum1.mesh.position.set(-0.1, 1.21, -0.1);
        drum1.mesh.scale.set(0.25, 0.35, 0.25);
        drum1.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum1.mesh);

        const drum1ContainerRight = new WhiteStuffAroundDrums();
        drum1ContainerRight.mesh.position.set(-0.1, 1.21, -0.25);
        drum1ContainerRight.mesh.scale.set(0.3, 0.05, 0.3);
        drum1ContainerRight.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum1ContainerRight.mesh);

        const drum1ContainerLeft = new WhiteStuffAroundDrums();
        drum1ContainerLeft.mesh.position.set(-0.1, 1.21, 0.1);
        drum1ContainerLeft.mesh.scale.set(0.3, 0.05, 0.3);
        drum1ContainerLeft.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum1ContainerLeft.mesh);

        const drum2 = new Drum();
        drum2.mesh.position.set(-0.75, 1.21, -0.1);
        drum2.mesh.scale.set(0.25, 0.35, 0.25);
        drum2.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum2.mesh);

        const drum2ContainerRight = new WhiteStuffAroundDrums();
        drum2ContainerRight.mesh.position.set(-0.75, 1.21, -0.25);
        drum2ContainerRight.mesh.scale.set(0.3, 0.05, 0.3);
        drum2ContainerRight.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum2ContainerRight.mesh);

        const drum2ContainerLeft = new WhiteStuffAroundDrums();
        drum2ContainerLeft.mesh.position.set(-0.75, 1.21, 0.1);
        drum2ContainerLeft.mesh.scale.set(0.3, 0.05, 0.3);
        drum2ContainerLeft.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum2ContainerLeft.mesh);

        const drum3 = new Rod();
        drum3.mesh.position.set(-1.65, 2, -0.07);
        drum3.mesh.scale.set(0.12, 0.2, 0.12);
        drum3.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum3.mesh);

        const drum3ContainerRight = new WhiteStuffAroundDrums();
        drum3ContainerRight.mesh.position.set(-1.65, 1.85, 0.05);
        drum3ContainerRight.mesh.scale.set(0.05, 0.05, 0.2);
        drum3ContainerRight.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum3ContainerRight.mesh);

        const drum3ContainerLeft = new WhiteStuffAroundDrums();
        drum3ContainerLeft.mesh.position.set(-1.65, 1.85, -0.19);
        drum3ContainerLeft.mesh.scale.set(0.05, 0.05, 0.2);
        drum3ContainerLeft.mesh.rotation.set(-Math.PI / 2, 0,0);
        this.group.add(drum3ContainerLeft.mesh);


    }

    update() {

    }
}