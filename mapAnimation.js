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

/*The game happens in this function. */
function runGame() {
	/*variables*/
	var p = new Player(cCenter.x, cCenter.y);   //player created
	//var currentCont = continents[0][1];			//first map Eruope selected
	var position = p.position;					  //position is at the centre
	var direction = p.direction;				  //initial direction south by default


/*-----------------------------------------------------------------------------------*/

	listenToArrows();	
	requestAnimationFrame(game);
	
	/*metodi, joka saa boolean parametrina sen, 
	kuunteleeko listenToKeyboard-metocia cvai jotain muuta metodia,
	jota tarvitaan tehtvävä-näkymässä.*/

	//"oikea vastaus -metodi kutsuisi AL:n metodia null.parametrilla."

	// function gameState() {  /*objekti-parametri tai null-parametri,
	// 	tai null.parametri*/
	// 	if (object == null) {
	// 		//listenTo nuolinäppäimet again
	// 	} --> //listenTo nuolinäppämet again
	// 	else --> //johtaa tehtävän tekemiseen 

	// }

	//COLLISION CHECK
	/**/
	function collisionCheck(p, currentCont) { //p as player
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
			case S_Aerica:
			var items = itemArray[1][0];
			break;
			case Africa:
			var items = itemArray[1][1];
			break;
			case Australia:
			var items = itemArray[1][2];
			break;
		}


		for (i == 0; i < items.length; i++) {
			if (p.x + p.charWidth > items[i].x &&
				p.x + p.charWidth < items[i].x + items[i].icon.width &&
				p.y + p.charHeight > items[i].y &&
				p.y + p.charHeight < items[i].y + items[i].icon.height)
				{
					return items[i];		//returns the item-object
				}	//openMission(items[i]);
				else {
					return null;
				}	
		} 
	}

	function game() {					//loop works
		drawGame();
		requestAnimationFrame(game);
	}

	function drawGame() {
		clearCanvas();
		drawMap();
		drawItems();
		drawPlayer();
	}

	/*all keyboard activities defined here.*/
	//rename it
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
				if(pressR){     //leftkey up and rightkey down
					//console.log("right clicked while left released");
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
		// /*help-function to determine the coordinate*/
		// $('canvas').click(function(e) {
		// 	console.log(e.)
		// })
	}

/*Here comes a collection of functions related to the game.*/
	function drawMap() {
		//conditions for choosing which map to display
		//console.log(currentCont.img);
		ctx.drawImage(currentCont.img, 0, 0);
	}
	//drawMap();	//temporary


	/*draws the player*/
	function drawPlayer() {
		//console.log("test");
				//moves the player and considers the spritets	
		
	    console.log(p.x, p.y);
		p.move();
		mapUpdate(currentCont, testBoundaries(p), p);
		p.render();     //LOGIC with spritets
		
	}

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
		/*two*/
		ctx.drawImage(icon, cont[0].x, cont[0].y);
		ctx.drawImage(icon, cont[1].x, cont[1].y);
	}


	/*clears the canvas*/
	function clearCanvas() {
		ctx.clearRect(0, 0, cWidth, cHeight);
	}
}



window.onload = createCanvas;










