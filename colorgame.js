var headerWrapper = document.getElementById("header-wrapper");
var redNum = document.getElementById("red");
var greenNum = document.getElementById("green");
var blueNum = document.getElementById("blue");

var newGame = document.querySelector(".menu1");
var message = document.querySelector(".message");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var field = document.getElementById("field");
console.log(field);
var squares = document.querySelectorAll(".square");
var row2 = document.querySelector(".row2");
console.log(row2);
var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");

var fadeIn = document.getElementsByClassName("fadein");
var fadeOut = document.getElementsByClassName("fadeout");

var rgb1 = "black";
var rgb2 = "black";
var rgb3 = "black";
var rgb4 = "black";
var rgb5 = "black";
var rgb6 = "black";

var rgbs = [];
var answer = null;
var hardVersion = true;

//events when the answer is clicked
function correctBehavior(){
	//change background color of header
	headerWrapper.style.backgroundColor = 'rgb(' + answer[0] + ',' + answer[1] + ',' + answer[2] + ')';
	//make all elements fade in
	squares.forEach(function(square){
		square.classList.remove('fadeout');
		square.style.backgroundColor = 'rgb(' + answer[0] + ',' + answer[1] + ',' + answer[2] + ')';
		square.classList.add('fadein');
	})
	//show message
	message.innerHTML = "CORRECT!";
	//change 'NEW COLOR'
	newGame.innerHTML = "Play again?";

	}

//after the event of the answer the elements are no longer clickable
function disableClick(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.pointerEvents = 'none';
	};
} 

//reset the elements clickable
function ableClick(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.pointerEvents = 'auto';
	};
} 

//events when the non-answer elements are clicked
function wrongBehavior(square){
	//make the elements fade out
	square.classList.add('fadeout');
	//show a message
	message.innerHTML = "Try again";
}

//create array of rgb numbers
function generateRGB(){
	var	red = Math.floor((Math.random() * 255) + 1);
	var	green = Math.floor((Math.random() * 255) + 1);
	var	blue = Math.floor((Math.random() * 255) + 1);
	var rgb = [red, green, blue];

	return rgb;
}

//reset game when some buttons are clicked
function resetGame(){
	//remove a class 'fadein'
	if(fadeIn.length > 0){
		squares.forEach(function(square){
		square.classList.remove('fadein');
		})
	}
	ableClick();

	//change 'try again?'
	newGame.innerHTML = "NEW COLOR";
	//make a message empty
	message.innerHTML = "";
	//initialize the header color
	headerWrapper.style.backgroundColor = "#171484";
}

function startGame(){
	//HARD VERSION
	if(hardVersion){
		// generate 6rgb colors
		rgb1 = generateRGB();
		square1.style.backgroundColor = 'rgb(' + rgb1[0] + ',' + rgb1[1] + ',' + rgb1[2] + ')';

		rgb2 = generateRGB();
		square2.style.backgroundColor = 'rgb(' + rgb2[0] + ',' + rgb2[1] + ',' + rgb2[2] + ')';

		rgb3 = generateRGB();
		square3.style.backgroundColor = 'rgb(' + rgb3[0] + ',' + rgb3[1] + ',' + rgb3[2] + ')';

		rgb4 = generateRGB();
		square4.style.backgroundColor = 'rgb(' + rgb4[0] + ',' + rgb4[1] + ',' + rgb4[2] + ')';

		rgb5 = generateRGB();
		square5.style.backgroundColor = 'rgb(' + rgb5[0] + ',' + rgb5[1] + ',' + rgb5[2] + ')';

		rgb6 = generateRGB();
		square6.style.backgroundColor = 'rgb(' + rgb6[0] + ',' + rgb6[1] + ',' + rgb6[2] + ')';

		//store 6 rgbs
		rgbs = [rgb1, rgb2, rgb3, rgb4, rgb5, rgb6];
		answer = rgbs[Math.floor(Math.random() * rgbs.length)];

		redNum.innerHTML = answer[0];
		greenNum.innerHTML = answer[1];
		blueNum.innerHTML = answer[2];

		console.log(rgbs);
		console.log(answer);

		// for(var i = 0; i < squares.length; i++){
		// 	squares[i].addEventListener('click', function(){
		// 	if(answer[0] === rgb1[0] && answer[1] === rgb1[1] && answer[2] === rgb1[2]){
		// 		correctBehavior();
		// 		disableClick();

		// 	}else{
		// 		wrongBehavior(square1);
		// 	}
		// })
		// }

		square1.addEventListener('click', function(){
			if(answer[0] === rgb1[0] && answer[1] === rgb1[1] && answer[2] === rgb1[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square1);
			}
		})

		square2.addEventListener('click', function(){
			if(answer[0] === rgb2[0] && answer[1] === rgb2[1] && answer[2] === rgb2[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square2);
			}
		})

		square3.addEventListener('click', function(){
			if(answer[0] === rgb3[0] && answer[1] === rgb3[1] && answer[2] === rgb3[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square3);
			}
		})

		square4.addEventListener('click', function(){
			if(answer[0] === rgb4[0] && answer[1] === rgb4[1] && answer[2] === rgb4[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square4);
			}
		})

		square5.addEventListener('click', function(){
			if(answer[0] === rgb5[0] && answer[1] === rgb5[1] && answer[2] === rgb5[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square5);
			}
		})

		square6.addEventListener('click', function(){
			if(answer[0] === rgb6[0] && answer[1] === rgb6[1] && answer[2] === rgb6[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square6);
			}
		})
	}else{
		// generate 3rgb colors
		rgb1 = generateRGB();
		square1.style.backgroundColor = 'rgb(' + rgb1[0] + ',' + rgb1[1] + ',' + rgb1[2] + ')';

		rgb2 = generateRGB();
		square2.style.backgroundColor = 'rgb(' + rgb2[0] + ',' + rgb2[1] + ',' + rgb2[2] + ')';

		rgb3 = generateRGB();
		square3.style.backgroundColor = 'rgb(' + rgb3[0] + ',' + rgb3[1] + ',' + rgb3[2] + ')';

		rgbs = [rgb1, rgb2, rgb3];
		answer = rgbs[Math.floor(Math.random() * rgbs.length)];

		redNum.innerHTML = answer[0];
		greenNum.innerHTML = answer[1];
		blueNum.innerHTML = answer[2];

		console.log(rgbs);
		console.log(answer);

		square1.addEventListener('click', function(){
			if(answer[0] === rgb1[0] && answer[1] === rgb1[1] && answer[2] === rgb1[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square1);
			}
		}, false);

		square2.addEventListener('click', function(){
			if(answer[0] === rgb2[0] && answer[1] === rgb2[1] && answer[2] === rgb2[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square2);
			}
		}, false);

		square3.addEventListener('click', function(){
			if(answer[0] === rgb3[0] && answer[1] === rgb3[1] && answer[2] === rgb3[2]){
				correctBehavior();
				disableClick();

			}else{
				wrongBehavior(square3);
			}
		}, false);

}
}

easy.addEventListener('click', function(){
	resetGame();
	hardVersion = false;
	row2.style.visibility = "hidden";
	startGame();	
})

hard.addEventListener('click', function(){
	resetGame();
	hardVersion = true;
	row2.style.visibility = "visible";
	startGame();

})

newGame.addEventListener('click', function(){
	resetGame();
	startGame();
})

startGame();

// console.log(squares);
// console.log(rgbs);
// console.log(answer);

