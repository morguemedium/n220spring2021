//3 buttons
//one question each button
//data-answer attribute
//display answer in separate div
//one function

let greetingTitle = document.getElementById("greetingTitle");
greetingTitle.innerHTML = "Welcome! Click below to get an answer.";

let displayAnswer = document.getElementById("displayAnswer");
displayAnswer.innerHTML = "Your answer should display here.";

let questionOne = document.getElementById("questionOne");
questionOne = addEventListener("click", answerQuestion);

let questionTwo = document.getElementById("questionTwo");
questionTwo = addEventListener("click", answerQuestion);

let questionThree = document.getElementById("questionThree");
questionThree = addEventListener("click", answerQuestion);


function answerQuestion(event){
    let answer = event.target.getAttribute("data-answer");

    displayAnswer.innerHTML = answer;

}