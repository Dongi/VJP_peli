/*MISSION VARIABLES*/
//$(document).ready(function(){
/*Mission-CLASS.*/
function Mission(image, answer, clue, reaction) {
	this.state = false;			//tells whether the task is accomplished
	this.img = image;			//background image
	this.answer = answer;		//correct answer
	this.clue = clue;			//when answered correct
	this.reaction = reaction;	//when answered incorrect

}

/*initiating the missions*/
var mParis = new Mission(parisI, answers.paris, clues.paris, reaction);
var mRome = new Mission(romeI, answers.rome, clues.rome, reaction);

var mMontreal = new Mission(montrealI, answers.montreal, clues.montreal, reaction);
var mHavana = new Mission(havanaI, answers.havana,clues.havana, reaction);

var mBuenos = new Mission(buenosI, answers.buenos,clues.buenos, reaction);
var mCape = new Mission(capeI, answers.cape,clues.cape, reaction);

var mTimbuktu = new Mission(timbuktuI,answers.timbuktu, clues.timbuktu, reaction);
var mKilimanjaro = new Mission(kilimanjaroI,answers.kilimanjaro,clues.kilimanjaro, reaction);

var mGreat = new Mission(greatI,answers.great,clues.great, reaction);
var mChennai = new Mission(chennaiI,answers.chennai,clues.chennai, reaction);

var mSydney = new Mission(sydneyI,answers.sydney,clues.sydney, reaction);
var mUluru = new Mission(uluruI,answers.uluru,clues.uluru, reaction);


/*MISSION, Global function*/
function openMission(item) {
	showReturn();
	showTextBox();
	currentMission = mission;
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
	//console.log(mission);
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
	//console.log("currentMission in draw mission: " + currentMission);
	//initiating the reaction and clue elements on top of the canvas
	var clue = currentMission.clue;
	var reaction = currentMission.reaction;
	//$("#clue").html(clue);
	// $("#reaction").html(reaction);
	//console.log($("#canvasContainer").val());
}



function submitAnswer() {
	hideTextBox();	//ensures that only one submit/visit
	$(".interactive").css("visibility", "visible");

	var candidate = $("#answerCandidate").val().trim().toLowerCase();
	if (candidate === currentMission.answer) {
		currentMission.state = true;
		if (currentMission.answer === answers.chennai) {
			victory();
		}
		missionSuccess(currentMission);
	} else {
		missionFailure(currentMission);
	}
}

/*reactions that happen after mission success*/
function missionSuccess(mission) {
	$("#respond").html(mission.clue);
	$("#respond").css("visibility", "visible");
	//ctx.fillText("SUCCESS", 50, 500);	//better if .show()
}


function missionFailure(mission) {
	$("#respond").html(mission.reaction);
	$("#respond").css("visibility", "visible");
	//ctx.fillText("FAILURE", 50, 500);	//better if .show()
}

function backToMap() {
	console.log("back to map");
	$("#answerCandidate").val("");
	hideReturn();
	hideTextBox();
	hideInteractive();
	animationState = true;
	listenToArrows(true);
	game();
}


function victory() {
	console.log("in victory");  //works!
	hideReturn();
	$(document).keydown(function(key) {
		if (key.keyCode === ent) {
			key.preventDefault();
			hideInteractive();
			showNext();
			ctx.drawImage(victoryImg, 0, 0);
		}
	})

}
























