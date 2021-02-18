let xAxis = [15,30,45,60,75,90,105];
let cSpeed = 5;
let yAxis = 0;

// xAxis is array for starting positions on the x axis
//might not need cSpeed to get the function to draw butjust in case

function setup(){
    createCanvas(370,400);
    background("#82BDF5");
}

function draw(){
    for(var c = 0; c < xAxis.length; c++){
    noStroke();
    fill ("#AED7FC");
    circle(xAxis[c] * 3, yAxis, 10);
    }

    yAxis = yAxis + cSpeed;
}

// variable, boundary is less than the numbers in our xaxis array,
//each iteration will be adding one more of C
//draws circles at our xaxis and multiplying adds spaces
//y axis will move at our command below