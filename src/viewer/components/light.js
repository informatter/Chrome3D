import {DirectionalLight,HemisphereLight} from "https://cdn.skypack.dev/three@0.137.5";

function createLights() {
    

    let lights = [];

    const light = new DirectionalLight(0xffffff,3);
    const hemiLight = new HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 20, 0 );
    light.position.set(10, 10, 10);

    lights.push(light)
    lights.push(hemiLight)
  
    return lights;
  }
  
  export { createLights };