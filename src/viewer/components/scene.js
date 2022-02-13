import {
    Color,
    Scene,
    GridHelper,
    PlaneGeometry,
    ShadowMaterial,
    Mesh}  from "https://cdn.skypack.dev/three@0.136.0";

 function createScene(){

    const scene = new Scene();

    scene.background  = new Color( "rgb(200, 200, 200)" ); //0xf0f0f0 

    // const planeGeometry = new PlaneGeometry( 2000, 2000 );

    // planeGeometry.rotateX( - Math.PI / 2 );
    // const planeMaterial = new ShadowMaterial( { color: 0x000000, opacity: 0.2 } );

    // const plane = new Mesh( planeGeometry, planeMaterial );
    // plane.position.y = -200;
    // plane.receiveShadow = true;

    const helper = new GridHelper( 2000, 50 );
    helper.position.y = - 200;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;

   scene.add( helper );

   scene.add( plane );

    return scene;
}

export{createScene};