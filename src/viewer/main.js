import { Viewer } from "./Viewer.js";

const startButton = document.querySelector("#start-button");

const introMessage = document.querySelector("#intro-message");

startButton.addEventListener("click", startApp);

//startApp();

// Main entry point of viewer.
function main() {
  const container = document.querySelector("#scene-container");

  const viewer = new Viewer(container);

  viewer.render();
}

function startApp() {
  main();

  if (introMessage.style.display === "none")
    introMessage.style.display = "block";

  else introMessage.style.display = "none";

  if (startButton.style.display === "none") 
    startButton.style.display = "block";

  else startButton.style.display = "none";
}
