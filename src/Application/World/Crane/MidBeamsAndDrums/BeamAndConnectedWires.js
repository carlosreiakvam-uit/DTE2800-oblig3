import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../body/Underbody/Beam";
import Drum from "./Drum";
import Rod from "../SpotLight/Rod";
import Animations from "../../../Animations";

export default class BeamAndConnectedWires {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.AddBeamAndWires();
    }

    AddBeamAndWires() {
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

    }
}