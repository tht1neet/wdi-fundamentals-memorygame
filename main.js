// array for cards
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];

//array for cards in play

var cardsInPlay = [];
var checkForMatch = function(){
	//do they match?
    if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry try again")
	}
}

var flipCard = function () {
	cardId = this.getAttribute('data-id');
	console.log(cardId);
    //add card to array of cardsInPlay
	cardsInPlay.push(cards[cardId].rank);
	//display card image
	this.setAttribute('src', cards[cardId].cardImage);
	//display suit in console
	console.log(cards[cardId].suit)
	//see if two cards have been played
	if (cardsInPlay.length === 2){
		checkForMatch();
		cardsInPlay =[];
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.ceateElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		//now adding an event listener so we can do when people click on cards
		cardElement.addEventListener('click', flipcard);
		//now the card has to go on the board
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//create the board
createBoard();