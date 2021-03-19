//ten circles to the page

let xPos = [0,0,0,0,0,0,0,0,0,0,0];
let yPos = [0,0,0,0,0,0,0,0,0,0,0];
let colors = [0, "#FFFAF2", "#FFF0D9", "#FFE8C4", "#FFE1B0", "#FFD899", "#FFCE80", 
"#FFC05C", "#FCB13A", "#FAA319", "#FA9900"];
let reverse = ["#FA990", "#FAA319","#FCB13A", "#FFC05C", "#FFCE80",
"#FFD899", "#FFE1B0", "#FFE8C4", "#FFF0D9", "#FFFAF2", "#FFFFFF"];

function setup(){
    createCanvas(500,500);
    background("#2C2463");
}

function draw(){
    background("#2C2463");

    xPos.push(mouseX);
    xPos.shift();

    yPos.push(mouseY);
    yPos.shift();

    for(var i = 0; i < xPos.length; i++){
        fill (reverse[i]);
        circle(250, yPos[i], 10);
    }
}
//the code draws the xPos array length on the mouseY axis