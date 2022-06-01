// JavaScript to handle all the hover events

let test_button_1 = document.getElementById("my-button-1");

let test_button_2 = document.getElementById("my-button-2");

function testShow(){

	$("#content-div").show(600);

};

function testHide(){

	$("#content-div").hide(600);

};

test_button_1.addEventListener("click",testShow);

test_button_2.addEventListener("click",testHide);