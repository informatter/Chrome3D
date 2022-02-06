import {Clock} from "https://cdn.skypack.dev/three@0.137.5"; 

const clock = new Clock();

// handles all the animation system.
class UpdateLoop {
    constructor(camera, scene, renderer) {
      this.camera = camera;
      this.scene = scene;
      this.renderer = renderer;
      this.objects = [];
    }
  
    // starts running the update loop.
     run() {

      this.renderer.setAnimationLoop(() => {
        // tell every animated object to tick forward one frame
        this.update();
  
        // render a frame
        this.renderer.render(this.scene, this.camera);
      });
    }
  
    // stops running the update loop.
    stop() {
      this.renderer.setAnimationLoop(null);
    }
  
    // updates all objects in the scene
    // at 60FPS
    update() {

      const delta = clock.getDelta();
  
      for (const object of this.objects) {
            object.update(delta);
      }
    }
  }
  
  export { UpdateLoop };