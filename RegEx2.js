// 14. Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/g;
let matchedCriminals = crowd.match(reCriminals);
// without '+', returns "C,C,C"
// WITH '+', returns "CCC"
