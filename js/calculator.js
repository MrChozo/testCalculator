/** 
 * JS-JQuery Practice
 * Odin Project
 * Calculator
 * -Brian
 *
 * Answer can only go up to: 9999999999999 while fitting in screen
 */

$(document).ready(function() 
{
	var add, multiply, divide, subtract, display;

	var operand1 = [];
	var operand2 = [];
	var operator = "";
	var firstNumIsStored = false;
	var secondNumIsStored = false;

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

// Number handling
	$(".number").click(function()
	{
		var numberText = $(this).text();

		if(!firstNumIsStored)
		{
			// Display button value in highScreen div
			$("#highScreen").text($("#highScreen").text() + numberText);
			// Push numbers in first operand
			operand1.push(parseInt(numberText));
		}
		else
		{
			// Clear highScreen
			$("#highScreen").text("");
			// Display button value in highScreen div
			$("#highScreen").text($("#highScreen").text() + numberText);
			// Store numbers in second operand.
			operand2.push(parseInt(numberText));
		}
	});

// Operators except Clear and Equals
	$("#numPlus, #numSub, #numMult, #numDiv").click(function()
	{
		// When an operator button is pressed, display it in lowScreen
		var opText = $(this).text();
		$("#lowScreen").text(opText);

		operator = opText;
		// 
	});

// When Clear button is clicked, clears both screens and resets stored values
	$("#numClr").click(function()
	{
		$("#highScreen, #lowScreen").text("");
		operand1 = [];
		operand2 = [];
		firstNumIsStored = false;
		secondNumIsStored = false;
	});

// When Equals button is clicked, calculate equation and return answer to screen.
	$("#numEqual").click(function()
	{
		if(firstNumIsStored && secondNumIsStored)
		{

		}
	});

}); // END $(document).ready


// Pure JavaScript, not sure if keeping these.
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

