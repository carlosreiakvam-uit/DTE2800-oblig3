import * as THREE from 'three'

import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'

import sources from './sources.js'
import Animations from "./Animations.js";
import KeyPress from "./Utils/KeyPress.js";
import GUI from "lil-gui";

let instance = null

export default class Application
{
    constructor(_canvas)
    {
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
        
        // Global access
        window.application = this

        // Options
        this.canvas = _canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        this.animations = new Animations()
        this.keypress = new KeyPress()

        this.setupLilGui();

        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.animations.update(this.keypress.currentlyPressedKeys)
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }

    setupLilGui() {
        this.lilGui = new GUI();
        const spotFolder = this.lilGui.addFolder( 'Headlamps' );
        spotFolder.add(this.animations, 'headLightsOn').name("On/Off");
        spotFolder.add(this.animations, 'headLightsIntensity').min(0).max(6).step(0.01).name("Intensity");
        spotFolder.addColor(this.animations, 'headLightsColor').name("Color");

        const sunFolder = this.lilGui.addFolder("Sun light");
        sunFolder.add(this.animations, 'theSunIsShining').name("On/Off");
    }

    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}