dvResult.innerHTML = "Welcome";

function greetName(){
    let txtName = document.getElementById("txtName").value;
    let dvResult = document.getElementById("dvResult");
    dvResult.innerHTML = "Hello, " + txtName;
    document.getElementById('txtName').value;
}