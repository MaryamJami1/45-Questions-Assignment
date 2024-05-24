//Dwfine a function with a rest parameter that accept item arguments representing our Sand
function make_sandwich(...item: string[]){
    console.log("\nMaking a sandwich with the following item: \n");
    
    item.forEach(singleItem => console.log(singleItem));

console.log("\nNow Enjoy Sandwich");
}

//Call the function 3 times with 3 different number of arguments
make_sandwich( "Cheese" , "Chicken", "Vegetables", "Mayo");

make_sandwich("Bread", "Egg");

make_sandwich("Bread", "Chicken" , "Lettuce" , "Cheese", "Egg", "Vegetables", "Mayo");