import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";
import FencePost from "../BodyDetails/FencePost";

export default class Tower {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()

        this.spotLightLeft = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.spotLightRight = new THREE.SpotLight(0xFFFF00, 0.5, 50, Math.PI*0.2, 0, 0);
        this.addMainBeams();
    }

    addMainBeams() {
        const start = 3
        const width = 0.5;
        const length = 5;
        const diameter = 0.02
        const numberOfSections = length/width;

        const longBeam1 = new Circle();
        longBeam1.mesh.position.set(start, start+length/2, 0);
        longBeam1.mesh.scale.set(diameter, length, diameter);
        longBeam1.mesh.rotation.set(0, 0, 0);
        this.group.add(longBeam1.mesh);

        const longBeam2 = new Circle();
        longBeam2.mesh.position.set(start+width, start+length/2, 0);
        longBeam2.mesh.scale.set(diameter, length, diameter);
        longBeam2.mesh.rotation.set(0, 0, 0);
        this.group.add(longBeam2.mesh);

        const longBeam3 = new Circle();
        longBeam3.mesh.position.set(start+width, start+length/2, width);
        longBeam3.mesh.scale.set(diameter, length, diameter);
        longBeam3.mesh.rotation.set(0, 0, 0);
        this.group.add(longBeam3.mesh);

        const longBeam4 = new Circle();
        longBeam4.mesh.position.set(start, start+length/2, width);
        longBeam4.mesh.scale.set(diameter, length, diameter);
        longBeam4.mesh.rotation.set(0, 0, 0);
        this.group.add(longBeam4.mesh);

        this.addHorizontalSectionShortBeam(start,width, diameter, numberOfSections);
    }

    addHorizontalSectionShortBeam(start, width, diameter, numberOfSections) {

        for(let i = 0; i <= numberOfSections; i++) {
            const horizontalBeam1= new Circle();
            horizontalBeam1.mesh.position.set(start, start+(width*i), width/2);
            horizontalBeam1.mesh.scale.set(diameter, width, diameter);
            horizontalBeam1.mesh.rotation.set(Math.PI/2, 0, 0);
            this.group.add(horizontalBeam1.mesh);

            const horizontalBeam2 = new Circle();
            horizontalBeam2.mesh.position.set(start+width, start+(width*i), width/2);
            horizontalBeam2.mesh.scale.set(diameter, width, diameter);
            horizontalBeam2.mesh.rotation.set(Math.PI/2, 0, 0);
            this.group.add(horizontalBeam2.mesh);

            const horizontalBeam3  = new Circle();
            horizontalBeam3.mesh.position.set(start+width/2, start+(width*i), 0);
            horizontalBeam3.mesh.scale.set(diameter, width, diameter);
            horizontalBeam3.mesh.rotation.set(0, 0, Math.PI/2);
            this.group.add(horizontalBeam3.mesh);

            const horizontalBeam4  = new Circle();
            horizontalBeam4.mesh.position.set(start+width/2, start+(width*i), width);
            horizontalBeam4.mesh.scale.set(diameter, width, diameter);
            horizontalBeam4.mesh.rotation.set(0, 0, Math.PI/2);
            this.group.add(horizontalBeam4.mesh);

            if(i === numberOfSections) {
                return
            }

            if(i % 2 === 0) {
                const skewedFront= new Circle();
                const length = Math.sqrt((width*width) + (width*width));
                skewedFront.mesh.position.set(start+(width/2), start+(width/2) + (width*i), width);
                skewedFront.mesh.scale.set(diameter, length, diameter);
                skewedFront.mesh.rotation.set(0, 0, -Math.PI/4);
                this.group.add(skewedFront.mesh);

                const skewedBack = new Circle();
                skewedBack.mesh.position.set(start+(width/2), start+(width/2) + (width*i), 0);
                skewedBack.mesh.scale.set(diameter, length, diameter);
                skewedBack.mesh.rotation.set(0, 0, -Math.PI/4);
                this.group.add(skewedBack.mesh);

                const skewedRight = new Circle();
                skewedRight.mesh.position.set(start+width, start+(width/2) + (width*i), width/2);
                skewedRight.mesh.scale.set(diameter, length, diameter);
                skewedRight.mesh.rotation.set(Math.PI/4, 0, 0);
                this.group.add(skewedRight.mesh);

                const skewedLeft = new Circle();
                skewedLeft.mesh.position.set(start, start+(width/2) + (width*i), width/2);
                skewedLeft.mesh.scale.set(diameter, length, diameter);
                skewedLeft.mesh.rotation.set(Math.PI/4, 0, 0);
                this.group.add(skewedLeft.mesh);

            } else {
                const skewedFront= new Circle();
                const length = Math.sqrt((width*width) + (width*width));
                skewedFront.mesh.position.set(start+(width/2), start+(width/2) + (width*i), width);
                skewedFront.mesh.scale.set(diameter, length, diameter);
                skewedFront.mesh.rotation.set(0, 0, Math.PI/4);
                this.group.add(skewedFront.mesh);

                const skewedBack = new Circle();
                skewedBack.mesh.position.set(start+(width/2), start+(width/2) + (width*i), 0);
                skewedBack.mesh.scale.set(diameter, length, diameter);
                skewedBack.mesh.rotation.set(0, 0, Math.PI/4);
                this.group.add(skewedBack.mesh);

                const skewedRight = new Circle();
                skewedRight.mesh.position.set(start+(width/2)+width/2, start+(width/2) + (width*i), width/2);
                skewedRight.mesh.scale.set(diameter, length, diameter);
                skewedRight.mesh.rotation.set(-Math.PI/4, 0, 0);
                this.group.add(skewedRight.mesh);

                const skewedLeft = new Circle();
                skewedLeft.mesh.position.set(start, start+(width/2) + (width*i), width/2);
                skewedLeft.mesh.scale.set(diameter, length, diameter);
                skewedLeft.mesh.rotation.set(-Math.PI/4, 0, 0);
                this.group.add(skewedLeft.mesh);
            }
        }
    }

    update() {
        this.spotLightLeft.isLight = this.application.animations.headLightsOn;
        this.spotLightRight.isLight = this.application.animations.headLightsOn;
    }
}