function setup() {
  createCanvas(500, 400);
  soundtrackSound.loop();
}

function draw() {
  background(roadImage);
  drawActor();
  moveActor();
  drawCars();
  moveCars();
  backStartPositionCars();
  collieCheck();
  drawScore();
  makePoint();
}