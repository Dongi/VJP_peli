//$(document).ready(function() {

var canvas = null;
var context = null;

var gameWidth = 600;
var gameHeight = 420;
var center = (gameWidth/2, gameHeight/2);
var bgReady = false;

/*Enemy initiation*/
// var heli1 = newHelicopter("heli1", 400, 100);
// var heli2 = newHelicopter("heli2", 240, 30);
// var heli3 = newHelicopter("heli3", 340, 140);
// var heli4 = newHelicopter("heli4", 100, 200);
/*----------------*/

/*sprites*/
// var sIndex = 0;		//index determines the state sprite, domain (0,7)
// var imgH0 = new Image();
// imgH01.src = "";
// var imgH1 = new Image();
// imgH01.src = "";
// var imgH2 = new Image();
// imgH01.src = "";
// var imgH3 = new Image();
// imgH01.src = "";
// var imgH4 = new Image();
// imgH01.src = "";

// var sprites = {
// 	img0: "heliS0.png",
// 	img1: "heliS1.png",
// 	img2: "heliS2.png",
// 	img3: "heliS3.png",
// 	img4: "heliS4.png"
// };

// var spriteArray = [];   //image objects here
// for (i = 0 , i < 8, i++) {
// 	spriteArray = spriteArray.push
// }
// Keydown and Keyup events

/*KEYS*/
var left = 37;
var up = 38;
var right = 39;
var down = 40;

var left_down = false;
var right_down = false;
var up_down = false;
var down_down = false;

/*Keys functions*/
// $(document).keydown(functino(i) {
// 	if (e.keyCode == left) {
// 		e.preventDefault();
// 		left_down = true;
// 		player
// 	}
// })



var background = new Image();
background.src = "backgroundImage.jpg";
//context.drawImage(background, 0, 0); //  why not? Because here the value of canvas is still null
 // console.log("TEST");

// -----------------------------------------------------------------------


/*Prepares the canves for use*/
function initCanvas() {
	canvas = document.querySelector("canvas");   //refers to the canvas element
	/*canvas = getElementById("canvas");*/
	canvas.width = gameWidth;
	canvas.height = gameHeight;
	context = canvas.getContext("2d");
 
	var contextIsSupported = context !== null;	
	if (contextIsSupported) {
		loadPlayerImage();
	}
}


/*Player loaded, but not drawn yet,
here we also define playerImage.*/
function loadPlayerImage() {


	var playerImage = new Image();         //WHY???
	playerImage.onload = function() {      //
		runGame(playerImage);
	};
	playerImage.src = player.source;
  	//context.drawImage(playerImage, 0, 0);
}





/*clear the game area*/
function clearCanvas() {
	context.clearRect(0, 0, gameWidth, gameHeight)
}


/*REST ANIMATION*/

function restCycle() {
	if (sIndex === 0 || sIndex == 4) {

	}
}


// RUN GAME
// --------------------------------------
/*runGame function runs the game*/
function runGame(playerImage) {
  //var playerX = 
	/*keyboard gets listened*/
	listenToKeyboard();
	/*this method updates the game by calling gameLoop-method*/
	requestAnimationFrame(gameLoop);

	/*Hierarchy 1*/
	function gameLoop(time) {

		updatePlayerPosition();
		updateEnemyPosition();
		drawGame();							//repaints the canvas

		requestAnimationFrame(gameLoop);  //recursion
	}


  /*updates the enemies' position.*/
	function updatePlayerPosition() {
		clearCanvas();

	}

	/*updates the player's position.*/
  	function updateEnemyPosition() {

	}

	function drawBackground() {
      	context.drawImage(background, 0, 0);
  	}

 	function drawPlayer() {
     	context.drawImage(playerImage, player.x, player.y);
  	}

  	function drawEnemies() {
  		context.drawImage(heliImg, heli1.x, heli1.y);
  		context.drawImage(heliImg, heli2.x, heli2.y);
  		context.drawImage(heliImg, heli3.x, heli3.y);
  		context.drawImage(heliImg, heli4.x, heli4.y);
  	}

  	/*draw the game area and the positions 
  	of the player and the enemies.*/
  	function drawGame() {
   		clearCanvas();
   	 	drawBackground();
   	 	drawPlayer();
   	 	drawEnemies();
	}

  function listenToKeyboard() {

  }
}

window.onload = initCanvas;

//});





















