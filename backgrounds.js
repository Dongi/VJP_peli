
//loading the opening image "world.jpg"
var openingImageLoaded = false;
var openingImage = new Image();
openingImage.src = "sini/world.jpg";
openingImage.onload = function() {
	openingImageLoaded = true;
}