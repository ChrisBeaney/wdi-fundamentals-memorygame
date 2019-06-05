console.log("Up and running!");

//var cardOne = "Queen";
//var cardTwo = "Queen";
//var cardThree = "King";
//var cardFour = "King";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	//if (cardsInPlay.length === 2) {
	//	if (cardsInPlay[0] === cardsInPlay[1]) {
	//		alert("You found a match!");
	//	} else {
	//		alert("Sorry, try again.");
	//	} 
	//}
}

flipCard(0);
flipCard(1);