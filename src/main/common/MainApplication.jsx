import * as THREE from "three";

export default class MainApplication {
    constructor() {
        this.objects = [];
        this.createScene();

        this.stopped = false;
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
        this.camera.position.z = 20;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    start() {
        this.renderFrame();
    }

    stop() {
        this.stopped = true;
    }

    renderFrame() {
        if(this.stopped) {
            this.stopped = false;
            return;
        }

        requestAnimationFrame(() => {
            this.renderFrame();
        });

        this.objects.forEach((object) => {
            object.update();
        });

        this.renderer.render(this.scene, this.camera);
    }

    add(mesh) {
        this.objects.push(mesh);
        this.scene.add(mesh.getMesh());
    }
}
