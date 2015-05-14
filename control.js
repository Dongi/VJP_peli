/*help-text.*/
var hText = "Helatorstaina ei ole kukaan töissä."



/*SHOW*/
/*function shows the buttons (including the text-box.*/
function showButtons() {
	$(document).ready(function(){
		$("#buttons").show();
	})
}

function showReturn() {
	$(document).ready(function(){
		$("#return").show();
	})
}

function showNext() {
	$(document).ready(function(){
		$("#next").show();
	})
}

function showTextBox() {
	$(document).ready(function(){
		$("#textBox").show();
	})
}

/*HIDE*/
/*function hides the text box and the arrow-icons. */
function hideButtons() {
	$(document).ready(function(){
		$("#buttons").hide();
	})
}

function hideReturn() {
	$(document).ready(function(){
		$("#return").hide();
	})
}

function hideNext() {
	$(document).ready(function(){
		$("#next").hide();
	})
}

function hideTextBox() {
	$(document).ready(function(){
		$("#textBox").hide();
	})
}

function toHelpText(help) {
	$(document).ready(function(){
		$("#helpText").text(help);
	})
}




























