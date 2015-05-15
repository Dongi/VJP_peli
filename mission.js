/*MISSION VARIABLES*/
//$(document).ready(function(){
/*Mission-CLASS.*/
function Mission(image, answer, clue, reaction) {
	this.state = false;			//tells whether the task is accomplished
	this.img = image;			//background image
	this.answer = answer;		//correct answer
	this.clue = clue;			//when answered correct
	this.reaction = reaction;	//when answered incorrect
	// this.update = function() {
	// 	if (this.state === true) 
	// }
}
/*initiating the missions*/
var mParis = new Mission(parisI,"answer","clue","reaction");
var mRome = new Mission(romeI,"answer","clue","reaction");

var mMontreal = new Mission(montrealI,"answer","clue","reaction");
var mHavana = new Mission(havanaI,"answer","clue","reaction");

var mBuenos = new Mission(buenosI,"answer","clue","reaction");
var mCape = new Mission(capeI,"answer","clue","reaction");

var mTimbuktu = new Mission(timbuktuI,"answer","clue","reaction");
var mKilimanjaro = new Mission(kilimanjaroI,"answer","clue","reaction");

var mGreat = new Mission(greatI,"answer","clue","reaction");
var mChennai = new Mission(chennaiI,"answer","clue","reaction");

var mSydney = new Mission(sydneyI,"answer","clue","reaction");
var mUluru = new Mission(uluruI,"answer","clue","reaction");


/*MISSION, Global function*/
function openMission(item) {
	showReturn();
	showTextBox();
	currentMission = mission;
	//console.log(item.name);
	//console.log(mParis);
	var mission;
	/*making the buttons visible again*/
	switch(item.name) {
		case "paris":
			mission = mParis;
		break;
		case "rome":
			mission = mRome;
		break;
		case "montreal":
			mission = mMontreal;
		break;
		case "havana":
			mission = mHavana;
		break;
		case "buenos_aires":
			mission = mBuenos;
		break;
		case "cape_horn":
			mission = mCape;
		break;
		case "timbuktu":
			mission = mTimbuktu;
		break;
		case "kilimanjaro":
			mission = mKilimanjaro;
		break;
		case "chennai":
			mission = mChennai;
		break;
		case "great_wall":
			mission = mGreat;
		break;
		case "sydney":
			mission = mSydney;
		break;
		case "uluru":
			mission = mUluru;
		break;	
	}
	console.log(mission);
	drawMission(mission);
	//only for testing
	// console.log("opening mission");
	// ctx.fillStyle = "#FFF000";
	// ctx.fillRect(0, 0, cWidth, cHeight);//this method should launch the mission task corresponding to the item
	// ctx.fillStyle = "#000000";
	// ctx.fillText("Mission-view will come here", 100, 300);
	// $(document).keydown(function(e) {
	// 	if (e.keyCode === space) {
	// 		console.log("in space");
	// 		e.preventDefault();
	// 		pressSpace = true;
	// 		if (pressSpace) {
	// 			pressSpace = false;
	// 			animationState = true;
	// 			game();
	// 			//console.log("innermost press");
	// 		}
	// 	} 
	// })
}
/*draws the mission view*/
function drawMission(mission) {
	ctx.font="30px Palatino";			//for later texts
	ctx.drawImage(mission.img, 0, 0);
	currentMission = mission;			//sets the currentMission (global)
	console.log("currentMission in draw mission: " + currentMission);
	//initiating the reaction and clue elements on top of the canvas
	var clue = currentMission.clue;
	var reaction = currentMission.reaction;
	$("#clue").html(clue);
	$("#reaction").html(reaction);
	//console.log($("#canvasContainer").val());
}



function submitAnswer() {
	hideTextBox();	//ensures that only one submit/visit
	$(".interactive").css("visibility", "visible");

	var candidate = $("#answerCandidate").val().trim().toLowerCase();
	if (candidate === currentMission.answer) {
		currentMission.state = true;
		missionSuccess(currentMission);
	} else {
		missionFailure(currentMission);
	}//console.log($("#answerCandidate").val());
			//console.log("in checkInput");
			// var input = $("input").checkInput;
			// console.log(input);
}

/*reactions that happen after mission success*/
function missionSuccess(mission) {
	$("#clue").css("visibility", "visible");
	//ctx.fillText("SUCCESS", 50, 500);	//better if .show()
}


function missionFailure(mission) {
	$("#reaction").css("visibility", "visible")
	//ctx.fillText("FAILURE", 50, 500);	//better if .show()
}

function backToMap() {
		console.log("back to map");
	$(".interactive").css("visibility", "hidden");
	$("#clue, #reaction").css("visibility", "hidden");	//syntax works
	animationState = true;
	listenToArrows(true);
	game();
}



























