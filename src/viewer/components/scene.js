import {Color,Scene}  from "https://cdn.skypack.dev/three@0.137.5";

 function createScene(){

    const scene = new Scene();

    scene.background  = new Color( 0xf0f0f0 );

    return scene;
}

export{createScene};