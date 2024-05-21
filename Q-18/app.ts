//Creating a Guest List Array
var guestList = ["Aqsa", "Hareem", "Maha", "Hussain"];
//Making variable for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "Nahi aah asakti");
//Add or Remove guest from guest list Array
guestList.splice(0, 1, "Miral");
//Message Print for Bigger table
console.log("Good news! We have found a bigger table for iftar");
//Adding a new guest at starting index of array
guestList.unshift("Ahmed");
//Adding a new guest at ending index of array
guestList.push("Moosa");
//Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Bilal");
//Print Message of updated list
console.log("Updated list of our guests");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Assalam-o-alaikum ".concat(oneguest, ", Would you like to Iftar with me?")); });
// Inform that only two guests can be invited for dinner
console.log("unfortunatily, the new dinner table want arrive on time, so I can only invite two guest to dinner with me");
//Using while .loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner`);
}
// Printing a invitations to the last two guest on the list
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", You are still invited to dinner")); });
// Removing last two Guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
