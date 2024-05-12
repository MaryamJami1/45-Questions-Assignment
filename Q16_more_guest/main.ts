
//creating a guest list array
let guestList= ["mahajabeen" , "lavishka" , "hareem" , "sara"];

//making variable for those who can not come
let dontCome = guestList[0];

//print the name of guest who can not come
console.log(dontCome, "You can't come");

//add or remove values from array
guestList.splice(0, 1, "Maleeha");

//message print
console.log("good news we have found a bigger table for a dinner");

// add new guest at starting index of array
guestList.unshift("Noor");

// add new guest at ending index of array

guestList.push("Aqsa")

// get a middle index of array
let middleIndex:number = Math.floor(guestList.length / 2);

//adding a new guest of middle index
guestList.splice(middleIndex, 0, "Hoorain");

//print to message updated list
console.log("updated list of guests");

//sending a invitation
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to join me`));
