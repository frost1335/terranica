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
  0.5,
  1000
);

let object;

let controls;

let objToRender = "car";

const loader = new GLTFLoader();

loader.load(
  `../models/car/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
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
renderer.setSize(container.clientWidth, container.clientHeight);

container.appendChild(renderer.domElement);

camera.position.z = 130;
camera.position.y = 50;
camera.position.x = 110

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(300, 300, 300);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zoom.
camera.lookAt(0, 0, 0);

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
