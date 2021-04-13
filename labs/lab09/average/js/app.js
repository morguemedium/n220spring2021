//input numbers from user (id)

let averageTxt = document.getElementById("averageTxt");

let displayInput = document.getElementById("displayInput");
displayInput.innerHTML = "You've typed: " + averageTxt.value;

function inputString(){
    
    let sum = 0;

    let userArray = averageTxt.value;
//input user list into an array

    let stringSplit = userArray.split(",");

    for(let x = 0; x < stringSplit.length; x++){
        sum += Number(stringSplit[x]);
    }
//convert the array into number string, loop sum + input together
    console.log(sum);
}

//calculate average
//display sum & average
//remove text so user can add new numbers