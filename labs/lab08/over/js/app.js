//square div
// 100 x 100
//blue background
//onmouseover black
//onmouseout back to blue

let newSq = document.getElementById("newSq");

newSq.style.height = "100px";
newSq.style.width = "100px";
newSq.style.backgroundColor = "#3962B3";

function onOver(){
    newSq.style.backgroundColor = "#000000";
}

function onOut(){
    newSq.style.backgroundColor = "#3962B3";
}