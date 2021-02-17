let positions = [0,0,0,0,0,0,0,0,0,0,0];
let otherP = [0,0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(400,300);
}

function draw(){
    console.log(positions);

    background("#263D52");
    positions.push(mouseX);
    positions.shift();

    otherP.push(mouseY);
    otherP.shift();

    for(var i = 0; i < positions.length; i++){
        circle(positions[i], otherP[i], 30);
    }
}