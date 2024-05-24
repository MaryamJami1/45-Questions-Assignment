//Define the function to show magicians name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magicians names
var magician_names = ["Harry", "Michel", "Robert"];
//Call make_great function to modify magician name 
var great_magicians = make_great(magician_names);
//Call show magician function that show modify list of magicians
show_magician(great_magicians);
