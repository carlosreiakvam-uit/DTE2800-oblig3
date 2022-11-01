import Application from "../../../Application";
import * as THREE from "three";
import Beam from "../Underbody/Beam";
import Circle from "../Underbody/Circle";
import Drum from "../MidBeamsAndDrums/Drum";
import WhiteStuffAroundDrums from "../MidBeamsAndDrums/WhiteStuffAroundDrums";
import Rod from "../SpotLight/Rod";
import FencePost from "./FencePost";

export default class Fence {
    constructor() {
        this.application = new Application()
        this.group = new THREE.Group()
        this.AddFenceItemsRightSide();
        this.AddFenceItemsLeftSide();
        this.AddLadderRightSide();
    }

    AddLadderRightSide() {
        const topRightSide = new FencePost();
        topRightSide.mesh.position.set(-1.45, 1.6, 0.67);
        topRightSide.mesh.scale.set(0.01, 1.22, 0.01);
        this.group.add(topRightSide.mesh);

        const topRightSideSkew = new FencePost();
        topRightSideSkew.mesh.position.set(-1.45, 2.2, 0.555);
        topRightSideSkew.mesh.scale.set(0.01, 0.23, 0.01);
        topRightSideSkew.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(topRightSideSkew.mesh);

        const topLeftSide = new FencePost();
        topLeftSide.mesh.position.set(-1.7, 1.6, 0.67);
        topLeftSide.mesh.scale.set(0.01, 1.22, 0.01);
        this.group.add(topLeftSide.mesh);

        const topLeftSidePost = new FencePost();
        topLeftSidePost.mesh.position.set(-1.7, 2, 0.45);
        topLeftSidePost.mesh.scale.set(0.01, 0.4, 0.01);
        this.group.add(topLeftSidePost.mesh);

        const topLeftSideSkew = new FencePost();
        topLeftSideSkew.mesh.position.set(-1.7, 2.2, 0.555);
        topLeftSideSkew.mesh.scale.set(0.01, 0.23, 0.01);
        topLeftSideSkew.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(topLeftSideSkew.mesh);

        const step1 = new FencePost();
        step1.mesh.position.set(-1.575, 1.8, 0.67);
        step1.mesh.scale.set(0.01, 0.23, 0.01);
        step1.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(step1.mesh);

        const step2 = new FencePost();
        step2.mesh.position.set(-1.575, 1.6, 0.67);
        step2.mesh.scale.set(0.01, 0.23, 0.01);
        step2.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(step2.mesh);

        const step3 = new FencePost();
        step3.mesh.position.set(-1.575, 1.4, 0.67);
        step3.mesh.scale.set(0.01, 0.23, 0.01);
        step3.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(step3.mesh);

        const step4 = new FencePost();
        step4.mesh.position.set(-1.575, 1.2, 0.67);
        step4.mesh.scale.set(0.01, 0.23, 0.01);
        step4.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(step4.mesh);

        const step5 = new FencePost();
        step5.mesh.position.set(-1.575, 1, 0.67);
        step5.mesh.scale.set(0.01, 0.23, 0.01);
        step5.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(step5.mesh);

        const horizontalGuard1 = new FencePost();
        horizontalGuard1.mesh.position.set(-1.7, 1, 0.555);
        horizontalGuard1.mesh.scale.set(0.01, 0.23, 0.01);
        horizontalGuard1.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(horizontalGuard1.mesh);

        const horizontalGuard2 = new FencePost();
        horizontalGuard2.mesh.position.set(-1.45, 1, 0.555);
        horizontalGuard2.mesh.scale.set(0.01, 0.23, 0.01);
        horizontalGuard2.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(horizontalGuard2.mesh);

        const horizontalGuard3 = new FencePost();
        horizontalGuard3.mesh.position.set(-1.45, 1.8, 0.56);
        horizontalGuard3.mesh.scale.set(0.01, 0.21, 0.01);
        horizontalGuard3.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(horizontalGuard3.mesh);

        const horizontalGuard4 = new FencePost();
        horizontalGuard4.mesh.position.set(-1.45, 2, 0.56);
        horizontalGuard4.mesh.scale.set(0.01, 0.21, 0.01);
        horizontalGuard4.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(horizontalGuard4.mesh);

        const horizontalGuard5 = new FencePost();
        horizontalGuard5.mesh.position.set(-1.7, 2, 0.56);
        horizontalGuard5.mesh.scale.set(0.01, 0.21, 0.01);
        horizontalGuard5.mesh.rotation.set(-Math.PI / 2, 0, 0);
        this.group.add(horizontalGuard5.mesh);
    }

