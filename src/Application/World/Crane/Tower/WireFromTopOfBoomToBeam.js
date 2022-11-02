import Application from "../../../Application";
import * as THREE from "three";
import Drum from "../body/MidBeamsAndDrums/Drum.js";

export default class WireFromTopOfBoomToBeam {
    constructor(hook) {
        this.hook = hook;
        this.application = new Application()
        this.group = new THREE.Group()
        this.group.name = 'wireFromTopOfBoom'
        this.AddWire();
        // this.group.position.set(1.15,5.6,0.05);
        // this.group.rotateZ(-Math.PI/2.89);
    }

    AddWire() {
        const lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );

        let points = [];
        points.push( new THREE.Vector3(-1.75,4.1,0.05 ));
        points.push(this.hook.position);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );

        this.rightLine = new THREE.Line( lineGeometry, lineMaterial );
        this.group.add(this.rightLine);

        points = [];
        points.push( new THREE.Vector3(-1.75,4.1,-0.2 ));
        points.push(this.hook.position);
        const lineGeometry2 = new THREE.BufferGeometry().setFromPoints( points );

        this.leftLine = new THREE.Line( lineGeometry2, lineMaterial );
        this.group.add(this.leftLine);
    }

    update() {
        const lineVertexPositionsRight = this.rightLine.geometry.attributes.position.array;
        lineVertexPositionsRight[3] = this.hook.position.x;
        lineVertexPositionsRight[4] = this.hook.position.y + 2;
        lineVertexPositionsRight[5] = this.hook.position.z;
        this.rightLine.geometry.attributes.position.needsUpdate = true;
        this.rightLine.geometry.computeBoundingBox();
        this.rightLine.geometry.computeBoundingSphere();

        const lineVertexPositionsLeft = this.leftLine.geometry.attributes.position.array;
        lineVertexPositionsLeft[3] = this.hook.position.x;
        lineVertexPositionsLeft[4] = this.hook.position.y + 2;
        lineVertexPositionsLeft[5] = this.hook.position.z;

        this.leftLine.geometry.attributes.position.needsUpdate = true;
        this.leftLine.geometry.computeBoundingBox();
        this.leftLine.geometry.computeBoundingSphere();
    }
}