// Define variables
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test for Equality and Inequality with Strings
console.log("Is apple is Equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not Equal to apple?");
console.log(apple != "apple");
//Test using Lowercase function
console.log("\nIs APPLE is Equal to apple after converrting to Lowercase? ");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is Not Equal to apple after converrting to Lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
//Numerical Tests
//Equal to
console.log("\nIs ten is Equal to twenty?");
console.log(ten == twenty);
//Not Equal to
console.log("\nIs ten is Not Equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//Smaller than
console.log("\nIs twenty is smaller than 10");
console.log(twenty < 10);
//Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Smaller than or Eqaual to
console.log("\nIS twenty is than or equal to 10? ");
console.log(20 <= 10);
//Test using "and" & "or" operators
//using &&
console.log("\n twenty is not equal to 10 and twenty is Greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is Greater than 30");
console.log(twenty != 10 && twenty > 30);
//Using || (OR)
console.log("\n twenty is greater than 50 OR twenty is equal to twenty");
console.log(20 > 50 || twenty == 20);
console.log("\n twenty is greater than 50 OR twenty is not equal to twenty");
console.log(20 > 50 || twenty != 20);
//Test whether an item is include in Array
console.log("\nIs orange include in my fruits Array?");
console.log(fruits.includes("orange"));
//Not include
console.log("\nIs orange not include in my fruits Array?");
console.log(!fruits.includes("orange"));
