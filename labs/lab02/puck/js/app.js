function setup(){
    createCanvas(400,300);
    background(0);
}

//draw a circle where the mouse is at
//p5 variables are mouseX and mouseY
//right side of canvas draw red circle
//left side of canvas draw blue circle

function draw(){
    background(0);
    fill ("#FFFFFF");
    circle(mouseX,mouseY,30); 
}
