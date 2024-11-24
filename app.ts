    // Start of Selection
    // Declare a variable 'hisName' of type string and assign it the value "john"
    let hisName: string = "john";

    // Declare a variable 'hisAge' of type number and assign it the value 25
    let hisAge: number = 25;
    
    // string interpolation
    // template string
    
    // Log a message with 'hisName' and 'hisAge' using template literals
    console.log(`my name is ${hisName} and i am ${hisAge} years old`);

    // Log the value of 'hisAge' to the console
    console.log(hisAge);
    
    // boolean
    // Declare a boolean variable 'isLoggedIn' and assign it the value true
    let isLoggedIn: boolean = true;

    // Log the value of 'isLoggedIn' to the console
    console.log(isLoggedIn);
    
    // any is basically a type that can be anything which does not have any type safety so please avoid using it
    // it is not any type safety

    // Declare a variable 'hero' of type string without assigning a value initially
    let hero: string;
    
    // Function to get the name of the hero
    function getHero() {
      // Return the string "thor"
      return "thor";
    }
    
    // Assign the result of 'getHero' function to 'hero' variable
    hero = getHero();
    
    // Function 'addTwo' that takes a number and returns the number plus 2
    function addTwo(num: number) {
      // Return the sum of 'num' and 2
      return num + 2;
    }
    
    // Call the 'addTwo' function with the argument 5
    addTwo(5);
    
    // Function 'getUpper' that takes a string and returns it in uppercase
    function getUpper(val: string) {
      // Return the uppercase version of 'val'
      return val.toUpperCase();
    }
    
    // Call the 'getUpper' function with the argument "hehe"
    getUpper("hehe");
    
    // Function 'signUpUser' that takes name, email, and password and returns a formatted string
    function signUpUser(name: string, email: string, password: string) {
      // Return a formatted string with user details
      return `name is ${name} email is ${email} password is ${password}`;
    }
    
    // Call the 'signUpUser' function with sample arguments
    signUpUser("john", "john@gmail.com", "1234");
    
    // Arrow function 'loginUser' that takes name, email, and an optional isPaid parameter with a default value of false
    let loginUser = (name: string, email: string, isPaid: boolean = false) => {
      // Return a formatted string with login details
      return `name is ${name} email is ${email} isPaid is ${isPaid}`;
    };
    
    // calling loginUser function with name "john" and email "john@gmail.com"
    // isPaid parameter is not passed so it will use default value of false

    // Call the 'loginUser' function with name "john" and email "john@gmail.com"
    loginUser("john", "john@gmail.com");


    
    
    // Export an empty object to make this file a module
    export {};
