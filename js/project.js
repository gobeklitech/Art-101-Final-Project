// JavaScript to handle all the hover events

let start_button_sound_on = document.getElementById("start-button-sound-on");

let start_button_sound_off = document.getElementById("start-button-sound-off");

//let test_button_2 = document.getElementById("my-button-2");

function contentShow(){

	$("#content-div").show(800);

};

function contentHide(){

	$("#intro-div").hide(800);

};

// function changeContent(){

// 	$("#content-div").load("../wetlands/common-rush.html #test-content");

// }

start_button_sound_on.addEventListener("click",contentHide);

start_button_sound_off.addEventListener("click",contentHide);

// test_button_1.addEventListener("click",changeContent);

// test_button_2.addEventListener("click",contentHide);

