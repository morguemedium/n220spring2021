//when divided by 3, purple circle
//when divided by 5, green square
//when divided by 3 and 5, blue square

let i = 0;
let y = 50;
let yTwo = 40;

function setup(){
    createCanvas(900,400);
    background("#A28CA3");
    noLoop();
}

function draw(){
    background("#A28CA3");
    noStroke();

    while(i < 25){
        i++;
        console.log(i);
        fill (0);

        if(i % 3 == 0 && i % 5 == 0){
            fill ("#7187EB");
            square (i * 25 - 12,yTwo + 70,23);
            noFill ();
        }else if(i % 5 == 0){
            fill ("#47BA50");
            square (i * 25 - 10,yTwo + 70,23);
            noFill ();
        }else if(i % 3 == 0){
            fill ("#B049C9");
            circle(i * 25,y + 70,10);
            noFill ();
        }else{
            circle(i * 25,y + 70,10);
        }
    }
}