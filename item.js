
/*Item-luokka
parametreiksi koordinaatit, kuva, laukaisu tehtävänäkymään
törmäykseen reagointi*/
var iconLoaded = false;

var icon = new Image();   //camera_icon
icon.src = "camera_icon.png";

var homeIcon = new Image();
homeIcon.src = "home.png";

/*name refers to a corresponding mission.*/
function Item(name, coordX, coordY) {	//address refers to the corresponding task
	this.x = coordX;
	this.y = coordY;
	this.icon = icon;
	this.name = name;
}

var Montreal = new Item("montreal", 505, 240);
var Havana = new Item("havana", 455, 455);

var Cape_Horn = new Item("cape_horn", 325, 491);
var Buenos_Aires = new Item("buenos_aires", 410, 323);

var Paris = new Item("paris", 230, 375);
var Rome = new Item("rome", 290, 435);

var Kilimanjaro = new Item("kilimanjaro", 496, 236);
var Timbuktu = new Item("timbuktu", 200, 96);

var Great_Wall = new Item("great_wall", 406, 300);
var Chennai = new Item("chennai", 200, 505);

var Uluru = new Item("uluru", 311, 256);
var Sydney = new Item("sydney", 510, 310);

var itemArray = [
	[[Montreal, Havana],[Paris, Rome],[Great_Wall, Chennai]],
	[[Buenos_Aires, Cape_Horn],[Kilimanjaro, Timbuktu], [Uluru, Sydney]]
];

























