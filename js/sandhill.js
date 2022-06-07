// JavaScript for event and content management for Sandhill Biome page

function sandhillInit(){

	$("#buckwheat-div").hide(20);
	$("#rat-div").hide(20);
	$("#manzanita-div").hide(20);
	$("#spineflower-div").hide(20);

};

function introHide(){

	$("#intro-div").hide(800);

};


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

	$("#spineflower-div").show(800);

};

function spineflowerHide(){

	$("#spineflower-div").hide(800);

};

//

$("#buckwheat-map").hover(buckwheatShow,buckwheatHide);

$("#rat-map").hover(ratShow,ratHide);

$("#manzanita-map").hover(manzanitaShow,manzanitaHide);

$("#spineflower-map").hover(spineflowerShow,spineflowerHide);




