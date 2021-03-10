// array with multiple objects with properties at x, y, r circle
// draw function loop through array
// change each objects position by 1 and draw

var circOne = {
    x: 120,
    y: 200,
    r: 30
}

var circTwo = {
    x: 250,
    y: 200,
    r: 30
}

var circThree = {
    x: 380,
    y: 200,
    r: 30
}

let trio = [ circOne, circTwo, circThree ];

function setup (){
    createCanvas(500,400);
    background("#3B0F4A");
}

function draw(){
    fill("#AA68B0");
    background("#3B0F4A");
    circle(circOne.x,circOne.y,circOne.r);
    circle(circTwo.x,circTwo.y,circTwo.r);
    circle(circThree.x,circThree.y,circThree.r);

    for(i=0; i < trio.length; i++){
        trio[i].x += 1;
        trio[i].y += 3;
    }
}

console.log(trio);