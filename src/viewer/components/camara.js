import {PerspectiveCamera }  from "https://cdn.skypack.dev/three@0.137.5";

 function createCamara(){
    const camara = new PerspectiveCamera(
        35, // field of view
        1, // aspect ratio, will be set by the container
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camara.position.set(0,0,10);

    return camara;
}

export { createCamara };
