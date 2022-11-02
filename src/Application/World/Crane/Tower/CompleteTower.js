import Application from "../../../Application";
import * as THREE from "three";
import MidBeamAndDrums from "../body/MidBeamsAndDrums/MidBeamAndDrums";
import BeamAndConnectedWires from "../body/MidBeamsAndDrums/BeamAndConnectedWires";
import BoomWireAndHook from "./BoomWireAndHook";
import WireFromTopOfBoomToBeam from "./WireFromTopOfBoomToBeam";
import BoomsAssembled from "./BoomsAssembled.js";

export default class CompleteTower {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()
        this.group.name = 'completeTower'
        this.AddItems();
    }


    AddItems() {
        this.wireFromTopOfBoomToBeam = new WireFromTopOfBoomToBeam();
        this.midBeamAndDrums = new MidBeamAndDrums();
        this.boomsAssembled = new BoomsAssembled();
        this.beamAndWires = new BeamAndConnectedWires();
        this.boomWireAndHook = new BoomWireAndHook();

        this.group.add(
            this.wireFromTopOfBoomToBeam.group,
            this.midBeamAndDrums.group,
            this.boomsAssembled.group,
            this.beamAndWires.group,
            this.boomWireAndHook.group,
        )
    }


    update() {
        // this.beamAndWires.update();
        this.boomsAssembled.update();
        // this.midBeamAndDrums.update();
        this.boomWireAndHook.update();
        this.group.rotation.set(0, this.application.animations.craneRotation, 0)
    }
}