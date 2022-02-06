import { createCamara } from './components/camara.js';
import { createScene } from "./components/scene.js";
import { createRenderer } from "./core/renderer.js";
import { Resizer } from "./core/Resizer.js";
import {UpdateLoop} from "./core/UpdateLoop.js"
import {Torus} from './components/Torus.js'
import {createLights} from './components/light.js'
import {ViewControl} from './components/ViewControl.js'
import {FBXImporter} from './components/FBXImporter.js';


// "module-scoped" = private variables in OOP world
// with the IMPORTANT difference that they are GLOBAL
// this means if 2 instances of this class are created,
// they will share these same values.
// AKA, TypeScript to the rescue !! (:
let camara, renderer, scene, updateLoop,fbxLoader;

let lights = [];

export class Viewer {
  // construct a new Viewer.
  constructor(container) {
    camara = createCamara();
    scene = createScene();
    renderer = createRenderer();
    lights = createLights();
    updateLoop = new UpdateLoop(camara,scene,renderer);
    container.append(renderer.domElement);

    fbxLoader = new FBXImporter('/assets/stanfordBunny.fbx',scene)

   // const torus = new Torus(10, 3, 100, 16);

   fbxLoader.load();

    const controls = new ViewControl(camara,renderer.domElement);

    //updateLoop.objects.push(torus);

    updateLoop.objects.push(controls);

   //scene.add(torus.getThreeMesh());

    lights.forEach(light => {
      scene.add(light)
    });

    const resizer = new Resizer(container,camara,renderer);
  }

  //Renders the scene only once.
  render() {
    renderer.render(scene,camara);
  }

  // starts updating once per frame
  // i.e 60 FPS
  run(){
    updateLoop.run();
  }

  // stops updating completely
  stop(){
    updateLoop.stop();
  }
}
