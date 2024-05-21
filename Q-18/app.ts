//Moving a array of countries and print its Original Order
let countriesToVisit: string[] = ["Turkey", "Dubai", "Italy", "Norway"];
console.log("Original Order:", countriesToVisit);

console.log("---------------------------------------------------------------------------------------");


// Print the array is Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("----------------------------------------------------------------------------------------");


//show that the Array still in its original order 
console.log("still in original order", countriesToVisit);

console.log("-----------------------------------------------------------------------------------------");


// Print the Array in Reversed Order without modifying the Actual Array list
console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("-----------------------------------------------------------------------------------------");


//show that the Array still in its original order 
console.log("still in original order", countriesToVisit);

console.log("------------------------------------------------------------------------------------------");


//We have changed the original Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

console.log("-------------------------------------------------------------------------------------------");


//Print the to show back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

console.log("-------------------------------------------------------------------------------------------");


// print the Array to show that its order has been change in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

console.log("--------------------------------------------------------------------------------------------");


//We have changed again the original Array order now in reverse again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());

console.log("---------------------------------------------------------------------------------------------");