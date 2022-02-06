import {PerspectiveCamera }  from "https://cdn.skypack.dev/three@0.136.0";

 function createCamara(){
    const camara = new PerspectiveCamera(
        35, // field of view
        1, // aspect ratio, will be set by the container
        0.1, // near clipping plane
        100000, // far clipping plane
    );

    camara.position.set(100,200,1000);

    return camara;
}

export { createCamara };
