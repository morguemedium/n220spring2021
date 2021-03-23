//one input + one button
//calculate both tip and full value

let tipAdd = .20;

let txtOverlay = document.getElementById("txtOverlay");
txtOverlay.innerHTML = "Tip: " + "Total: "

function txtGen(){
    let txtTip = document.getElementById("txtTip");
    let inText = Number(txtTip.value);
    let tipVal = inText * tipAdd;
    
    tipVal = Number(tipVal.toFixed(2));
    console.log(typeof tipVal);

    let txtTotal = tipVal + inText;
    txtOverlay.innerHTML = "Tip: " + tipVal + " Total: " + txtTotal;
}