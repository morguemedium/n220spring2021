//three square divs
//all grey
// 200 x 200 px
//floated left
//5 px margin

let colorSq = ["#750000", "#00750E", "#000A75"];
//red, green, blue
for(c = 0; c < colorSq.length; c++){}

let firstSquare = document.getElementById("firstSquare");

for(s = 0; s < 3; s++){
    let moreSquare = document.createElement("div");

    moreSquare.style.height = "200px";
    moreSquare.style.width = "200px";
    moreSquare.style.float = "left";
    moreSquare.style.margin = "5px";
    moreSquare.style.backgroundColor = "#BABABA";

    firstSquare.appendChild(moreSquare);
}
