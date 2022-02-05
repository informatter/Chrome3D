import * as THREE from "https://cdn.skypack.dev/three@0.137.5";

 function createTorous() {

  const torusKnotGeometry = new THREE.TorusKnotGeometry(3, 1, 256, 32);
  const torusKnotMaterial = new THREE.MeshNormalMaterial();

  const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);

  return torusKnot;
}

export{createTorous};
