
function setup(){
    createCanvas(400,400);
    background("#ADADAD");
}

function draw(){
    background("#ADADAD");
    noFill();
    for(var circ = 0; circ < 60; circ++){
        circle(200,200, circ * 5)
    }
}