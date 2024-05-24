//Define the function to show magicians name
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//function to make magician great through .map() it will modify array
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}

//Define an Array of magicians names
let magician_names = ["Harry", "Michel", " Robbin"];

//Making a copy of Original array through .slice() function

let copy_magician_names = magician_names.slice()

//Modify the copied array to include "The Great" with their names
let copy_great_magician = make_great(copy_magician_names);

//Show both Arrays Original and copied

//Original
console.log("Original Array\n");
show_magician(magician_names);

//Copied
console.log("\nCopied Array\n");

show_magician(copy_great_magician);