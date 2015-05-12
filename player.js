
//function newPlayer() { 
var player = {
	name: function(name) {
		this.name = name;
	},
	x: 100, 
	y: 320,
	source: "canvas5/bike1.png",
	velX: 0,
	velY: 0,
	img: {

	}
	direction: 1,   //this mean 'right'
	updatePosition: function (newX, newY) {
		if (this.x >= 0 && this.x < canvas.width - playerImage && this.y >= 0 && this.y < canvas.width)
	}
};
//}:
	var playerImg = new Image();
	playerImg.src = player.source;

	