    AddFenceItemsRightSide() {
        const rightHorizontalBeam1 = new FencePost();
        rightHorizontalBeam1.mesh.position.set(-0.6, 2, 0.47);
        rightHorizontalBeam1.mesh.scale.set(0.01, 1.7, 0.01);
        rightHorizontalBeam1.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(rightHorizontalBeam1.mesh);

        const rightHorizontalBeam2 = new FencePost();
        rightHorizontalBeam2.mesh.position.set(-0.6, 2.2, 0.47);
        rightHorizontalBeam2.mesh.scale.set(0.01, 1.7, 0.01);
        rightHorizontalBeam2.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(rightHorizontalBeam2.mesh);

        const rightHorizontalBeam3 = new FencePost();
        rightHorizontalBeam3.mesh.position.set(-0.7, 1.8, 0.47);
        rightHorizontalBeam3.mesh.scale.set(0.01, 1.5, 0.01);
        rightHorizontalBeam3.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(rightHorizontalBeam3.mesh);

        const rightVerticalBeam6 = new FencePost();
        rightVerticalBeam6.mesh.position.set(0.25, 2.1, 0.45);
        rightVerticalBeam6.mesh.scale.set(0.01, 0.21, 0.01);
        this.group.add(rightVerticalBeam6.mesh);

        const rightVerticalBeam1 = new FencePost();
        rightVerticalBeam1.mesh.position.set(0.04, 1.98, 0.45);
        rightVerticalBeam1.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(rightVerticalBeam1.mesh);

        const rightVerticalBeam2 = new FencePost();
        rightVerticalBeam2.mesh.position.set(-0.34, 1.98, 0.45);
        rightVerticalBeam2.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(rightVerticalBeam2.mesh);

        const rightVerticalBeam3 = new FencePost();
        rightVerticalBeam3.mesh.position.set(-0.68, 1.98, 0.45);
        rightVerticalBeam3.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(rightVerticalBeam3.mesh);

        const rightVerticalBeam4 = new FencePost();
        rightVerticalBeam4.mesh.position.set(-1.06, 1.98, 0.45);
        rightVerticalBeam4.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(rightVerticalBeam4.mesh);

        const rightVerticalBeam5 = new FencePost();
        rightVerticalBeam5.mesh.position.set(-1.44, 1.98, 0.45);
        rightVerticalBeam5.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(rightVerticalBeam5.mesh);
    }

    AddFenceItemsLeftSide() {
        const leftHorizontalBeam1 = new FencePost();
        leftHorizontalBeam1.mesh.position.set(-0.7, 1.8, -0.55);
        leftHorizontalBeam1.mesh.scale.set(0.01, 2, 0.01);
        leftHorizontalBeam1.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(leftHorizontalBeam1.mesh);

        const leftHorizontalBeam2 = new FencePost();
        leftHorizontalBeam2.mesh.position.set(-0.7, 2, -0.55);
        leftHorizontalBeam2.mesh.scale.set(0.01, 2, 0.01);
        leftHorizontalBeam2.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(leftHorizontalBeam2.mesh);

        const leftHorizontalBeam3 = new FencePost();
        leftHorizontalBeam3.mesh.position.set(-0.7, 2.2, -0.55);
        leftHorizontalBeam3.mesh.scale.set(0.01, 2, 0.01);
        leftHorizontalBeam3.mesh.rotation.set(0, 0, -Math.PI / 2);
        this.group.add(leftHorizontalBeam3.mesh);

        const leftVerticalBeam1 = new FencePost();
        leftVerticalBeam1.mesh.position.set(0.29, 1.98, -0.53);
        leftVerticalBeam1.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam1.mesh);

        const leftVerticalBeam2 = new FencePost();
        leftVerticalBeam2.mesh.position.set(-0.02, 1.98, -0.53);
        leftVerticalBeam2.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam2.mesh);

        const leftVerticalBeam3 = new FencePost();
        leftVerticalBeam3.mesh.position.set(-0.35, 1.98, -0.53);
        leftVerticalBeam3.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam3.mesh);

        const leftVerticalBeam4 = new FencePost();
        leftVerticalBeam4.mesh.position.set(-0.7, 1.98, -0.53);
        leftVerticalBeam4.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam4.mesh);

        const leftVerticalBeam5 = new FencePost();
        leftVerticalBeam5.mesh.position.set(-1.03, 1.98, -0.53);
        leftVerticalBeam5.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam5.mesh);

        const leftVerticalBeam6 = new FencePost();
        leftVerticalBeam6.mesh.position.set(-1.36, 1.98, -0.53);
        leftVerticalBeam6.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam6.mesh);

        const leftVerticalBeam7 = new FencePost();
        leftVerticalBeam7.mesh.position.set(-1.69, 1.98, -0.53);
        leftVerticalBeam7.mesh.scale.set(0.01, 0.46, 0.01);
        this.group.add(leftVerticalBeam7.mesh);

    }

    update() {

    }
}