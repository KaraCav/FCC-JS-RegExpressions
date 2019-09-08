// 14. Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/g;
let matchedCriminals = crowd.match(reCriminals);
// without '+', returns "C,C,C"
// WITH '+', returns "CCC"

// 15.  Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // returns true if line begins with 'Cal'
let result = calRegex.test(rickyAndCal);

// 16. Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // returns true if last word is 'caboose'
let result = lastRegex.test(caboose);

// 17. Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;

// 18. Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; 
let result = quoteSample.match(nonAlphabetRegex).length;
