// function to getLength of the string
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length, "\n");
}
getLength("Aman");

// find starting indexOf given string
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("AK", "K");

// find last starting IndexOf given string
function lastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
lastIndexOf("Aman Aman Aman", "Aman");

// slicing
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Aman Kumar Keshri", 0, 10); // end index not included

// substring
function getSubstring(str, start, length) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, length));
}
getSubstring("Aman Kumar Keshri", 0, 10); // last argument denotes length

// split
function splitString(str, seperator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(seperator));
}
splitString("Aman Kumar Keshri", " ");

// trim (remove starting and ending spaces of the string not in between)
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("  Hello  World  ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase(str));
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toLowerCase(str));
}
toLower("Hello World");
