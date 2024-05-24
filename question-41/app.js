//Define a function to print each magician name from an Array
function show_megicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Define an Array containing magician name
var magician_name = ["Harry", "Michel", "Robert"];
//Call the function to print each magician name
show_megicians(magician_name);
