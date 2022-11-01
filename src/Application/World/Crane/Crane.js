import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import MidBeamAndDrums from "./MidBeamsAndDrums/MidBeamAndDrums.js";
import Fence from "./BodyDetails/Fence";
import Tower from "./patrickTower/tower";
import BeamAndConnectedWires from "./MidBeamsAndDrums/BeamAndConnectedWires";
import HeadLights from "./SpotLight/HeadLights.js";

export default class Crane {
    constructor() {
        this.application = new Application()
        this.craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();
        this.lightTower = new HeadLights();
        this.midBeamAndDrums = new MidBeamAndDrums();
        this.fence = new Fence();
        this.tower = new Tower();
        this.beamAndWires = new BeamAndConnectedWires();

        //this.spreadTower = new SpreadTower()
        // this.spreadTower.group.position.set(1.5, 1.6, 0.08)
        //this.spreadTower.group.position.set(4, 1, 0)


        this.craneGroup.add(
            this.underbody.group,
            this.vehicleBody.model,
            this.lightTower.group,
            this.midBeamAndDrums.group,
            this.fence.group,
            this.tower.group,
            this.beamAndWires.group,
            // this.spreadTower.group
        )
        application.scene.add(this.craneGroup)
    }

    update() {
        this.underbody.update();
        this.lightTower.update();
        this.beamAndWires.update();
        this.craneGroup.position.setX(this.application.animations.cranePosition);
    }
}