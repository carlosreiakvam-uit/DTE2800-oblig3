import VehicleBody from "./VehicleBody";
import * as THREE from 'three'
import Application from '../../Application.js'
import Underbody from "./Underbody/Underbody.js";
import HeadLight from "./SpotLight/HeadLight.js";
import MidBeamAndDrums from "./MidBeamsAndDrums/MidBeamAndDrums.js";
import Fence from "./BodyDetails/Fence";
import BoomAssembled from "./Boom/BoomAssembled.js";


export default class Crane {
    constructor() {
        this.application = new Application()
        this.craneGroup = new THREE.Group()

        this.vehicleBody = new VehicleBody();
        this.underbody = new Underbody();
        this.midBeamAndDrums = new MidBeamAndDrums();
        this.boom = new BoomAssembled()
        this.lightTower = new HeadLight();
        this.fence = new Fence();


        this.craneGroup.add(
            this.underbody.group,
            this.vehicleBody.model,
            this.lightTower.group,
            this.midBeamAndDrums.group,
            this.fence.group,
            this.boom.group
    )
        application.scene.add(this.craneGroup)
    }

    update() {
        this.underbody.update();
        this.lightTower.update();
        this.craneGroup.position.setX(this.application.animations.cranePosition);
    }
}