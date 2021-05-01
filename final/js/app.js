let memoryBody = document.getElementById("memoryBody");

//let's add our eight colors

let sqColor = ["#FF5959", "#FFB259", "#FFFC59", "#8BFF59",
"#59EEFF", "#7A59FF", "#B759FF", "#FF59EC"];

let randColor = Math.floor(Math.random()*sqColor.length);

//let's make some squares!

for(let sq = 0; sq < 16; sq++){
    let sqDiv = document.createElement("div");
    sqDiv.style.height = "100px";
    sqDiv.style.width = "100px";
    sqDiv.style.backgroundColor = "#000000";
    sqDiv.style.margin = "10px";
    sqDiv.style.float = "left";
    //connect them to the page by appending them

    memoryBody.appendChild(sqDiv);

    //adding the event listener of changing the color

    sqDiv.addEventListener("click", changeColor);
}

function changeColor(event){
    event.target.style.backgroundColor = sqColor[randColor];
}