// JavaScript for event and content management for Wetlands Biome page

function sandhillInit(){

	// $("#content-div").innerHTML = "<h1>Water Fowl of Santa Cruz</h1><hr><p>Waterfowl are all types of ducks, geese, and swans. They are mid-sized to large birds most commonly found on or near water. Most have plump bodies, long necks, short wings, and all have webbed feet. Geese tend to be larger than ducks with shorter bills and swans are even bigger with long necks and are usually white.Male ducks are typically more colorful than females during the breeding season.</p><h3>Interesting Fact:</h3><p> Most waterfowl fly at speeds of 40 to 60 mph!</p><h5>Works Cited:</h5><p>Paws. “Waterfowl.” PAWS, <a href="url">www.paws.org/resources/waterfowl/.<a>“Waterfowl Habitat.” World Leader in Wetlands & Waterfowl Conservation, Wetland Conservation, <a href="url">www.ducks.org/conservation/waterfowl-habitat</a></p>";
	//$("#content-div").innerHTML = $("testname");
	$("#buckwheat-div").hide(20);
	$("#rat-div").hide(20);
	$("#manzanita-div").hide(20);
	$("#spineflower-div").hide(20);

};

// function contentShow(){

// 	$("#testname").show(800);

// };

// function contentHide(){

// 	$("#testname").hide(800);

// };

function buckwheatShow(){

	$("#buckwheat-div").show(800);

};

//

function buckwheatHide(){

	$("#buckwheat-div").hide(800);

};

//

function ratShow(){

	$("#rat-div").show(800);

};

//

function ratHide(){

	$("#rat-div").hide(800);

};

//

function manzanitaShow(){

	$("#manzanita-div").show(800);

};

//

function manzanitaHide(){

	$("#manzanita-div").hide(800);

};

//

function spineflowerShow(){

	$("#frog-div").show(800);

};

function spineflowerHide(){

	$("#frog-div").hide(800);

};

//

// function rushShow(){

// 	$("#rush-div").show(800);

// };

// function rushHide(){

// 	$("#rush-div").hide(800);

// };

//

$("#tule-map").hover(tuleShow,tuleHide);

$("#waterfowl-map").hover(waterfowlShow,waterfowlHide);

$("#willow-map").hover(willowShow,willowHide);

$("#frog-map").hover(frogShow,frogHide);

$("#rush-map").hover(rushShow,rushHide);



