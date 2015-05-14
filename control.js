/*help-text.*/
var hText = "Helatorstaina ei ole kukaan töissä."


/*function hides the text box and the arrow-icons. */
function hideButtons() {
	$(document).ready(function(){
		$("#buttons").hide();
	})
}

/*function shows the buttons (including the text-box.*/
function showButtons() {
	$(document).ready(function(){
		$("#buttons").show();
	})
}

function toHelpText(help) {
	$(document).ready(function(){
		$("#helpText").text(help);
	})
}