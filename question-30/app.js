//Creating an arraay
var userName = ["Maryam", "Jamil", "Najma", "Admin", "Ahmed"];
//Using ForEach Loop on Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status Report?\""));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again"));
    }
});
