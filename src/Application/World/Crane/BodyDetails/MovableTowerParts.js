import Application from "../../../Application";
import * as THREE from "three";
import MidBeamAndDrums from "../MidBeamsAndDrums/MidBeamAndDrums";
import BoomAssembled from "../Boom/BoomAssembled";
import BeamAndConnectedWires from "../MidBeamsAndDrums/BeamAndConnectedWires";
import BoomWireAndHook from "../Boom/BoomWireAndHook";

export default class MovableTowerParts {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()
        this.setModel();
        this.AddItems();
    }

    setModel() {
        this.resource = this.resources.items.hook
        this.resources.resolveName('hook')
        this.model = this.resource.scene
        this.model.scale.set(0.08, 0.08, 0.08)
        this.model.position.set(5.15, 4.45, -0.1)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })

        this.group.add(this.model)
    }

    AddItems() {
        this.midBeamAndDrums = new MidBeamAndDrums();
        this.group.add(this.midBeamAndDrums.group);
        this.tower = new BoomAssembled();
        this.group.add(this.tower.group);
        this.beamAndWires = new BeamAndConnectedWires();
        this.group.add(this.beamAndWires.group)
        this.boomWireAndHook = new BoomWireAndHook();
        this.group.add(this.boomWireAndHook.group);
    }


    update() {
        this.beamAndWires.update();
        this.tower.update();
        this.midBeamAndDrums.update();
        this.boomWireAndHook.update();
    }
}