/**
 * JS-JQuery Practice
 * Odin Project
 * Calculator
 * -Brian
 *
 * Answer can only go up to: 9999999999999 while fitting in screen
 */

var operand1 = [];
var operand2 = [];
var operator = "";
var firstNumIsStored = false;
var secondNumIsStored = false;

// Change key color on hover
$("#keys div").hover(function() {
		$(this).addClass("active");
	},
	function() {
		$(this).removeClass("active");
	}
);

// Number handling
$(".number").click(function() {
	var numberText = $(this).text();

	if(!firstNumIsStored) {
		// Display button value in highScreen div
		$("#highScreen").text($("#highScreen").text() + numberText);
		// Push numbers in first operand
		operand1.push(parseInt(numberText));
	}
	else {
		// Clear highScreen
		$("#highScreen").text("");
		// Display button value in highScreen div
		$("#highScreen").text($("#highScreen").text() + numberText);
		// Store numbers in second operand.
		operand2.push(parseInt(numberText));
	}
});

// Operators except Clear and Equals
$(".operator").click(function() {
	// When an operator button is pressed, display it in lowScreen
	var opText = $(this).text();
	$("#lowScreen").text(opText);

	operator = opText;
	//
});

// When Clear button is clicked, clears both screens and resets stored values
$("#clear").click(function() {
	$("#screen div").text("");
	operand1 = operand2 = [];
	firstNumIsStored = false;
});

// When Equals button is clicked, calculate equation and return answer to screen.
$("#equal").click(function() {
	if(firstNumIsStored) {}
});


// Takes two numbers, adds them
function add(num1, num2) {
	return num1 + num2;
}
// Takes two numbers, multiplies them
function multiply(num1, num2) {
	return num1 * num2;
}
// Takes two numbers, divides first by second
function divide(num1, num2) {
	return num1 / num2;
}
// Takes two numbers, subtracts first from second
function subtract(num1, num2) {
	return num1 - num2;
}

// Accepts a function and two ints, performs the function on the ints
function operate(func, num1, num2) {
	return func(num1, num2);
}

// Clears out number arrays

// Enters number into array
