var mySquare = {
    x: 150,
    y: 120,
    r: 60,
    color: [97, 11, 70],
}

function setup (){
    createCanvas(400,300);
    background("#E6AAD3");
}

function draw(){
    fill (mySquare.color);
    square (mySquare.x,mySquare.y,mySquare.r);
}