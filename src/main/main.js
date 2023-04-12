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

boxMesh.scale.set(1, 1, 1);
boxMesh.rotation.set(Math.PI / 4, 0, 0);
scene.add(boxMesh);
// 4.创建渲染
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 轨道控制器使得相机围绕目标进行轨道运动
const controller = new OrbitControls(camera, renderer.domElement);
// 添加坐标轴辅助
const axesHelper = new THREE.AxesHelper(1);

scene.add(axesHelper);
function animate(time) {
  //   boxMesh.position.x += 0.01;
  //   // boxMesh.rotation.x += 0.01;
  //   if (boxMesh.position.x > 3) {
  //     boxMesh.position.x = 0;
  //   }
  let t = (time / 1000) % 3;
  boxMesh.position.x = t * 1;
  if (boxMesh.position.x > 3) {
    boxMesh.position.x = 0;
  }
  requestAnimationFrame(animate);
  controller.update();
  renderer.render(scene, camera);
}
animate();
