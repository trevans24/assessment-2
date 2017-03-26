// menu click animation

var myFunction = function(x){
	x.classList.toggle('change');
};

$(document).ready(function(){

console.log("up and running!");

$('.move').click(function(){
	$('playerOne').animate({
	marginLeft: "+=50",
});
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

//moving the player per the distance determined
// function movePlayer(e){
// 	console.log("3");
// 	if (e.keycode == 65){
// 		moveRight += distance(2,15);
// 		playerOne.style.left = left + "px";
// 		console.log("4");
// 	} if (e.keycode === 76){
// 		moveRight += distance(2,15);
// 		playerTwo.style.left = left + "px";
// 		console.log("5");
// 	}
// 	console.log("6");
// }

//finish line


//reset game

