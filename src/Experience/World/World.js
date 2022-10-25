import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Crane from "./Crane/Crane";
import Coordinates from "./coordinates";

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.coordinates = new Coordinates()
            this.floor = new Floor()
            this.crane = new Crane()
            this.environment = new Environment()
        })
    }

    update()
    {
    }
}