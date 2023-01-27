const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

D_X = 0.2;
D_Y = 0.2;
D_Z = 0.2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("orange");
document.body.appendChild(renderer.domElement);

const diceGeometry = new THREE.BoxGeometry(D_X, D_Y, D_Z);
const diceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const dice = new THREE.Mesh(diceGeometry, diceMaterial);
scene.add(dice);

// create the dots
var dotGeometry = new THREE.SphereGeometry(0.02, 16, 16);
var dotMaterial = new THREE.MeshBasicMaterial({ color: "#FF0408" });

// create the dot for the top of the dice
var dotTop = new THREE.Mesh(dotGeometry, dotMaterial);
dotTop.position.set(0, D_Y / 2, D_Z / 5);
dice.add(dotTop);

var dotTopSecond = new THREE.Mesh(dotGeometry, dotMaterial);
dotTopSecond.position.set(0, D_Y / 2, -D_Z / 5);
dice.add(dotTopSecond);

// create the dot for the bottom of the dice
var dotBottom = new THREE.Mesh(dotGeometry, dotMaterial);
dotBottom.position.set(-D_X / 4, -D_Y / 2, D_Z / 4);
dice.add(dotBottom);

var dotBottomSecond = new THREE.Mesh(dotGeometry, dotMaterial);
dotBottomSecond.position.set(-D_X / 4, -D_Y / 2, -D_Z / 4);
dice.add(dotBottomSecond);

var dotBottomThird = new THREE.Mesh(dotGeometry, dotMaterial);
dotBottomThird.position.set(D_X / 4, -D_Y / 2, -D_Z / 4);
dice.add(dotBottomThird);

var dotBottomFourth = new THREE.Mesh(dotGeometry, dotMaterial);
dotBottomFourth.position.set(D_X / 4, -D_Y / 2, D_Z / 4);
dice.add(dotBottomFourth);

var dotBottomFifth = new THREE.Mesh(dotGeometry, dotMaterial);
dotBottomFifth.position.set(0, -D_Y / 2, 0);
dice.add(dotBottomFifth);

// create the dot for the front of the dice
var dotFront = new THREE.Mesh(dotGeometry, dotMaterial);
dotFront.position.set(-D_X / 3, D_Y / 5, D_Z / 2);
dotFront.rotation.x = Math.PI / 2;
dice.add(dotFront);

var dotFrontSecond = new THREE.Mesh(dotGeometry, dotMaterial);
dotFrontSecond.position.set(0, D_Y / 5, D_Z / 2);
dotFrontSecond.rotation.x = Math.PI / 2;
dice.add(dotFrontSecond);

var dotFrontThird = new THREE.Mesh(dotGeometry, dotMaterial);
dotFrontThird.position.set(D_X / 3, D_Y / 5, D_Z / 2);
dotFrontThird.rotation.x = Math.PI / 2;
dice.add(dotFrontThird);

var dotFrontFourth = new THREE.Mesh(dotGeometry, dotMaterial);
dotFrontFourth.position.set(-D_X / 3, -D_Y / 5, D_Z / 2);
dotFrontFourth.rotation.x = Math.PI / 2;
dice.add(dotFrontFourth);

var dotFrontFifth = new THREE.Mesh(dotGeometry, dotMaterial);
dotFrontFifth.position.set(0, -D_Y / 5, D_Z / 2);
dotFrontFifth.rotation.x = Math.PI / 2;
dice.add(dotFrontFifth);

var dotFrontSixth = new THREE.Mesh(dotGeometry, dotMaterial);
dotFrontSixth.position.set(D_X / 3, -D_Y / 5, D_Z / 2);
dotFrontSixth.rotation.x = Math.PI / 2;
dice.add(dotFrontSixth);

// create the dot for the back of the dice
var dotBack = new THREE.Mesh(dotGeometry, dotMaterial);
dotBack.position.set(0, 0, -D_Z / 2);
dotBack.rotation.x = Math.PI / 2;
dice.add(dotBack);

// create the dot for the left of the dice
var dotLeft = new THREE.Mesh(dotGeometry, dotMaterial);
dotLeft.position.set(-D_X / 2, D_Y / 5, D_Z / 5);
dotLeft.rotation.y = Math.PI / 2;
dice.add(dotLeft);

var dotLeftSecond = new THREE.Mesh(dotGeometry, dotMaterial);
dotLeftSecond.position.set(-D_X / 2, D_Y / 5, -D_Z / 5);
dotLeftSecond.rotation.y = Math.PI / 2;
dice.add(dotLeftSecond);

var dotLeftThird = new THREE.Mesh(dotGeometry, dotMaterial);
dotLeftThird.position.set(-D_X / 2, -D_Y / 5, D_Z / 5);
dotLeftThird.rotation.y = Math.PI / 2;
dice.add(dotLeftThird);

var dotLeftFourth = new THREE.Mesh(dotGeometry, dotMaterial);
dotLeftFourth.position.set(-D_X / 2, -D_Y / 5, -D_Z / 5);
dotLeftFourth.rotation.y = Math.PI / 2;
dice.add(dotLeftFourth);

// create the dot for the right of the dice
var dotRight = new THREE.Mesh(dotGeometry, dotMaterial);
dotRight.position.set(D_X / 2, 0, 0);
dotRight.rotation.y = Math.PI / 2;
dice.add(dotRight);

var dotRightSecond = new THREE.Mesh(dotGeometry, dotMaterial);
dotRightSecond.position.set(D_X / 2, 0, D_Z / 3);
dotRightSecond.rotation.y = Math.PI / 2;
dice.add(dotRightSecond);

var dotRightThird = new THREE.Mesh(dotGeometry, dotMaterial);
dotRightThird.position.set(D_X / 2, 0, -D_Z / 3);
dotRightThird.rotation.y = Math.PI / 2;
dice.add(dotRightThird);

camera.position.z = 1;

var animate = function () {
  requestAnimationFrame(animate);
  dice.rotation.x += 0.02;
  dice.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();
