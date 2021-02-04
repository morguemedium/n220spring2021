xPos = 100;

function setup (){
    createCanvas(800,600);
    background("#7E75FF");
}

function draw(){
    background("#7E75FF");
    circle(xPos,300,100);

    xPos = xPos + 5;

    if(xPos > 800){
        xPos = 0;
    }
}