// JavaScript to handle all the hover events

let test_button_1 = document.getElementById("my-button-1");

let test_button_2 = document.getElementById("my-button-2");

function testShow(){

	$("#content-div").show(800);

};

function testHide(){

	$("#content-div").hide(800);

};

function changeContent(){

	$("#content-div").load("../wetlands/common-rush.html #test-content");

}

$("#test-map").hover(testShow,testHide);

test_button_1.addEventListener("click",changeContent);

test_button_2.addEventListener("click",testHide);

