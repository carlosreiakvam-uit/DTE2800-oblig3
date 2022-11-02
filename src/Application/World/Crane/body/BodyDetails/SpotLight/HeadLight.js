import * as THREE from 'three'
import Application from '../../../../../Application.js'
import Rod from "./Rod.js";
import Cone from "./Cone.js";
import Glass from "./Glass.js";
import GUI from 'lil-gui';

export default class HeadLight {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.spotLight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI * 0.2, 0, 0);
        // this.spotLightRight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.addLightTowers();
    }

    addLightTowers() {
        const frontBeamLeftbase = new Rod();
        frontBeamLeftbase.mesh.position.set(0, 0.05, 0);
        frontBeamLeftbase.mesh.scale.set(0.4, 0.1, 0.4);
        this.group.add(frontBeamLeftbase.mesh);

        const frontBeamLeft = new Rod();
        frontBeamLeft.mesh.position.set(0, 0.55, 0);
        frontBeamLeft.mesh.scale.set(0.2, 1, 0.2);
        this.group.add(frontBeamLeft.mesh);

        const coneWithGlassGroup = new THREE.Group();

        const frontSpotLightLeft = new Cone();
        frontSpotLightLeft.mesh.position.set(0.15, 0.95, 0);
        frontSpotLightLeft.mesh.rotation.set(0, 0, Math.PI / 2)
        frontSpotLightLeft.mesh.scale.set(0.5, 0.7, 0.5);
        coneWithGlassGroup.add(frontSpotLightLeft.mesh);

        const frontSpotLightLeftGlass = new Glass();
        frontSpotLightLeftGlass.mesh.position.set(0.5, 0.95, 0);
        frontSpotLightLeftGlass.mesh.rotation.set(0, 0, Math.PI / 2)
        frontSpotLightLeftGlass.mesh.scale.set(0.5, 0.005, 0.5);
        coneWithGlassGroup.add(frontSpotLightLeftGlass.mesh);

        this.spotLight.target.position.set(5, 0.95, 0);
        this.spotLight.position.set(0.15, 0.95, 0);

        this.spotLight.visible = true;
        this.spotLight.castShadow = true;

        coneWithGlassGroup.add(this.spotLight);
        coneWithGlassGroup.add(this.spotLight.target);

        coneWithGlassGroup.translateX(-0.18)
        coneWithGlassGroup.translateY(0.08)
        coneWithGlassGroup.rotateZ(-0.2)

        this.group.add(coneWithGlassGroup);
    }

    update() {
        this.spotLight.visible = this.application.animations.headLightsOn;
        this.spotLight.color.set(this.application.animations.headLightsColor);
        this.spotLight.intensity = this.application.animations.headLightsIntensity;
    }
}
