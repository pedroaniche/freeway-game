//car code
let xCars=[600,600,600,600,600,600];
let yCars=[40,96,150,210,270,318];
let carWidth=50;
let carHeight=40;
let carSpeeds=[2,2.5,3.2,5,3.3,2.3];

function drawCars() {
    for(let i=0; i<carImages.length; i++) {
        image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
    }
}

function moveCars() {
    for(let i=0; i<xCars.length; i++) {
        xCars[i]-=carSpeeds[i];
    }
}

function backStartPositionCars() {
    for(let i=0; i<xCars.length; i++) {
        if(passedWholeScreen(xCars[i])) {
            xCars[i]=600;
        }    
    }
}

function passedWholeScreen(xCars) {
    return xCars<-50;
}