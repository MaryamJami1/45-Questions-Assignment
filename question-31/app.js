//Creating an Array with 5 Values
var name1 = ["Ramsha", "Areeba", "Maryam", "Admin", "Haleema"];
//Remove all Values from our Array is Empty
name1 = [];
// If statement for checking Length of our array is Empty
if (name1.length === 0) {
    console.log("Your Array is empty We Need to find some users!");
}
else {
    // If Array is not empty use forEach Loop on Array
    name1.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status Report?\""));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
        }
    });
}
;
