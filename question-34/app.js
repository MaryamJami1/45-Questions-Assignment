//Creating an array
var pizza = ["Chicken Malai boti", "Fajita", "Chicken Tikka"];
//using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//Print a message outside of for loop
console.log("Pizza is my 1st love");
console.log("I eat pizza");
