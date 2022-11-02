import Application from "../../../Application";
import * as THREE from "three";
import Drum from "../body/MidBeamsAndDrums/Drum.js";
import WhiteStuffAroundDrums from "../body/MidBeamsAndDrums/WhiteStuffAroundDrums";
import HookCarrige from "../body/MidBeamsAndDrums/HookCarrige";

export default class BoomWireAndHook {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'boomWireAndHook'
        this.AddWireAndHook();
        this.group.position.set(5.15,6.7,-0.09);
    }

    AddWireAndHook() {
        const innerLine1 = new Drum();
        innerLine1.mesh.position.set(-0.06,0 , 0.0);
        innerLine1.mesh.scale.set(0.005, 4, 0.005);
        innerLine1.mesh.rotation.set(0,0,0)
        this.group.add(innerLine1.mesh);

        const innerLine2 = new Drum();
        innerLine2.mesh.position.set(-0.06,0 , -0.03);
        innerLine2.mesh.scale.set(0.005, 4, 0.005);
        innerLine2.mesh.rotation.set(0,0,0)
        this.group.add(innerLine2.mesh);

        const innerLine3 = new Drum();
        innerLine3.mesh.position.set(-0.06,0 , 0.03);
        innerLine3.mesh.scale.set(0.005, 4, 0.005);
        innerLine3.mesh.rotation.set(0,0,0)
        this.group.add(innerLine3.mesh);

        const innerLine4 = new Drum();
        innerLine4.mesh.position.set(0.06,0 , 0.0);
        innerLine4.mesh.scale.set(0.005, 4, 0.005);
        innerLine4.mesh.rotation.set(0,0,0)
        this.group.add(innerLine4.mesh);

        const innerLine5 = new Drum();
        innerLine5.mesh.position.set(0.06,0 , -0.03);
        innerLine5.mesh.scale.set(0.005, 4, 0.005);
        innerLine5.mesh.rotation.set(0,0,0)
        this.group.add(innerLine5.mesh);

        const innerLine6 = new Drum();
        innerLine6.mesh.position.set(0.06,0 , 0.03);
        innerLine6.mesh.scale.set(0.005, 4, 0.005);
        innerLine6.mesh.rotation.set(0,0,0)
        this.group.add(innerLine6.mesh);

        const hookCarrige = new HookCarrige()
        hookCarrige.mesh.position.set(0, -2, 0.08);
        hookCarrige.mesh.scale.set(0.1, 0.05, 0.1);
        hookCarrige.mesh.rotation.set(Math.PI/2,0,0)
        this.group.add(hookCarrige.mesh);

        const hookCarrige2 = new HookCarrige()
        hookCarrige2.mesh.position.set(0, -2, -0.08);
        hookCarrige2.mesh.scale.set(0.1, 0.05, 0.1);
        hookCarrige2.mesh.rotation.set(Math.PI/2,0,0)
        this.group.add(hookCarrige2.mesh);

        const drum = new Drum();
        drum.mesh.position.set(0,-2 , 0);
        drum.mesh.scale.set(0.07, 0.11, 0.07);
        drum.mesh.rotation.set(Math.PI/2,0,0)
        this.group.add(drum.mesh);

        const drumTop = new Drum();
        drumTop.mesh.position.set(0,2 , 0);
        drumTop.mesh.scale.set(0.07, 0.11, 0.07);
        drumTop.mesh.rotation.set(Math.PI/2,0,0)
        this.group.add(drumTop.mesh);

        const drumTopContainerRight = new WhiteStuffAroundDrums();
        drumTopContainerRight.mesh.position.set(0, 2, 0.08);
        drumTopContainerRight.mesh.scale.set(0.1, 0.05, 0.1);
        drumTopContainerRight.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(drumTopContainerRight.mesh);

        const drumTopContainerLeft = new WhiteStuffAroundDrums();
        drumTopContainerLeft.mesh.position.set(0, 2, -0.08);
        drumTopContainerLeft.mesh.scale.set(0.1, 0.05, 0.1);
        drumTopContainerLeft.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(drumTopContainerLeft.mesh);
    }

    update() {

    }
}