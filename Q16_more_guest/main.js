//creating a guest list array
var guestList = ["mahajabeen", "lavishka", "hareem", "sara"];
//making variable for those who can not come
var dontCome = guestList[0];
//print the name of guest who can not come
console.log(dontCome, "You can't come");
//add or remove values from array
guestList.splice(0, 1, "Maleeha");
//message print
console.log("good news we have found a bigger table for a dinner");
// add new guest at starting index of array
guestList.unshift("Noor");
// add new guest at ending index of array
guestList.push("Aqsa");
// get a middle index of array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest of middle index
guestList.splice(middleIndex, 0, "Hoorain");
//print to message updated list
console.log("updated list of guests");
//sending a invitation
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to join me")); });
