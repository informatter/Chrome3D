import { createCamara } from './components/camara.js';
import { createScene } from "./components/scene.js";
import { createTorous } from "./components/torous.js";
import { createRenderer } from "./core/renderer.js";
import { Resizer } from "./core/Resizer.js";

// "module-scoped" = private variables in OOP world
// with the IMPORTANT difference that they are GLOBAL
// this means if 2 instances of this class are created,
// they will share these same values.
// AKA, TypeScript to the rescue !! (:
let camara, renderer, scene;

export class Viewer {
  // construct a new Viewer.
  constructor(container) {
    camara = createCamara();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const torus = createTorous();

    scene.add(torus);

    const resizer = new Resizer(container,camara,renderer);
  }

  //Renders the scene
  render() {

    renderer.render(scene,camara);
  }
}
