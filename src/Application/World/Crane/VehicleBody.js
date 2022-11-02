import * as THREE from 'three'
import Application from '../../Application.js'
import HeadLights from "./SpotLight/HeadLights.js";
import MidBeamAndDrums from "./MidBeamsAndDrums/MidBeamAndDrums.js";
import Fence from "./BodyDetails/Fence.js";
import BeamAndConnectedWires from "./MidBeamsAndDrums/BeamAndConnectedWires.js";
import BoomAssembled from "./Boom/BoomAssembled.js";


export default class VehicleBody {
    constructor() {
        this.application = new Application()
        this.resources = this.application.resources
        this.group = new THREE.Group()
        this.lightTower = new HeadLights();
        this.midBeamAndDrums = new MidBeamAndDrums();
        this.fence = new Fence();
        this.tower = new BoomAssembled();
        this.beamAndWires = new BeamAndConnectedWires();


        // Resource
        this.setModel()

        this.group.add(
            this.lightTower.group,
            this.midBeamAndDrums.group,
            this.fence.group,
            this.tower.group,
            this.beamAndWires.group
        )
    }

    setModel() {
        this.resource = this.resources.items.vehicle
        this.resources.resolveName('ape')
        this.model = this.resource.scene
        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.set(0.9, 1, 0)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })

        this.group.add(this.model)
    }

    update() {
        this.lightTower.update();
        this.beamAndWires.update();
        this.group.rotation.set(0, this.application.animations.craneRotation, 0)
    }

}