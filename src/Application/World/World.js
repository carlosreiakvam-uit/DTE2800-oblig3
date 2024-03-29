import Application from '../Application.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Coordinates from "./coordinates";
import Crane from "./Crane/Crane.js";

export default class World {
    constructor() {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.ready = false;

        // Wait for resources
        this.resources.on('ready', () => {
            new Coordinates()
            new Floor()
            this.crane = new Crane()
            this.environment = new Environment()
            this.ready = true;
        })
        console.log(application)
    }

    update() {
        if (this.ready) {
            this.crane.update();
            this.environment.update();
        }
    }
}