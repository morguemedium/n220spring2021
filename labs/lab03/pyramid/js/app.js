/*let ypos = 140;
let ystep = 30;
let xpos = 80;
let xstep = 30;
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background("#6FBDDE");
  fill(50);
  noStroke();

  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 9; i++) {
      ellipse(xpos+(xstep*i), ypos+(ystep*j), 20, 20);
    }
  }
}
*/

// text above is me referencing nested loops from p5 editor LOL

let xRun = 1
let xSpeed = 1

let yPos = 100;
let yStep = 50;
let xPos = 30;
let xStep = 50;

function setup(){
    createCanvas(400,400);
    background(0);
    noLoop();
    frameRate(1);
}

function draw(){
    fill ("#FFFFFF");
    noStroke();
    xRun = xRun + xSpeed;

    for(let c = 1; c < 5; c++){
      console.log(c);
        for(let d = 0; d < c; d++){
            square (xPos+(xStep*d), yPos+(yStep*c), 30, 30);
        }
    } 
}
