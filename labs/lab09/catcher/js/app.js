/* Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
*/

let displayCount = document.getElementById("displayCount");
displayCount.innerHTML = "Type a sentence to filter for bad words.";

let inputSent = document.getElementById("inputSent");

function filterString(){

    let badWord = [ "clear", "water", "tires"];
    
    let userInput = inputSent.value;

    let splitString = userInput.split(" ");

    let badCount = 0;

    for(let i = 0; i < splitString.length; i++){
        for(let x = 0; x < badWord.length; x++){
            if(badWord[x] == splitString[i]){
                badCount++;
                displayCount.innerHTML = "Bad words found: " + badCount;
            }
        }
    }
    
    if(badCount == 0){
        displayCount.innerHTML = "Sentence clear.";
    }

    inputSent.value = "";
}
