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
