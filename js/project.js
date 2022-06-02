// JavaScript to handle all the hover events

let test_button_1 = document.getElementById("my-button-1");

let test_button_2 = document.getElementById("my-button-2");

function contentShow(){

	$("#content-div").show(800);

};

function contentHide(){

	$("#content-div").hide(800);

};

// function changeContent(){

// 	$("#content-div").load("../wetlands/common-rush.html #test-content");

// }


$("#biome-map").hover(contentShow,contentHide);

// test_button_1.addEventListener("click",changeContent);

// test_button_2.addEventListener("click",contentHide);

