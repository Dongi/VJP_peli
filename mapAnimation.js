var canvas = null;
var ctx = null;
var cWidth = 740;
var cHeight = 560;
var cCenter = {x: cWidth/2, y: cHeight/2};
var initWidth = cCenter.x;
var initHeight = cCenter.y;

/*setupt the initial map*/
var currentCont = continents[0][1];			//first map Eruope selected

/*keycodes for navigation*/
var left = 37;
var up = 38;
var right = 39;
var down = 40;
var ent = 13;
var space = 32;

/*registers which key(s) pressed.*/
var pressL = false;
var pressR = false;
var pressU = false;
var pressD = false;
var pressEnt = false;
var pressSpace = false;
/*two-way flag for keyboard activity. */
var arrowsOn = true;

/*determines the state of the loop. */
var animationState = true;

/*current MISSION if there is one.*/
var currentMission = null;

/*PLAYER*/
var p = null;

/*collision STATE*/
//var collisionState = false;


/*Creating the canvas before running the game. */
function createCanvas() {
	console.log("creating canvas...");
	canvas = document.getElementById("canvas");
	canvas.width = cWidth;
	canvas.height = cHeight;

	/*control functions for the other html-elements*/
	hideReturn();
	hideNext();
	hideTextBox();

	toHelpText(hText);
	/*---------------------------------------------*/

	ctx = canvas.getContext("2d");
	var ctxSupport = ctx !== null;
	if (ctxSupport && playerImageLoaded && openingImageLoaded) {
		prologue();
		//runGame();
	}
}

/*Progolue*/
function prologue() {
	ctx.drawImage(openingImage, 0, 0);
	$(document).keydown(function(e) {	
		if (e.keyCode === ent) {
		e.preventDefault();					//'13' corresponds to 'enter'
			if(!pressEnt) {							//this if gets entered only for once
				pressEnt = true;
				$("#help").css("background-image", "url(sini/instructions.gif)");
				runGame();
			}
		}
	})
}

