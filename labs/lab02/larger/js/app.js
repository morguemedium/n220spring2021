rRad = 1;
rSpeed = 1;

function setup(){
    createCanvas(600,400);
    background("#DE3E41");
}

function draw(){
    background("#DE3E41");
    fill ("#FFFFFF");
    circle(300,200,rRad);

    rRad = rRad + rSpeed;

    if(rRad > 200){
        rRad = 0;
    }
}