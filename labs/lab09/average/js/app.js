//input numbers from user (id)

let averageTxt = document.getElementById("averageTxt");

let displayInput = document.getElementById("displayInput");
displayInput.innerHTML = "(wii sports music)";

function inputString(){
    
    let sum = 0;

    let userArray = averageTxt.value;
//input user list into an array

    let stringSplit = userArray.split(",");

    for(let x = 0; x < stringSplit.length; x++){
        sum += Number(stringSplit[x]);
    }
//convert the array into number string, loop sum + input together
  

let avgNum = 0;
//calculate average, define var

avgNum = sum / stringSplit.length;

displayInput.innerHTML = "Your sum is " + sum + "<br>" + "Your average is " + avgNum;
//display sum & average

averageTxt.value = "";
//removes text
}
