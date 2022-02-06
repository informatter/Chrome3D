import * as THREE from "https://cdn.skypack.dev/three@0.137.5";

let torus, torusKnotMaterial, torusKnot;

class Torus {
  constructor(radius, tubeRadius, tubularSegments, radialSegments) {

     torus = new THREE.TorusKnotGeometry(
      radius,
      tubeRadius,
      tubularSegments,
      radialSegments
    );

    torusKnotMaterial = new THREE.MeshLambertMaterial( { color: 0xff00ff } );

    torusKnot = new THREE.Mesh(torus, torusKnotMaterial);
  }

  getThreeMesh(){

    return torusKnot;
  }

  update() {
    //torusKnot.rotation.z += 0.01;
   // torusKnot.rotation.x += 0.01;
    //torusKnot.rotation.y += 0.01;
  }

  changeProperties(radius,tubeRadius,tubularSegments,radialSegments){

    torus.setAttribute('radius',radius);
    torus.setAttribute('tubeRadius',tubeRadius);
    torus.setAttribute('tubularSegments',tubularSegments);
    torus.setAttribute('radialSegments',radialSegments);
  }
}

export { Torus };
