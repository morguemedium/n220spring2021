//connect the webpage with DOM so it loads before the styling sheets
//everything will go into this since 'gameboard is the container
//make the grid in style

document.addEventListener('DOMContentLoaded', () => {

//all cards go into here

let cardTiles = [{
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

//empty cards and empty cards ID for later
cardTiles.sort(()=> 0.5 - Math.random());
//randomize tiles
let cardSelect = [];
let selectId = [];

//select the entire game board

let gameBoard = document.querySelector('.gameBoard');

//height, width, padding, attribute id, attribute data id, addevent click flip

function createBoard(){
    for(let c = 0; c < cardTiles.length; c++){
        let cards = document.createElement('img');
        cards.style.height = "100px";
        cards.style.width = "100px";
        cards.style.padding = "10px";
        cards.setAttribute('src', 'images/black.png');
        cards.setAttribute('data-id', c);
        cards.addEventListener('click', flipCard);

        gameBoard.appendChild(cards);
    }
};

//we have to invoke the function now in order for it to work
//create the flipcard card function

createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');
    //this variable will run through and grab the id of the card chosen
    cardSelect.push(cardTiles[cardId].name);
    //pulling from the array of cards and pushing it into the id and giving it a name
    selectId.push(cardId);
    //pushing card into empty selected array
    this.setAttribute('src', cardTiles[cardId].img);
    //sets an attribute to card id that will be pulled from tiles
    //we'll have two cards technically selected at this point

    if(cardSelect.length == 2){
        setTimeout(checkMatch, 220);
    };
    //gives user two seconds to view cards, program runs to check if the cards match

    function checkMatch(){
        let cardsMatch = document.querySelectorAll('img');
        //will create a variable to call for all images
        //there will be two cards clicked at the same time, so we will need
        //to make a constant, unchanging variable to call on
        const firstCard = selectId[0];
        const secondCard = selectId[1];

        if(cardSelect[0] == cardSelect[1]){
            cardsMatch[firstCard].setAttribute('src', 'images/grey.png');
            cardsMatch[secondCard].setAttribute('src', 'images/grey.png');
            //if the two selected tiles in the array match the id, it Should 
            //remove the tile slash replace the image with a grey placeholder
        } else {
            cardsMatch[firstCard].setAttribute('src', 'images/black.png');
            cardsMatch[secondCard].setAttribute('src', 'images/black.png');
            //if the two selected do not match, it should switch back to black
        }
        cardSelect = [];
        selectId = [];
        //more empty arrays so the cards will continue to flip
    };
};

});