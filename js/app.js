// menu click animation

var myFunction = function(x){
	x.classList.toggle('change');
};


$(document).ready(function(){
	console.log("up and running!");
//defining players
var playerOne = document.getElementsByClassName('playerOne'),
	playerTwo = document.getElementsByClassName('playerTwo');

//distance to move player per key press
function distance(min,max){
	console.log("1");
	min = Math.ceil(min);
	max = Math.floor(max);
	console.log("2");
	return Math.floor(Math.Random()*(max - min)) + min;
	
}

//moving the player per the distance determined
function movePlayer(){
	console.log("3");
	(parsInt(document.getElementsByClassName('playerOne').style.right = right + distance(2,15)));
	console.log("4");
}


//keypress event listeners
playerOne.addEventListener("keydown", movePlayer());
playerTwo.addEventListener("keydown", movePlayer());

//finish line


//reset game
});