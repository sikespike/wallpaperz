export default class World {
    constructor(size) {
        this.geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    update() {
        this.mesh.rotation.x += 0.1;
        this.mesh.rotation.y += 0.1;
    }

    getMesh() {
        return this.mesh;
    }
}