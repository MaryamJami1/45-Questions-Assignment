//Array of current users
var currentUsers = ["Waqas", "abdullah", "Danish", "Shahbaz", "Jamil"];
//Array of new users
var newUsers = ["Aisha", "Hiba", "Waqas", "Areeba", "Abdullah"];
//loop through newUsers to check for userNames availability
newUsers.forEach(function (newOneUser) {
    //Making a condition for user name already exist and save in our condition variable
    var ourCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    //Print different messages using if-else statement
    if (ourCondition) {
        console.log("Sorry ".concat(newOneUser, " is already taken"));
    }
    else {
        console.log("This user name ".concat(newOneUser, " is available"));
    }
});
