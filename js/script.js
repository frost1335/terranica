//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const container = document.getElementById("threejs-container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let object;

let controls;

const loader = new GLTFLoader();

loader.load(
  `../models/car/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    console.log(object);

    const mesh = object.children[0];

    console.log(mesh);

    object.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(0x2194ce); // Red color
      }
    });
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });

// size of render scene
camera.aspect = window.innerWidth / window.innerHeight;
renderer.setSize(container.clientWidth, container.clientHeight);

container.appendChild(renderer.domElement);

camera.position.z = 3;
camera.position.y = 2;
camera.position.x = 3;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(300, 300, 300);
topLight.castShadow = true;
scene.add(topLight);

let light = new THREE.PointLight(0xc4c4c4, 10);
light.position.set(0, 300, 500);
scene.add(light);

let light2 = new THREE.PointLight(0xc4c4c4, 10);
light2.position.set(500, 100, 0);
scene.add(light2);

let light3 = new THREE.PointLight(0xc4c4c4, 10);
light3.position.set(0, 100, -500);
scene.add(light3);

let light4 = new THREE.PointLight(0xc4c4c4, 10);
light4.position.set(-500, 300, 500);
scene.add(light4);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zoom.

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

controls.addEventListener("change", renderer);

animate();
