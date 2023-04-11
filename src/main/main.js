import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//1.  创建场景
const scene = new THREE.Scene();

// 2.创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 10);
scene.add(camera);
// 3. 创建物体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(boxMesh);
// 4.创建渲染
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 轨道控制器使得相机围绕目标进行轨道运动
const controller = new OrbitControls(camera, renderer.domElement);
// renderer.render(scene, camera);
function animate() {
  requestAnimationFrame(animate);
  controller.update();
  renderer.render(scene, camera);
}
animate();
