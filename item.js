/*Miten lisätä itemsejä pelilaudalle?*/

/*
Location-items and coordinates

Montreal 505, 240
Havana 455, 455

Cap Horn 325, 491
Buenos Aires 400, 313

Helsinki 390, 270
Rome 280, 415

Kilimanjaro 496, 236
Timbuktu 211, 96

Great Wall 406, 300
Mumbai 146, 365
*/
/*Item-luokka
parametreiksi koordinaatit, kuva, laukaisu tehtävänäkymään
törmäykseen reagointi*/
var iconLoaded = false;

var icon = new Image();   //camera_icon
icon.src = "camera_icon.png";

var homeIcon = new Image();
homeIcon.src = "home.png";
// icon.onload = function() {
// 	iconLoaded = true;
// }

function Item(name, coordX, coordY) {	//address refers to the corresponding task
	this.x = coordX;
	this.y = coordY;
	this.icon = icon;
	this.name = name;
}

var Montreal = new Item("montreal", 505, 240);
var Havana = new Item("havana", 455, 455);

var Cap_Horn = new Item("cap_horn", 325, 491);
var Buenos_Aires = new Item("buenos_aires", 410, 323);

var Paris = new Item("paris", 230, 375);
var Rome = new Item("rome", 290, 435);

var Kilimanjaro = new Item("kilimanjaro", 496, 236);
var Timbuktu = new Item("timbuktu", 200, 96);

var Great_Wall = new Item("great_wall", 406, 300);
var Mumbai = new Item("mumbai", 140, 455);

var Ayers = new Item("ayers", 311, 256);
var Sydney = new Item("sydney", 510, 310);

var itemArray = [
	[[Montreal, Havana],[Paris, Rome],[Great_Wall, Mumbai]],
	[[Buenos_Aires, Cap_Horn],[Kilimanjaro, Timbuktu], [Ayers, Sydney]]
];



function openMission(item) {

}


/*creating the item-objects*/
// var rome = Item();
// var 





















