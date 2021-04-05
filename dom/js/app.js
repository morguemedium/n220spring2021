//style div with height and width
let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";

dvCoin.style.backgroundColor = "#C4694D";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin(){
    let flip = Math.random();
    let side = "heads";
   
    if(flip < .5) side = "tails";
    dvCoin.innerHTML = side;

    if(side == "tails"){
       dvCoin.style.backgroundColor = "#C4694D";
    } else{
        dvCoin.style.backgroundColor = "#91843C";
    }
}