let sqHeight = 100;
let sqWidth = 100;

let sqManip = document.getElementById("sqManip");

sqManip.style.height = sqHeight + "px";
sqManip.style.width = sqWidth + "px";
sqManip.style.backgroundColor = "#41AB53";

function onClick(){
    if(sqWidth == 100 && sqHeight == 100){
        sqManip.style.width = sqWidth * 1.1 + "px";
        sqManip.style.height = sqHeight * 1.1 + "px";
    }
}