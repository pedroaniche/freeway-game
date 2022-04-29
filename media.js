// game images

let roadImage;
let actorImage;
let carImage1;
let carImage2;
let carImage3;

let soundtrackSound;
let hitSound;
let pointSound;

function preload() {
    roadImage=loadImage("images/road.png");
    actorImage=loadImage("images/actor.png");
    carImage1=loadImage("images/car-1.png");
    carImage2=loadImage("images/car-2.png");
    carImage3=loadImage("images/car-3.png");
    carImages=[carImage1,carImage2,carImage3,carImage1,carImage2,carImage3];
    soundtrackSound=loadSound("sounds/soundtrack.mp3");
    hitSound=loadSound("sounds/hit.mp3");
    pointSound=loadSound("sounds/point.wav")
}