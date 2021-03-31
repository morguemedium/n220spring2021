//input id
//input id
//one button

let txtOverlay = document.getElementById("txtOverlay");
txtOverlay.innerHTML = "Please input Username and Password"

function verifyInfo(){
   
    let txtUsername = document.getElementById("txtUsername").value;

    let txtPassword = document.getElementById("txtPassword").value;

    let unTxt = "Username";

    let psTxt = "Password"; 

    if(txtUsername == unTxt && txtPassword == psTxt){
        txtOverlay.innerHTML = "Success";
    }
    else{
        txtOverlay.innerHTML = "Failure";
    }
}