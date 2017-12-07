// # JS Practice, Odin Project, Calculator


// ## Warm up functions
// Finds maximum number out of an array.
function my_max(numbers) {
	return Math.max.apply(Math, numbers);
}

// Takes a string and returns the number of vowels in it. (AEIOUY)
function vowel_count(phrase) {
	var numVowels = 0;
	var vowels = ["a", "e", "i", "o", "u", "y"];
	var lowPhrase = phrase.toLowerCase();

	for (i = 0; i < lowPhrase.length; i++)
	{
		for (j = 0; j < vowels.length; j++)
		{
			if (lowPhrase[i] === vowels[j])
			{
				numVowels++;
			}
		}
	}
	return numVowels;
}

// Takes a string, returns reversed character order
function reverse(saying) {
	var gniyas = [];
	var leng = saying.length;
	for (var i = 0; i <= saying.length; i++)
	{
		gniyas.push(saying[leng]);
		leng -= 1;
	}
	return gniyas;
}

/*
var question = [12, 18, 38, 2, 58, 10, 23];
var answer = my_max(question);
console.log(answer);

var phrase = "I b d e f H y uItnm bE";
console.log(vowel_count(phrase));

var saying = "Hi, how are you?";
console.log(reverse(saying));
*/
