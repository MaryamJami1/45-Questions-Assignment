
let guestList = ["mahajabeen", "lavishka", "hareem", "sara"];

let unableToAttend = "lavishka"

// replace guest

let newGuest = "muskan"
guestList[guestList.indexOf(unableToAttend)] = newGuest;

guestList.forEach(guestList => {console.log(`dear ${guestList} would you like to join me for dinner?`)})