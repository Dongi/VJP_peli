
var europe = new Image();
europe.src = "maps/Europe.jpg";
var europeLoaded = false;
var Europe = {
	img: europe,
	position: [0,1]
}

var asia = new Image();
asia.src = "maps/Asia.jpg";
var asiaLoaded = false;
var Asia = {
	img: asia,
	position: [0,2]
}

var australia = new Image();
australia.src = "maps/Australia.jpg";
var australiaLoaded = false;
var Australia = {
	img: australia,
	position: [1,2]
}

var africa = new Image();
africa.src = "maps/Africa.jpg";
var africaLoaded = false;
var Africa = {
	img: africa,
	position: [1,1]
}

var n_america = new Image();
n_america.src = "maps/N_America.jpg";
var n_americaLoaded = false;
var N_America = {
	img: n_america,
	position: [0,0]
}

var s_america = new Image();
s_america.src = "maps/S_America.jpg";
var s_americaLoaded = false;
var S_America = {
	img: s_america,
	position: [1,0]
}

europe.onload = function() {playerImageLoaded = true;}
asia.onload = function() {playerImageLoaded = true;}
australia.onload = function() {playerImageLoaded = true;}
africa.onload = function() {playerImageLoaded = true;}
n_america.onload = function() {playerImageLoaded = true;}
s_america.onload = function() {playerImageLoaded = true;}

/*Array of continents*/
var continents = [
					[N_America, Europe, Asia],
					[S_America, Africa, Australia]
				];


//returns the boundary
function testBoundaries(player){
	// TOP RIGHT
	// if( (player.x + player.dx*player.speed + player.charWidth) >= cWidth && 
	// 	(player.y + player.dy*player.speed) <= 0 ){
	// 	return "n_east";//player.setCoordinates( cWidth-player.charWidth, 0 );	
	// }
	// // TOP LEFT
	// if( (player.x + player.dx*player.speed) <= 0 && 
	// 	(player.y + player.dy*player.speed) <= 0 ){
	// 	return "n_west";//player.setCoordinates( 0, 0 );		
	// }
	// // BOTTOM RIGHT
	// if( (player.x + player.dx*player.speed + player.charWidth) >=cWidth && 
	// 	(player.y + player.dy*player.speed + player.charHeight) >= cHeight ){
	// 	return "s_east";//player.setCoordinates( cWidth-player.charWidth, (cHeight-player.charHeight) );	
	// }
	// // BOTTOM LEFT
	// if( (player.x + player.dx*player.speed) <= 0 && 
	// 	(player.y + player.dy*player.speed + player.charHeight) >= cHeight){
	// 	return "s_west";//player.setCoordinates( 0,  (cHeight-player.charHeight) );
	// }
	// RIGHT
	/*else*/ 
	if((player.x + player.dx*player.speed + player.charWidth) >=cWidth &&
		player.dx === 1){
		return "east";//player.setCoordinates( cWidth-player.charWidth, (player.y) );		
	}
	// LEFT
	else if((player.x + player.dx*player.speed) <= 0 &&
			player.dx === -1){
		return "west"; //player.setCoordinates( 0, (player.y) );
	}
	// BOTTOM
	else if((player.y + player.dy*player.speed + player.charHeight) >= cHeight &&
			player.dy === 1) {
		return "south";//player.setCoordinates( (player.x), (cHeight-player.charHeight) );
	}
	// TOP
	else if((player.y + player.dy*player.speed) <= 0 &&
			player.dy === -1) {
		return "north";//player.setCoordinates( (player.x), 0 );
	}
}


	/*determines which map to draw,
	depending on current map, player's
	position direction. */
function mapUpdate(currentCont, boundary, player) {
	if (currentCont === N_America ||
		currentCont === Europe ||
		currentCont === Asia) {

		switch(boundary) {
			case "north":
				player.setCoordinates( (player.x), 0 );		//movement restricted
				break;
			case "east":
				//console.log("mapUpdate north -> east");
				mapShift(currentCont, "east", player);
				break;
			case "west":
				mapShift(currentCont, "west", player);
				break;
			case "south":
				mapShift(currentCont, "south", player);
				break;
		}
	}
	if (currentCont === S_America ||
		currentCont === Africa ||
		currentCont === Australia) {
		switch(boundary) {
			case "north":
				mapShift(currentCont, "north", player);				
				break;
			case "east":
				mapShift(currentCont,"east", player);
				break;
			case "west":
				mapShift(currentCont, "west", player);
				break;
			case "south":
				player.setCoordinates( (player.x), (cHeight-player.charHeight) )   //movement restricted
				break;
		}
	}
}

function mapShift(prevCont, direction, player) {
	//console.log("mapShift");
	var yCoord = prevCont.position[0];   //gives north (0) or south (1)
	var xCoord = prevCont.position[1];	//gives 0, 1, or 2
	//console.log(direction);
	switch(direction) {
		case "west": 
		//console.log(yCoord, ((xCoord + 2) % 3));
				//console.log(currentCont === S_America);
				//console.log([yCoord, (xCoord + 2) % 3]);
				//console.log(continents[yCoord][(xCoord + 2) % 3]);
		currentCont = continents[yCoord][(xCoord + 2) % 3];
		//console.log(currentCont.position);
		//playerCoordShift(direction, player);
		//console.log(currentCont.position);
		break;
		case "east":
		//console.log(yCoord, (xCoord + 1) % 3);   //works well!
		currentCont = continents[yCoord][(xCoord + 1) % 3];
		//console.log(currentCont.position);

		break;
		case "north":
		currentCont = continents[(yCoord + 1) % 2][xCoord];
		break;
		case "south":
		currentCont = continents[(yCoord + 1) % 2][xCoord]; 
		break;
	}
	//console.log(direction);
	//console.log("before shifting player");
	playerCoordShift(direction, player);
}


/*shifts player's position when map is changed*/
function playerCoordShift (direction, player) {

	if (direction === "west") {
		var prevX = player.x;
		player.setCoordinates(cWidth - prevX, player.y);
	} else  if (direction === "east") {
		var prevX = player.x;
		player.setCoordinates((cWidth - prevX - player.charWidth), player.y);
	} else if (direction === "north") {
		var prevY = player.y;
		player.setCoordinates(player.x, cHeight - player.y);
	} else {
		var prevY = player.y;
		player.setCoordinates(player.x, (cHeight - player.y - player.charHeight));
	}
}



























