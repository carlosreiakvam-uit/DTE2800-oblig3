import Application from "../../../Application";
import * as THREE from "three";
import Drum from "../body/MidBeamsAndDrums/Drum.js";
import WhiteStuffAroundDrums from "../body/MidBeamsAndDrums/WhiteStuffAroundDrums";
import HookCarrige from "../body/MidBeamsAndDrums/HookCarrige.js";

export default class BoomWireAndHook {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'boomWireAndHook'
        this.innerGroup = new THREE.Group()
        this.AddWires();
        this.addHook()
    }

    addHook() {
        this.model = this.application.resources.items.hook.scene
        this.model.scale.set(0.08, 0.08, 0.08)
        this.model.position.set(0,-2.3,0)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })

        this.innerGroup .add(this.model)
    }

    AddWires() {
        this.innerLine1 = new Drum();
        this.innerLine1.mesh.position.set(-0.06, 0, 0.0);
        this.innerLine1.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine1.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine1.mesh);

        this.innerLine2 = new Drum();
        this.innerLine2.mesh.position.set(-0.06, 0, -0.03);
        this.innerLine2.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine2.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine2.mesh);

        this.innerLine3 = new Drum();
        this.innerLine3.mesh.position.set(-0.06, 0, 0.03);
        this.innerLine3.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine3.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine3.mesh);

        this.innerLine4 = new Drum();
        this.innerLine4.mesh.position.set(0.06, 0, 0.0);
        this.innerLine4.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine4.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine4.mesh);

        this.innerLine5 = new Drum();
        this.innerLine5.mesh.position.set(0.06, 0, -0.03);
        this.innerLine5.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine5.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine5.mesh);

        this.innerLine6 = new Drum();
        this.innerLine6.mesh.position.set(0.06, 0, 0.03);
        this.innerLine6.mesh.scale.set(0.005, 4, 0.005);
        this.innerLine6.mesh.rotation.set(0, 0, 0)
        this.innerGroup .add(this.innerLine6.mesh);

        this.hookCarrige = new HookCarrige()
        this.hookCarrige.mesh.position.set(0, -2, 0.08);
        this.hookCarrige.mesh.scale.set(0.1, 0.05, 0.1);
        this.hookCarrige.mesh.rotation.set(Math.PI / 2, 0, 0)
        this.innerGroup .add(this.hookCarrige.mesh);

        this.hookCarrige2 = new HookCarrige()
        this.hookCarrige2.mesh.position.set(0, -2, -0.08);
        this.hookCarrige2.mesh.scale.set(0.1, 0.05, 0.1);
        this.hookCarrige2.mesh.rotation.set(Math.PI / 2, 0, 0)
        this.innerGroup .add(this.hookCarrige2.mesh);

        this.drum = new Drum();
        this.drum.mesh.position.set(0, -2, 0);
        this.drum.mesh.scale.set(0.07, 0.11, 0.07);
        this.drum.mesh.rotation.set(Math.PI / 2, 0, 0)
        this.innerGroup .add(this.drum.mesh);

        const drumTop = new Drum();
        drumTop.mesh.position.set(0, 2, 0);
        drumTop.mesh.scale.set(0.07, 0.11, 0.07);
        drumTop.mesh.rotation.set(Math.PI / 2, 0, 0)
        this.group.add(drumTop.mesh);

        this.drumTopContainerRight = new WhiteStuffAroundDrums();
        this.drumTopContainerRight.mesh.position.set(0, 2, 0.08);
        this.drumTopContainerRight.mesh.scale.set(0.1, 0.05, 0.1);
        this.drumTopContainerRight.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(this.drumTopContainerRight.mesh);

        this.drumTopContainerLeft = new WhiteStuffAroundDrums();
        this.drumTopContainerLeft.mesh.position.set(0, 2, -0.08);
        this.drumTopContainerLeft.mesh.scale.set(0.1, 0.05, 0.1);
        this.drumTopContainerLeft.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(this.drumTopContainerLeft.mesh);

        this.group.add(this.innerGroup);
    }

    update() {
        if (this.boomAssembled === undefined) {
            this.boomAssembled = this.application.scene.children[3].getObjectByName('completeTower').getObjectByName('boomAssembled')
        }
        let pos = this.boomAssembled.position
        this.group.position.set(pos.x - Math.sin(this.boomAssembled.rotation.z) * 8, Math.cos(this.boomAssembled.rotation.z)*9, pos.z)
        this.group.translateY(-1.1)

        this.innerLine1.mesh.scale.setY(this.application.animations.wireLength);
        this.innerLine2.mesh.scale.setY(this.application.animations.wireLength);
        this.innerLine3.mesh.scale.setY(this.application.animations.wireLength);
        this.innerLine4.mesh.scale.setY(this.application.animations.wireLength);
        this.innerLine5.mesh.scale.setY(this.application.animations.wireLength);
        this.innerLine6.mesh.scale.setY(this.application.animations.wireLength);

        const halfWire = this.application.animations.wireLength / 2;

        this.drum.mesh.position.setY(-halfWire);
        this.hookCarrige.mesh.position.setY(-halfWire);
        this.hookCarrige2.mesh.position.setY(-halfWire);
        this.model.position.setY(-halfWire - 0.3);

        this.innerGroup.position.setY(2 - halfWire)
    }
}