var guestList = ["mahajabeen", "lavishka", "hareem", "sara"];
var unableToAttend = "lavishka";
// replace guest
var newGuest = "muskan";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
guestList.forEach(function (guestList) { console.log("dear ".concat(guestList, " would you like to join me for dinner?")); });
