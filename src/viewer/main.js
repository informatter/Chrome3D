import { Viewer } from "./Viewer.js";




const startButton = document.querySelector("#start-button");

const introMessage = document.querySelector("#intro-message");

const fileInput = document.querySelector('#input-file');

startButton.addEventListener("click", startApp);

//const loader = new FBXLoader();

// Main entry point of viewer.
function main() {
  const container = document.querySelector("#scene-container");

  const viewer = new Viewer(container);

  viewer.run();
}

//fileInput.onchange = () => {
 // const selectedFile = fileInput.files[0];
 // console.log(selectedFile);

  //let buffer = new TextEncoder().encode(selectedFile);

//  var object = loader.parse(buffer.buffer, "");

 // loader.load(selectedFile,function(object){

 //   const a = 5;

 // });
//}

function startApp() {
  main();

  if (introMessage.style.display === "none")
    introMessage.style.display = "block";

  else introMessage.style.display = "none";

  if (startButton.style.display === "none") 
    startButton.style.display = "block";

  else startButton.style.display = "none";
}
