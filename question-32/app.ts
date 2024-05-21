//Array of current users
let currentUsers = ["Waqas", "abdullah", "Danish", "Shahbaz", "Jamil"]

//Array of new users
let newUsers = ["Aisha", "Hiba", "Waqas", "Areeba", "Abdullah"]

//loop through newUsers to check for userNames availability
newUsers.forEach(newOneUser => {

    //Making a condition for user name already exist and save in our condition variable
    let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())

    //Print different messages using if-else statement
    if (ourCondition) {
        console.log(`Sorry ${newOneUser} is already taken`);
    } else {
        console.log(`This user name ${newOneUser} is available`);
    }
})