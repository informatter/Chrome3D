import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';


let orbitControls;
export class ViewControl{

    constructor(camara, canvas){

        orbitControls = new OrbitControls(camara, canvas);
        orbitControls.enableDamping = true;
        orbitControls.enablePan = true;
        orbitControls.enableZoom = true;
    }

    getOrbitControl(){
        return orbitControls;
    }

    update(){
        orbitControls.update();
    }
}