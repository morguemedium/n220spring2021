var mySquare = {
    x: 100,
    y: 130,
    color: [245, 197, 93],
    update: function (){
        fill (this.color);
        this.x += 1.5;
        square(this.x, this.y, 30);
    }
}

function setup(){
    createCanvas(400,300);
}

function draw(){
   mySquare.update();
}