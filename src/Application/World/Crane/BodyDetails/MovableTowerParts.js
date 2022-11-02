import Application from "../../../Application";
import * as THREE from "three";
import MidBeamAndDrums from "../MidBeamsAndDrums/MidBeamAndDrums";
import BoomAssembled from "../Boom/BoomAssembled";
import BeamAndConnectedWires from "../MidBeamsAndDrums/BeamAndConnectedWires";
import BoomWireAndHook from "../Boom/BoomWireAndHook";

export default class MovableTowerParts {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

       this.AddItems();
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