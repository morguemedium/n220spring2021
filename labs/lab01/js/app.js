function setup() {
    createCanvas(800,600)

var black = "#000000";
var dark = "#2A2B2B";
var lighter = "#4E4F4F";
var lightest = "#6D6E6E";

background(black);

circle(100,400,60,60);

fill (lightest);
circle(300,400,60,60);

fill (lighter);
circle(500,400,60,60);

fill(dark);
circle(700,400,60,60);

}