import * as THREE from 'three'
import Application from '../../Application.js'


export default class Fox
{
    constructor()
    {
        this.application = new Application()
        this.scene = this.application.scene
        this.resources = this.application.resources

        // Resource
        this.resource = this.resources.items.vehicle
        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.set(1,0.5,0)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

}