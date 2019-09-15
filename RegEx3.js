// 21.) Restrict Possible Usernames: 
// a) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// b) Username letters can be lowercase and uppercase.
// c) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}d*$/i; // (^ first letters) ($ last letters) (* 0 or more)
let result = userCheck.test(username); // this returns 'true'
