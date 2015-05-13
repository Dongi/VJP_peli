var canvas = null;
var ctx = null;
var cWidth = 740;
var cHeight = 560;
var cCenter = {x: cWidth/2, y: cHeight/2};

/*setupt the initial map*/
var currentCont = continents[0][1];			//first map Eruope selected

/*keycodes for navigation*/
var left = 37;
var up = 38;
var right = 39;
var down = 40;

/*registers which key(s) pressed.*/
var pressL = false;
var pressR = false;
var pressU = false;
var pressD = false;

/*Creating the canvas before running the game. */
function createCanvas() {
	canvas = document.getElementById("canvasElement");
	canvas.width = cWidth;
	canvas.height = cHeight;

	ctx = canvas.getContext("2d");
	var ctxSupport = ctx !== null;
	if (ctxSupport && playerImageLoaded) {
		runGame();
	}
}

/*The GAME happens in this function. */
function runGame() {
	/* PLAYER OBJECT CREATED. */
	var p = new Player(cCenter.x, cCenter.y);

	requestAnimationFrame(game);			//function call

	/*This loops the game.*/
	function game() {	
		//listenToArrows();	

		//COLLISION CHECK
		var ifCollision = collisionCheck(p, currentCont);		//returns wither item-object or null	
		gameState(ifCollision);
		
		drawGame();
		requestAnimationFrame(game);
	}

	/*Here are all elements that
	has to be drawn in the game.*/
	function drawGame() {
		clearCanvas();
		drawMap();
		drawItems();
		drawPlayer();
	}
	
	/*metodi, joka saa boolean parametrina sen, 
	kuunteleeko listenToKeyboard-metocia cvai jotain muuta metodia,
	jota tarvitaan tehtvävä-näkymässä.*/

	//"oikea vastaus -metodi kutsuisi AL:n metodia null.parametrilla."
	function gameState(object) {  /*object is either an Item or null tai null.parametri*/
		if (object == null) {
			listenToArrows();//listenTo nuolinäppäimet again
		} else {
			console.log("openMission(object);")
			openMission(object);
		} //johtaa tehtävän tekemiseen 
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
					return items[i];		//returns the item-object, interrupting the for-loop
				}	//openMission(items[i]);
				else {
					var output = null;
				}
		} 
		//console.log(output);
		return output;
	}	//end of collisionCheck(...);
	/*The arrow-keys' activities 
	are defined here.*/
	function listenToArrows() {
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
}

/*this launches the whole game*/
window.onload = createCanvas;










