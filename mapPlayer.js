/*All player-related information*/
var animation = 0; //animation cycle for spritets
/*directions*/
var dUp = 3;
var dDown = 0;
var dLeft = 1;
var dRight = 2;


/*Loading player's image.*/
var playerImage = new Image();
playerImage.src = "playerSpritet.png";
var playerLoaded = false;
playerImage.onload = function() {
	playerImageLoaded = true;
}

function Player(initX, initY) {     //NOTE: player's image doesn't belong to player-object
		//this.ctx = ctx;
		this.x = initX;
		this.y = initY;
		this.spritetX = 0;          //upper left spritet character
		this.spritetY = 0;			//...
		this.charWidth = 44;			//width of a sprite character, same for all
		this.charHeight = 44;			//height of ...
		//this.direction = 0;			//direction can be 0, 1, 2, and 3, 
		this.speed = 5;				//corresponding down, left, right, up
		this.dx = 0;
		this.dy = 0;
		/*proably to be erased...*/
		// updatePosition: function(dX, dY) {
		// 	switch(dX, dY) {
		// 		case (0, 1): 
		// 	}
		// }				//returned player is an object with x, y, direction etc...
}

Player.prototype.setPosition = function(x, y) {
	this.x = x;    //current x
	this.y = y;	   //current y
}

Player.prototype.chooseSpritet = function(direction, animation) {
	this.spritetX = animation * 44;
	this.spritetY = direction * 44;
}

Player.prototype.move = function() {
	/*down*/
	//console.log("in move");
	if (this.dx === 0 && this.dy === 1) {
		//console.log(dDown, animation);
		this.chooseSpritet(dDown, animation);
		animation === 3 ? animation = 0: animation += 1;
	}
	/*up*/
	else if(this.dx === 0 && this.dy === -1){
		this.chooseSpritet(dUp,animation);
		animation === 3 ? animation = 0 : animation +=1;
	}
	/*right*/
	else if(this.dx === 1 && this.dy === 0){
		this.chooseSpritet(dRight,animation);
		animation === 3 ? animation = 0 : animation +=1;
	}
	/*left*/
	else if(this.dx === -1 && this.dy === 0){
		this.chooseSpritet(dLeft,animation);
		animation === 3 ? animation = 0 : animation +=1;
	}

	/*updating the current position. */
	//console.log(this.x, this.y);				//temporarily

	this.setPosition(this.x + this.dx * this.speed, this.y + this.dy * this.speed);
}

Player.prototype.setCoordinates = function(x, y) {
	this.x = x;
	this.y = y;
}

Player.prototype.render = function() {
	/*draws the spritet*/
	//console.log(this.dx, this.dy);
	//console.log(animation);
	//console.log(this.spritetX, this.spritetY);
	ctx.drawImage(
		playerImage, 				//whole spritet
		this.spritetX, 
		this.spritetY, 
		this.charWidth,
		this.charHeight,
		this.x,
		this.y,
		this.charWidth,
		this.charHeight);
};


































