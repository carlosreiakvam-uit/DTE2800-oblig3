import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";
import Drum from "../MidBeamsAndDrums/Drum";
import WhiteStuffAroundDrums from "../MidBeamsAndDrums/WhiteStuffAroundDrums";
import Rod from "../SpotLight/Rod";
import FencePost from "../Fence/FencePost";
import HeadLights from "../SpotLight/HeadLights";
import MidBeamAndDrums from "../MidBeamsAndDrums/MidBeamAndDrums";
import BoomAssembled from "../Boom/BoomAssembled";
import BeamAndConnectedWires from "../MidBeamsAndDrums/BeamAndConnectedWires";

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
    }


    update() {
    this.beamAndWires.update();
    }
}