// JavaScript for event and content management for Redwoods Biome page

function redwoodsInit(){

	$("#deer-div").hide(20);
	$("#bay-div").hide(20);
	$("#coyote-div").hide(20);
	$("#foamflower-div").hide(20);
	$("#poison-oak-div").hide(20);
	$("#woodpecker-div").hide(20);

};

function introHide(){

	$("#intro-div").hide(800);
}

function deerShow(){

	$("#deer-div").show(800);

};

//

function deerHide(){

	$("#deer-div").hide(800);

};

//

function bayShow(){

	$("#bay-div").show(800);

};

//

function bayHide(){

	$("#bay-div").hide(800);

};

//

function coyoteShow(){

	$("#coyote-div").show(800);

};

//

function coyoteHide(){

	$("#coyote-div").hide(800);

};

//

function foamflowerShow(){

	$("#foamflower-div").show(800);

};

function foamflowerHide(){

	$("#foamflower-div").hide(800);

};

//

function poisonoakShow(){

	$("#poison-oak-div").show(800);

};

function poisonoakHide(){

	$("#poison-oak-div").hide(800);

};

//

function woodpeckerShow(){

	$("#woodpecker-div").show(800);

};

function woodpeckerHide(){

	$("#woodpecker-div").hide(800);

};

//

$("#woodpecker-map").hover(woodpeckerShow,woodpeckerHide);

$("#coyote-map").hover(coyoteShow,coyoteHide);

$("#foamflower-map").hover(foamflowerShow,foamflowerHide);

$("#poison-oak-map").hover(poisonoakShow,poisonoakHide);

$("#bay-map").hover(bayShow,bayHide);

$("#deer-map").hover(deerShow,deerHide);




