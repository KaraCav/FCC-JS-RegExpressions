// 21. Restrict Possible Usernames: 
// a) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// b) Username letters can be lowercase and uppercase.
// c) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // (^ first letters) ($ last letters) (* 0 or more)
let result = userCheck.test(username); // this returns 'true'

// 22. Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// 23. Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);

// 24. Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,5} /; // {lower #, upper # of matches}
let result = ohRegex.test(ohStr); // true if Ohhh, Ohhhh, Ohhhhh

// 25. Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Return only if has at LEAST 4 z's
let result = haRegex.test(haStr);

// 26. Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // exactly 4 m's
let result = timRegex.test(timStr);

// 27. Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // will match with or without the "u"
let result = favRegex.test(favWord);
