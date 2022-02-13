import {
  TorusKnotGeometry,
  MeshLambertMaterial,
  Mesh,
  Color,
  MeshBasicMaterial} from "https://cdn.skypack.dev/three@0.136.0";

let torus, torusKnotMaterial, torusKnot;

class Torus {
  constructor(radius, tubeRadius, tubularSegments, radialSegments) {

     torus = new TorusKnotGeometry(
      radius,
      tubeRadius,
      tubularSegments,
      radialSegments
    );
 
    const torusKnotMaterial = new MeshLambertMaterial( { color: 0xff00ff } );

    const wireFrameProps= { 
      color: new Color("rgb(165, 165, 165)") , 
      wireframe: true, 
      transparent: true };

    const wireframeMaterial = new MeshBasicMaterial( wireFrameProps);

    torusKnot = new Mesh(torus, torusKnotMaterial);

    torusKnot.position.y = 200;

    torusKnot.receiveShadow=true;

    let wireframe = new Mesh( torus, wireframeMaterial );

    torusKnot.add(wireframe)
  }

  getThreeMesh(){

    return torusKnot;
  }


  update() {
    //torusKnot.rotation.z += 0.01;
   // torusKnot.rotation.x += 0.01;
    //torusKnot.rotation.y += 0.01;
  }


  changeRadius(radius,tubeRadius){
   // torus.setAttribute('radius',radius);
    
     return new Torus(
       radius,
       tubeRadius,
       this.tubularSegments,
       this.radialSegments)
    //this.radius+=radius;
  }

  updateProperties(radius,tubeRadius,tubularSegments,radialSegments){

      return new Torus(
        radius,
        tubeRadius,
        tubularSegments,
        radialSegments)

  }


}

export { Torus };
