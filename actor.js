//actor code

let xActor=86;
let yActor=366;
let actorWidth=30;
let actorHeight=30;
let hit=false;
let points=0;

function drawActor() {
  image(actorImage, xActor, yActor, actorWidth, actorHeight);
}
  
function moveActor() {
  if(keyIsDown(UP_ARROW)) {
    yActor-=3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(yActor<366)yActor+=3;
  }
}

function collieCheck() {
  for(let i=0; i<carImages.length; i++) {
    hit=collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, 15, 15);
    if(hit) {
      if(points>0) points--;
      hitSound.play();
      backStartPositionActor();
    }
  }
}

function backStartPositionActor() {
  yActor=366;
}

function drawScore() {
  textAlign(CENTER);
  textSize(25);
  fill('#FF8C00');
  text(points, width/5, 27);
}

function makePoint() {
  if(yActor<15) {
    points++;
    pointSound.play();
    backStartPositionActor();
  }
}