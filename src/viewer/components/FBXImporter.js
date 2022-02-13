import {FBXLoader} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/FBXLoader.js';

//let loader,filePath,scene;
let Scene;
export class FBXImporter {
  constructor(filePath, scene) {
    this.filePath = filePath;
    this.loader = new FBXLoader();
    Scene = scene; // dont know why I had to do this here... scene was undefined in load()...
  }

  get foo() {
    return this.Scene;
  }

  load() {
    this.loader.load(this.filePath, function (object) {
      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      const scale = 0.01;

      object.scale.set(scale, scale, scale);

      Scene.add(object);
    });
  }
}