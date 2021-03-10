let colors = ["#83F55D", "#F5F25D", "#F55D5D"];
//setting up the colors

function setup(){
    createCanvas(500,400);
    background("#8350C7");

    for(var x = 0; x < colors.length; x++){
        fill (colors[x]);
        circle(240, 100 + 90 * x, 30);
    }
}

// making the addition and the multiply rotates the circles