/*The GAME happens in this function. */
function runGame() {

	/*music on*/
	mapMusic.play();
	/* PLAYER OBJECT CREATED. */
 	//checkAnswer();
	//console.log("running game");
	//console.log(pressEnt);
	p = new Player(initWidth, initHeight);
	listenToArrows(true);					//arrow-keys activated
	requestAnimationFrame(game);			//function call
}
	/*This loops the game.*/
	function game() {	
		//console.log("in game");
		drawGame();		//Game drawn
		//COLLISION CHECK
		var ifCollision = collisionCheck(p, currentCont);		//returns wither item-object or null	
		//console.log(ifCollision);
		// if (ifCollision !== null) {			//if collision
		// 	console.log("animation false");
		// 	animationState = false;
		// }
		// if no collision or a current mission on
		if (ifCollision === null || currentMission !== null) {		//if this loop is not entered, game (map-view) pauses
			requestAnimationFrame(game);
		}

		gameState(ifCollision);
	}

	/*Here are all elements that
	has to be drawn in the game.*/
	function drawGame() {
		//console.log("in draw game");
		clearCanvas();
		drawMap();
		drawItems();
		drawPlayer();
	}
	/*metodi, joka saa boolean parametrina sen, 
	kuunteleeko listenToKeyboard-metocia cvai jotain muuta metodia,
	jota tarvitaan tehtvävä-näkymässä.*/

	//"oikea vastaus -metodi kutsuisi AL:n metodia null.parametrilla."
	function gameState(item) {  /*object is either an Item or null tai null.parametri*/
		//console.log("current mission: " + currentMission);
		if (item === null || currentMission !== null) {  //mission happening
			return;
		} else {				//collision!
			listenToArrows(false);
			animationState = false;
			openMission(item);
		} /*johtaa tehtävän tekemiseen
		TEHTÄVÄ-oliossa täytyy olla komento, joka
		palauttaa listenToArrows(TRUE), jotta peli voisi jatkua. */

	}

	/*COLLISION CHECK*/
	function collisionCheck(p, currentCont) { 		//p as player
		var output;
		switch(currentCont) {
			case N_America:
			var items = itemArray[0][0];
			break;
			case Europe:
			var items = itemArray[0][1];
			break;
			case Asia:
			var items = itemArray[0][2];
			break;
			case S_America:
			var items = itemArray[1][0];
			break;
			case Africa:
			var items = itemArray[1][1];
			break;
			case Australia:
			var items = itemArray[1][2];
			break;
		}
		for (var i = 0; i < items.length; i++) {
			//Checking the collision conditions
			if 	(((p.x + p.charWidth > items[i].x &&
				p.x + p.charWidth < items[i].x + items[i].icon.width &&
				p.y + p.charHeight > items[i].y &&
				p.y + p.charHeight < items[i].y + items[i].icon.height) ||
				
				(p.x < items[i].x + items[i].icon.width &&
				p.x > items[i].x &&
				p.y < items[i].y + items[i].icon.height &&
				p.y > items[i].y) ||

				(p.x > items[i].x &&
				p.x < items[i].x + items[i].icon.width &&
				p.y + p.charHeight > items[i].y &&
				p.y + p.charHeight < items[i].y + items[i].icon.height) ||

				(p.x + p.charWidth > items[i].x &&
				p.x + p.charWidth < items[i].x + items[i].icon.width &&
				p.y > items[i].y &&
				p.y < items[i].y + items[i].icon.height))
				||
				((items[i].x + items[i].icon.width > p.x &&
				items[i].x + items[i].icon.width < p.x + p.charWidth &&
				items[i].y + items[i].icon.height > p.y &&
				items[i].y + items[i].icon.height < p.y + p.charHeight) ||
				
				(items[i].x < p.x + p.charWidth &&
				items[i].x > p.x &&
				items[i].y < p.y + p.charHeight &&
				items[i].y > p.y) ||

				(items[i].x > p.x &&
				items[i].x < p.x + p.charWidth &&
				items[i].y + items[i].icon.height > p.y &&
				items[i].y + items[i].icon.height < p.y + p.charHeight) ||

				(items[i].x + items[i].icon.width > p.x &&
				items[i].x + items[i].icon.width < p.x + p.charWidth &&
				items[i].y > p.y &&
				items[i].y < p.y + p.charHeight)
				))
				{	
					//console.log(items[i]);
					//console.log("in Collision");	
					return items[i];		//returns the item-object, interrupting the for-loop
				}	//openMission(items[i]);
				else {
					var output = null;
				}
		} 
		//if (output === null) {
			currentMission = null;
			//console.log("from collision to no-collision");
		//}
		return output;
	}	//end of collisionCheck(...);
	/*The arrow-keys' activities 
	are defined here.*/
	function listenToArrows(boolean) {
		if (boolean === true) {
		//console.log("in if listeningTo...");
		$(document).keydown(function(key) {	   //WORKS!	
   			switch (key.keyCode){
				case up:
				key.preventDefault();
				pressU = true; //pressL = false; pressR = false; pressD = false;
				p.dy = -1; p.dx = 0;
				break;
				case down:
				key.preventDefault();
				pressD = true; //pressL = false; pressR = false; pressU = false;
				p.dy = 1; p.dx = 0;
				break;
				case right:
				key.preventDefault();
				pressR = true; //pressL = false; pressU = false; pressD = false;
				p.dx = 1; p.dy = 0;
				break;
				case left:			
				key.preventDefault();
				pressL = true; //pressU = false; pressR = false; pressD = false;
				p.dx = -1; p.dy = 0;
				break;
			}
		});
		$(document).keyup(function(key) {   //WORKS!
			if (key.keyCode == left) {
				key.preventDefault();
				if(pressR){
					p.dx = 1
				}
				else{ 
					p.dx = 0;  
				}
				pressL = false;
			}
			if (key.keyCode == right) {
				key.preventDefault();
				if(pressL){     //rightkey up and leftkey down
					p.dx = -1 
				}
				else{ 
					p.dx = 0;  
				}
				pressR = false;
			}
			if (key.keyCode == up) {
				key.preventDefault();
				if(pressD){     //upkey up and downkey down
					p.dy = -1 
				}
				else{ 
					p.dy = 0;  
				}
				pressU = false;

			}
			if (key.keyCode == down) {
				key.preventDefault();
				if(pressU){     //leftkey up and rightkey down
					p.dy = 1 
				}
				else{ 
					p.dy = 0;  
				}
				pressD = false;
			}
		});
		} else {
		/*all relevant variables to inactive state
		ARROW-KEYS STOP WORKING HERE*/

			pressD = false;
			pressU = false;
			pressR = false;
			pressL = false;
			p.dx = 0;
			p.dy = 0;
		}
	}

	/*DRAWING FUNCTIONS-----------------------------------------------------------------------------------*/
	
	/*map*/
	function drawMap() {
		ctx.drawImage(currentCont.img, 0, 0);
	}
	/*the player*/
	function drawPlayer() {
	    console.log(p.x, p.y);
		p.move();
		mapUpdate(currentCont, testBoundaries(p), p);
		p.render();     //LOGIC with spritets
		
	}
	/*the items/icons*/
	function drawItems() {
		switch(currentCont) {
			case N_America:
			var cont = itemArray[0][0];
			break;
			case S_America:
			var cont = itemArray[1][0];
			break;
			case Europe:
			var cont = itemArray[0][1];
			ctx.drawImage(homeIcon, 385, 265);
			break;
			case Africa:
			var cont = itemArray[1][1];
			break;
			case Asia:
			var cont = itemArray[0][2];
			break;
			case Australia:
			var cont = itemArray[1][2];
			break;
		}
		//two icons for each continent
		ctx.drawImage(icon, cont[0].x, cont[0].y);
		ctx.drawImage(icon, cont[1].x, cont[1].y);
	}
	/*CLEARING FUNCTION*/
	function clearCanvas() {
		ctx.clearRect(0, 0, cWidth, cHeight);
	}

	function playAgain() {
		location.reload();
	}

/*this launches the whole game*/
window.onload = createCanvas;










