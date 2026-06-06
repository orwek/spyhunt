/** This code works only on properly formatted PWAs **/
// Modified from: https://codepen.io/carlosSolisModyo/pen/zYEzXLo

let beforeInstallPrompt = null;

window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event) {
  beforeInstallPrompt = event;
  document.getElementById("installBtn").style = "display: block;";
}

function errorHandler(event) {
  console.log("error: " + event);
}

function install() {
  if (beforeInstallPrompt) beforeInstallPrompt.prompt();
}
