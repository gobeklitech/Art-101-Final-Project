// JavaScript for event and content management for Wetlands Biome page

// let intro_close = document.getElementById("intro-close");

function wetlandsInit(){
           
	// $("#content-div").innerHTML = "<h1>Water Fowl of Santa Cruz</h1><hr><p>Waterfowl are all types of ducks, geese, and swans. They are mid-sized to large birds most commonly found on or near water. Most have plump bodies, long necks, short wings, and all have webbed feet. Geese tend to be larger than ducks with shorter bills and swans are even bigger with long necks and are usually white.Male ducks are typically more colorful than females during the breeding season.</p><h3>Interesting Fact:</h3><p> Most waterfowl fly at speeds of 40 to 60 mph!</p><h5>Works Cited:</h5><p>Paws. “Waterfowl.” PAWS, <a href="url">www.paws.org/resources/waterfowl/.<a>“Waterfowl Habitat.” World Leader in Wetlands & Waterfowl Conservation, Wetland Conservation, <a href="url">www.ducks.org/conservation/waterfowl-habitat</a></p>";
	//$("#content-div").innerHTML = $("testname");
	$("#tule-div").hide(20);
	$("#waterfowl-div").hide(20);
	$("#rush-div").hide(20);
	$("#frog-div").hide(20);
	$("#willow-div").hide(20);

	var audio = new Audio("../aud/crickets.mp3");

	audio.currenttime = 0;

	audio.play();

};

// function contentShow(){

// 	$("#testname").show(800);

// };

// function contentHide(){

// 	$("#testname").hide(800);

// };

function introHide(){

	$("#intro-div").hide(800);

};


function tuleShow(){

	$("#tule-div").show(800);

};

//

function tuleHide(){

	$("#tule-div").hide(800);

};

//

function waterfowlShow(){

	$("#waterfowl-div").show(800);

};

//

function waterfowlHide(){

	$("#waterfowl-div").hide(800);

};

//

function willowShow(){

	$("#willow-div").show(800);

};

//

function willowHide(){

	$("#willow-div").hide(800);

};

//

function frogShow(){

	$("#frog-div").show(800);

};

function frogHide(){

	$("#frog-div").hide(800);

};

//

function rushShow(){

	$("#rush-div").show(800);

};

function rushHide(){

	$("#rush-div").hide(800);

};

//

// intro_close.addEventListener("click",introHide);

$("#tule-map").hover(tuleShow,tuleHide);

$("#waterfowl-map").hover(waterfowlShow,waterfowlHide);

$("#willow-map").hover(willowShow,willowHide);

$("#frog-map").hover(frogShow,frogHide);

$("#rush-map").hover(rushShow,rushHide);



