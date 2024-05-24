//Define the function to show magicians name
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//function to make magician great through .map() it will modify array
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}

//Define an Array of magicians names
let magician_names = ["Harry", "Michel", "Robert"]

//Call make_great function to modify magician name 
let great_magicians = make_great(magician_names);

//Call show magician function that show modify list of magicians
show_magician(great_magicians)