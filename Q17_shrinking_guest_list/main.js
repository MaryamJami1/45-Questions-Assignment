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
//inform that only two guest can come
console.log("unfortunately , new table want arraive on time, i can inivite only to guest");
//using while loop to remove guests
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " i cant not invite you to dinner"));
}
// sending inivitation last two guest
console.log("Invitation to the last 2 guests");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invites to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
