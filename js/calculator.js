// JS Practice, Odin Project, Calculator
//	-Brian

// JQuery for effects
$(document).ready(function() 
{
	// Change key color on hover
	$(".number, .operator").hover(
		function()
		{
			$(this).addClass("active");
		},
		function()
		{
			$(this).removeClass("active");
		}
	);

	// Display button value in highScreen div
	$(".number").click(function()
	{
		var numberText = $(this).text();
		$("#highScreen").text($("#highScreen").text() + numberText);
	});

	// When operator button is pressed, display it in lowScreen
	$("#numPlus, #numSub, #numMult, #numDiv").click(function()
	{
		var opText = $(this).text();
		$("#lowScreen").text(opText);
	});

	// When Clear button is clicked, clears both screens
	$("#numClr").click(function()
	{
		$("#highScreen, #lowScreen").text("");
	});
});

var add, multiply, divide, subtract, display;

var operand1 = [];
var operand2 = [];

// Takes two numbers, adds them
function add(num1, num2)
{
	return num1 + num2;
}
// Takes two numbers, multiplies them
function multiply(num1, num2)
{
	return num1 * num2;
}
// Takes two numbers, divides first by second
function divide(num1, num2)
{
	return num1 / num2;
}
// Takes two numbers, subtracts first from second
function subtract(num1, num2)
{
	return num1 - num2;
}

// Clears out number arrays

// Enters number into array

