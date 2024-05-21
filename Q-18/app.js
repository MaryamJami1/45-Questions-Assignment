var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Moving a array of countries and print its Original Order
var countriesToVisit = ["Turkey", "Dubai", "Italy", "Norway"];
console.log("Original Order:", countriesToVisit);
console.log("---------------------------------------------------------------------------------------");
// Print the array is Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("----------------------------------------------------------------------------------------");
//show that the Array still in its original order 
console.log("still in original order", countriesToVisit);
console.log("-----------------------------------------------------------------------------------------");
// Print the Array in Reversed Order without modifying the Actual Array list
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
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
