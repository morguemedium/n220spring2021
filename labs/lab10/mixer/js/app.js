//one div for display box

let black = ["0", "0", "0"];

let displayColor = document.getElementById("displayColor");
let displayColorText = document.getElementById("displayColorText");
displayColorText.innerHTML = "current color: " + black;

let redLine = document.getElementById("redLine");
let greenLine = document.getElementById("greenLine");
let blueLine = document.getElementById("blueLine");
//only has the text

let redOne = document.getElementById("redOne");
redOne = addEventListener("click", plusOne);
let redFive = document.getElementById("redFive");
redFive = addEventListener("click", plusFive);
let redTen = document.getElementById("redTen");
redTen = addEventListener("click", plusTen);
//connecting red buttons to corresponding addition

let greenOne = document.getElementById("greenOne");
greenOne = addEventListener("click", plusOne);
let greenFive = document.getElementById("greenFive");
greenFive = addEventListener("click", plusFive);
let greenTen = document.getElementById("greenTen");
greenTen = addEventListener("click", plusTen);
//connecting green buttons to corresponding addition

let blueOne = document.getElementById("blueOne");
blueOne = addEventListener("click", plusOne);
let blueFive = document.getElementById("blueFive");
blueFive = addEventListener("click", plusFive);
let blueTen = document.getElementById("blueTen");
blueTen = addEventListener("click", plusTen);
//connecting blue buttons to corresponding addition

function plusOne(event){}
function plusFive(event){}
function plusTen(event){}