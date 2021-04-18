let gameBody = document.getElementById("gameBody");

//make 4 enemies
for(let e = 0; e < 4; e++){
    let newEn = document.createElement("div");
    newEn.style.height = "30px";
    newEn.style.width = "30px";
    newEn.style.position = "absolute";
    newEn.style.top = (Math.random() * 300) + "px";
    newEn.style.left = (Math.random() * 300) + "px";
    newEn.style.backgroundColor = "#A368BD";

    gameBody.appendChild(newEn);

    newEn.addEventListener("click", removeEnemy);
}

function removeEnemy(event){
    event.target.remove();
}