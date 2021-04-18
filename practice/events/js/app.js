let element = document.getElementById("eventTest");
element = addEventListener("click", itsClicked);

function itsClicked(event){
    
    event.target.style.backgroundColor = "#B3B3B3";

    let response = event.target.getAttribute("data-log");
    
    event.target.innerHTML = response;
}