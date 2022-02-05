import {PerspectiveCamara}  from "https://cdn.skypack.dev@0.137.5";

function createCamara(){
    const camara = new PerspectiveCamara(
        35, // field of view
        1, // aspect ratio
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camara.position(0,0,10);

    return camara;
}