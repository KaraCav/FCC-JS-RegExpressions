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

// 6. Match Anything with Wildcard Period (.)
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

// 8. Match Letters of the Alphabet
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 

// 9. Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex);

// 10. Match Single Characters Not Specified
// You can create a negated character set (that you don't want to match) by placing a ^ after the opening bracket
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

// 11. Match Characters that Occur One or More Times Using +
let difficultSpelling = "Mississippi";
let myRegex = /ss+/gi; 
let result = difficultSpelling.match(myRegex);

// 12. Match Characters that Occur Zero or More Times Using *
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// 13.  Find Characters with Lazy Matching Using ?
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);
