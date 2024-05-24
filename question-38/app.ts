//Creating a function
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
    }
    
    //Calling the function 
    describe_city("karachi");
    
    describe_city("Lahore");
    
    describe_city("Islamabad");
    
    describe_city("Hunza", "Balochistan");