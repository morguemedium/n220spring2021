
for(var sqNew = 0; sqNew < 100; sqNew++){
    let newColor = Math.floor(Math.random()*16777215).toString(16);
    
    var newDiv = document.createElement("newDiv");
    newDiv.style.height = "20px";
    newDiv.style.width = "20px";
    newDiv.style.backgroundColor = "#" + newColor;
    newDiv.style.stroke = "#000000";
    newDiv.style.float = "left";
    newDiv.style.margin = "10px";

    document.body.appendChild(newDiv);
}
