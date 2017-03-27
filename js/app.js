$(document).ready(function(){

console.log("up and running!");

window.addEventListener("keydown", movePlayer, false);
// window.addEventListener("keypress", movePlayer, false);
// window.addEventListener("keyup", movePlayer, false);

var playerOne = $('.playerOne').position().left,
	playerTwo = $('.playerTwo').position().left;

//moving the player per the distance determined
function movePlayer(e){
	switch(e.keyCode) {
		case 65:
			console.log('a');
			$('.playerOne').animate({left: "+=50px"});
			console.log(playerOne);
			playerOne = $('.playerOne').position().left;
			console.log(playerOne);
			checkWin();
			break;
		case 76:
			console.log('l');
			$('.playerTwo').animate({left: "+=50px"});
			console.log(playerTwo);
			playerTwo = $('.playerTwo').position().left;
			console.log(playerTwo);
			checkWin();

			break;
	}
}


//check for win
function checkWin(){
	if (playerOne >= 831){
		alert('God save the Queen! Player One Wins!');
	} else if (playerTwo >= 831){
		alert('Yohoho and a bottle of Rum! Player Two Wins!');
	}
}

//reset game
$('.reset').click(function(){
		location.reload();
	});


});


//distance to move player per key press
// function distance(min,max){
// 	console.log("1");
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	console.log("2");
// 	return Math.floor(Math.Random()*(max - min)) + min;
	
// }

