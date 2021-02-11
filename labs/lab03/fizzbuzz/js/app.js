//when divided by 3, purple circle
//when divided by 5, green square
//when divided by 3 and 5, blue square

let xRun = 1;
let yRun = 1;

let xPos = 70;
let yPos = 100;
let xStep = 60;
let yStep = 50;

function setup(){
    createCanvas(400,400);
    background("#A28CA3");
    noLoop();
}

function draw(){
    background("#A28CA3");
    noStroke();
    fill ("#000000");

    for(let a = 0; a < 5; a++){
    for(let b = 0; b < 5; b++){
    circle(xPos + (xStep*a), yPos + (yStep*b), 20, 20);
}
    }
}