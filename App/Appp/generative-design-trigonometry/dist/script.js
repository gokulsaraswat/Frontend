const settings = {};

const defaults = {
  hasStroke: true,
  hasLimitCycles: false,
  cycles: 1,
  radius: 230,
  sizeShape: 30,
  angleSpeed: 0.001,
  frameSpeedFactor: 1,
  colorSpeedFactor: 0.001,
  cosFrameSpeedFactor: 0.1,
  sinFrameSpeedFactor: 0.01,
  posxFactor: 0.1,
  posyFactor: 1,
  resetFrames: () => {
    frames = 0;
    angle = 0;
    setup();
  },
  stop: () => isStoped = true,
  restart: () => isStoped = false,
  resetDefaults: function () {
    Object.assign(settings, defaults);
    this.resetFrames();
  } };


Object.assign(settings, defaults);

const gui = new dat.GUI();
gui.add(settings, 'hasStroke').listen();
gui.add(settings, 'hasLimitCycles').listen();
gui.add(settings, 'cycles').min(1).max(10).step(1).listen();
gui.add(settings, 'radius').min(10).max(230).step(1).listen();
gui.add(settings, 'sizeShape').min(1).max(50).step(1).listen();
gui.add(settings, 'angleSpeed').min(0.001).max(0.1).step(0.001).listen();
gui.add(settings, 'frameSpeedFactor').min(1).max(3).step(1).listen();
gui.add(settings, 'colorSpeedFactor').min(0.001).max(0.1).step(0.001).listen();
gui.add(settings, 'cosFrameSpeedFactor').min(0.01).max(0.1).step(0.01).listen();
gui.add(settings, 'sinFrameSpeedFactor').min(0.01).max(0.1).step(0.01).listen();
gui.add(settings, 'posxFactor').min(0.1).max(1).step(0.1).listen();
gui.add(settings, 'posyFactor').min(0.1).max(1).step(0.1).listen();
gui.add(settings, 'resetFrames');
gui.add(settings, 'stop');
gui.add(settings, 'restart');
gui.add(settings, 'resetDefaults');
gui.close();

let angle = 0;
let frames = 0;
let canvas = null;
let isStoped = false;

function setup() {
  canvas = createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  background(0, 10, 10);
}

function draw() {
  if (settings.hasLimitCycles && angle >= Math.PI * 2 * settings.cycles || isStoped) return;

  if (!settings.hasStroke) noStroke();else
  stroke(1);

  const frameSpeed = frames * settings.frameSpeedFactor;

  fill(
  (0.5 * sin(frameSpeed * settings.colorSpeedFactor) + 0.5) * 360,
  100,
  100);


  translate(width / 2, height / 2);
  rotate(angle);

  ellipse(
  cos(frameSpeed * settings.cosFrameSpeedFactor) * settings.radius * settings.posxFactor,
  sin(frameSpeed * settings.sinFrameSpeedFactor) * settings.radius * settings.posyFactor,
  settings.sizeShape);


  angle += settings.angleSpeed;
  frames += 1;
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(canvas, 'generative');
}