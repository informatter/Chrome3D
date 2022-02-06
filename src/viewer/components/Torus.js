import {TorusKnotGeometry,MeshLambertMaterial,Mesh} from "https://cdn.skypack.dev/three@0.136.0";

let torus, torusKnotMaterial, torusKnot;

class Torus {
  constructor(radius, tubeRadius, tubularSegments, radialSegments) {

     torus = new TorusKnotGeometry(
      radius,
      tubeRadius,
      tubularSegments,
      radialSegments
    );

    torusKnotMaterial = new MeshLambertMaterial( { color: 0xff00ff } );

    torusKnot = new Mesh(torus, torusKnotMaterial);
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
