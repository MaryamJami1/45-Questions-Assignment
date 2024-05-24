//Define a function to Create a car object with optional options...
function create_car(manufacture, model, ...options) {
    //Initialize a car object with manufacturer and model
    let car = {
        manufacture: manufacture,
        model: model
    };

    //Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

//Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: true", "Year: 2024");

//print the variable to ensure all the information is stored in the car object
console.log(my_car);