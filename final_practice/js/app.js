document.addEventListener('DOMContentLoaded', () => {

    //let's make our card array

    let cardArray = [
        {
        name: 'redCircle',
        img: 'images/redcircle.png'
        },
        {
        name: 'redCircle',
        img: 'images/redcircle.png'
        },
        {
            name: 'orangeSquare',
            img: 'images/orangesquare.png'
        },
        {
            name: 'orangeSquare',
            img: 'images/orangesquare.png'
        },
        {
            name: 'yellowSun',
            img: 'images/yellowsun.png'
        },
        {
            name: 'yellowSun',
            img: 'images/yellowsun.png'
        },
        {
            name: 'greenTriangle',
            img: 'images/greentriangle.png'
        },
        {
            name: 'greenTriangle',
            img: 'images/greentriangle.png'
        },
        {
            name: 'blueDroplet',
            img: 'images/bluedroplet.png'
        },
        {
            name: 'blueDroplet',
            img: 'images/bluedroplet.png'
        },
        {
            name: 'blueStar',
            img: 'images/bluestar.png'
        },
        {
            name: 'blueStar',
            img: 'images/bluestar.png'
        },
        {
            name: 'purpleMoon',
            img: 'images/purplemoon.png'
        },
        {
            name: 'purpleMoon',
            img: 'images/purplemoon.png'
        },
        {
            name: 'pinkHeart',
            img: 'images/pinkheart.png'
        },
        {
            name: 'pinkHeart',
            img: 'images/pinkheart.png'
        }
];

cardArray.sort(()=> 0.5 - Math.random());
let cardsChosen = [];
let cardsChosenId = [];

//creating the actual game board

let grid = document.querySelector('.grid');

function createBoard(){

    for(let c = 0; c < cardArray.length; c++){
        let card = document.createElement('img');
        card.style.height = "100px";
        card.style.width = "100px";
        card.style.padding = "10px";
        card.setAttribute('src', 'images/black.png');
        card.setAttribute('data-id', c);
        card.addEventListener('click', flipCard);

        grid.appendChild(card);
    }
};

createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    //adding into the array
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    //technically already have cards chosen at this point

    if(cardsChosen.length == 2){
        setTimeout(checkMatch, 220);
    }
    //should give user two seconds to see the card before flipping back to black card
}

//checking for matches

function checkMatch(){
    let cards = document.querySelectorAll('img');
    const optionOne = cardsChosenId[0];
    const optionTwo = cardsChosenId[1];
    //what
    
    if(cardsChosen[0] == cardsChosen[1]){
        cards[optionOne].setAttribute('src', 'images/grey.png');
        cards[optionTwo].setAttribute('src', 'images/grey.png');
    }else {
        cards[optionOne].setAttribute('src','images/black.png');
        cards[optionTwo].setAttribute('src', 'images/black.png');
    }
}
});
//means everything in here will run before stylesheets and the like are loaded