import { Viewer } from "./Viewer";

main();

// Main entry point of viewer.
function main(){

    const container = document.querySelector('#scene-container');

    const viewer = new Viewer(container);
  
    viewer.render();

}

