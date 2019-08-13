// 1. Regular Expressions: Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// 2. Regular Expressions: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

// 3. Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString);

// 4.  Extract Matches- Using the Match Method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 

// 5. Find More Than the First Match Using -g Flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex);

// 6. Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// 7.  Match Single Character with Multiple Possibilities
// Character classes allow you to define a group of characters you wish to match by placing them  
// inside square ([ and ]) brackets. This searches for a literal pattern with flexibility.
// For example, you want to match "bag", "big", and "bug" but not "bog". You can do /b[aiu]g/ to do this. 
let quoteSample = "Beware of bugs in the above code.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
