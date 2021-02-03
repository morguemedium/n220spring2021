function setup(){
    createCanvas(400,300)
}

//draw a circle where the mouse is at
//p5 variables are mouseX and mouseY
//rightt side of canvas draw red circle
//left side of canvas draw blue circle

function draw(){
    background("#DEA6FF");
    line (mouseX, 0, mouseX, 300);
}
