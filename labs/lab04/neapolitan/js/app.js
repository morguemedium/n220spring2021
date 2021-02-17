let colors = ["#704E2E", "#FCF6F0", "#FFCCF6"];

function setup(){
    createCanvas(400,300);

    for(var i = 0; i < colors.length; i++){
        fill (colors[i]);
        square(30 + 100 * i, 30, 90);
    }
}
