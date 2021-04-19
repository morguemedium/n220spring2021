//3 square divs
//grey
//200 x 200 px
//float left
//margin 5
//one event handler
//interacts with each element
//data attributes store the colors

let firstSquare = document.getElementById("firstSquare");
firstSquare = addEventListener("click", changeColor);

let secondSquare = document.getElementById("secondSquare");
secondSquare = addEventListener("click", changeColor);

let thirdSquare = document.getElementById("thirdSquare");
thirdSquare = addEventListener("click", changeColor);

function changeColor(event){
    let response = event.target.getAttribute("data-color");

    event.target.style.backgroundColor = response;
}

