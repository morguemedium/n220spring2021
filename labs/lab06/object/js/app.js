//object with properties for x, y, radius circle
//draw function +1 to one or more
//draw circle described by object

var obCirc = {
    x: 70,
    y: 130,
    r: 45,
    color: [11, 97, 48]
    }

function setup (){
    createCanvas(600,400);
    background ("#36EB84");
}

function draw(){
    fill ("#18703E");
    background("#36E884");
    circle(obCirc.x,obCirc.y,obCirc.r);

    obCirc.x += 2;
    obCirc.y += 1;
}