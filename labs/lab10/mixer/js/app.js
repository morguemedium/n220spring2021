//one div for display box

let displayColor = document.getElementById("displayColor");

let currentColor = displayColor.style.backgroundColor;

let displayColorText = document.getElementById("displayColorText");
displayColorText.innerHTML = "current color: " + currentColor;

document.getElementById("redOne").addEventListener("click", plusRed); 
document.getElementById("redFive").addEventListener("click", plusRed); 
document.getElementById("redTen").addEventListener("click", plusRed); 

document.getElementById("greenOne").addEventListener("click", plusGreen); 
document.getElementById("greenFive").addEventListener("click", plusGreen); 
document.getElementById("greenTen").addEventListener("click", plusGreen); 

document.getElementById("blueOne").addEventListener("click", plusBlue); 
document.getElementById("blueFive").addEventListener("click", plusBlue); 
document.getElementById("blueTen").addEventListener("click", plusBlue);

function plusRed(event){

    let colorArray = currentColor.substring(4).slice(0, -1).split(",");
    let redValue = Number(colorArray[0]);
    //code source froom stack overflow orz getting the background color as a string, removing the non-number characters, 
    //turning the result into an array, and 
    //taking the first (red) element from that array to manipulate it (christ)
    
    let value = Number(event.target.getAttribute("data-value"));
    
    newValue = redValue + value;
    var newColor = "rgb(" + newValue + "," + colorArray[1] + "," + colorArray[2] + ")";
    currentColor = newColor;
   
    displayColor.style.backgroundColor = newColor;

    displayColorText.innerHTML = "current color: " + newColor;
};

function plusGreen(event){
    let colorArray = currentColor.substring(4).slice(0, -1).split(",");

    let greenValue = Number(colorArray[1]);
    let value = Number(event.target.getAttribute("data-value"));

    newValue = greenValue + value;

    var newColor = "rgb(" + colorArray[0] + "," + newValue + "," + colorArray[2] + ")";

    displayColor.style.backgroundColor = newColor;
    currentColor = newColor;

    displayColorText.innerHTML = "current color: " + newColor;
}
function plusBlue(event){
    let colorArray = currentColor.substring(4).slice(0, -1).split(",");

    let blueValue = Number(colorArray[2]);
    let value = Number(event.target.getAttribute("data-value"));
    
    newValue = blueValue + value;

    var newColor = "rgb(" + colorArray[0] + "," + colorArray[1] + "," + newValue + ")";

    displayColor.style.backgroundColor = newColor;
    currentColor = newColor;

    displayColorText.innerHTML = "current color: " + newColor;
}

//console log data value of button clicked, the color you're adding (rgb), 
//and current value in displayColor block