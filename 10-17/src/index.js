import * as THREE from 'three';

console.log(THREE);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);
const directional = new THREE.DirectionalLight(0xffffff, 0.6);
scene.add(directional)

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff00,
    roughness: 0,
    metalness: 0.75,
});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

renderer.render (scene, camera);

function animate() {	
	renderer.render( scene, camera );

    cube.rotation.x += 0.01;
    cube.rotateY(0.01);

    requestAnimationFrame( animate );
}

requestAnimationFrame( animate );