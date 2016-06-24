// JS Practice, Odin Project, Calculator
//	-Brian

// Warm up functions
	var my_max,	vowel_count, reverse;

	// Finds maximum number out of an array.
	function my_max(numbers)
	{
		return Math.max.apply(Math, numbers);
	}
	/*var question = [12, 18, 38, 2, 58, 10, 23];
	var answer = my_max(question);
	console.log(answer);*/

	// Takes a string and returns the number of vowels in it. (AEIOUY)
	function vowel_count(phrase)
	{
		var numVowels = 0;
		var vowels = ["a", "e", "i", "o", "u", "y"];
		var lowPhrase = phrase.toLowerCase();

		for(i = 0; i < lowPhrase.length; i++)
		{
			for(j = 0; j < vowels.length; j++)
			{
				if(lowPhrase[i] === vowels[j])
				{
					numVowels++;
				}
			}		
		}
		return numVowels;
	}
	/*var phrase = "I b d e f H y uItnm bE";
	console.log(vowel_count(phrase));*/

	// Takes a string, returns reversed character order
	function reverse(saying)
	{
		var gniyas = [];
		var leng = saying.length;
		for (var i = 0; i <= saying.length; i++)
		{
			gniyas.push(saying[leng]);
			leng -= 1;
		}
		return gniyas;
	}
	/*var saying = "Hi, how are you?";
	console.log(reverse(saying));*/


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

