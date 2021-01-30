function setup() {
    createCanvas(400,400);
}
let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function draw() {
    background("#4A1873");
    fill ("#B474E8");

    var myBool = xPos < 100;
    console.log(xPos,myBool);

    if(keyIsDown(LEFT_ARROW)){
        fill("#FFFFFF");
    }else{
        fill("#BB81EB");
    }
}
   
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
   

    ySpeed = ySpeed + .1;
    circle(xPos, yPos, 30);
