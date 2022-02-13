import {
  DirectionalLight,
  HemisphereLight,
  AmbientLight,
  SpotLight} from "https://cdn.skypack.dev/three@0.136.0";



function createLights() {
    
    let lights = [];

    const light = new DirectionalLight(0xffffff,3);
    const hemiLight = new AmbientLight( 0x101030 ); //0xffffff ,10
    hemiLight.position.set( 0, 50, 0 );
    light.position.set(20, 50, 10);
    light.castShadow = true;
    hemiLight.castShadow = true;


    lights.push(light)
    lights.push(hemiLight)
  
    return lights;
  }
  
  export { createLights };