//script tag is always bottom of body

let txtDieSize = document.getElementById("txtDieSize");

let dvResult = document.getElementById("dvResult");
dvResult.innerHTML = "Hello World!"

function rollDie(){
    let dieSize = Number(txtDieSize.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    console.log(randRoll);

    txtDieSize.value = "";
}