const draw = require("./draw-all");
const startTrainAnimations = require("./animate-trains");
const scaleStations = require("./scale-stations");
const stations = require("../../data/stations.json");

const elem = document.getElementById("graph");
const params = { width: elem.offsetWidth, height: elem.offsetHeight };
const original = { width: 940, height: 600 };
let scalingX = params.width / original.width;
let scalingY = params.height / original.height;
const two = new Two(params).appendTo(elem);
const scaledStations = scaleStations(stations, scalingX, scalingY);

isDesktop() &&
  draw(two, scaledStations) &&
  startTrainAnimations(two, scaledStations) && console.log("ahjsg");

function resize() {
  // TODO: bounce
  two.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
  const scaling = {
    x: elem.offsetWidth / original.width,
    y: elem.offsetHeight / original.height,
  };
  isDesktop() &&
    draw(two, scaledStations) &&
    startTrainAnimations(two, scaledStations);
}

window.addEventListener("resize", resize);

function isDesktop() {
  return window.innerWidth > 1600 && window.innerHeight > 900;
}
