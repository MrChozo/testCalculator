// JS Practice, Odin Project, Calculator
//	-Brian

var my_max,	vowel_count, reverse;

// Finds maximum number out of an array.
function my_max (numbers)
{
	return Math.max.apply(Math, numbers);
}
/*var question = [12, 18, 38, 2, 58, 10, 23];
var answer = my_max(question);
console.log(answer);*/



// Takes a string and returns the number of vowels in it. (AEIOUY)
function vowel_count (phrase)
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
function reverse (saying)
{
	
}