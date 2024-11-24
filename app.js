"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Start of Selection
// Declare a variable 'hisName' of type string and assign it the value "john"
var hisName = "john";
// Declare a variable 'hisAge' of type number and assign it the value 25
var hisAge = 25;
// string interpolation
// template string
// Log a message with 'hisName' and 'hisAge' using template literals
console.log("my name is ".concat(hisName, " and i am ").concat(hisAge, " years old"));
// Log the value of 'hisAge' to the console
console.log(hisAge);
// boolean
// Declare a boolean variable 'isLoggedIn' and assign it the value true
var isLoggedIn = true;
// Log the value of 'isLoggedIn' to the console
console.log(isLoggedIn);
// any is basically a type that can be anything which does not have any type safety so please avoid using it
// it is not any type safety
// Declare a variable 'hero' of type string without assigning a value initially
var hero;
// Function to get the name of the hero
function getHero() {
    // Return the string "thor"
    return "thor";
}
// Assign the result of 'getHero' function to 'hero' variable
hero = getHero();
// Function 'addTwo' that takes a number and returns the number plus 2
function addTwo(num) {
    // Return the sum of 'num' and 2
    return num + 2;
}
// Call the 'addTwo' function with the argument 5
addTwo(5);
// Function 'getUpper' that takes a string and returns it in uppercase
function getUpper(val) {
    // Return the uppercase version of 'val'
    return val.toUpperCase();
}
// Call the 'getUpper' function with the argument "hehe"
getUpper("hehe");
// Function 'signUpUser' that takes name, email, and password and returns a formatted string
function signUpUser(name, email, password) {
    // Return a formatted string with user details
    return "name is ".concat(name, " email is ").concat(email, " password is ").concat(password);
}
// Call the 'signUpUser' function with sample arguments
signUpUser("john", "john@gmail.com", "1234");
// Arrow function 'loginUser' that takes name, email, and an optional isPaid parameter with a default value of false
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // Return a formatted string with login details
    return "name is ".concat(name, " email is ").concat(email, " isPaid is ").concat(isPaid);
};
// calling loginUser function with name "john" and email "john@gmail.com"
// isPaid parameter is not passed so it will use default value of false
// Call the 'loginUser' function with name "john" and email "john@gmail.com"
loginUser("john", "john@gmail.com");
// Function 'addTwos' that takes a number and returns the number plus 2
function addTwos(num) {
    return num + 2;
}
// we use number here because we are returning a number
var getHello = function (s) {
    return "";
    // we need to return atleast something
};
addTwos(5);
// const heros = ["thor", "spiderman", "ironman"];
// heros.map((hero: string) => {
//   return `hero is ${hero}`;
// });
var heros = [1, 2, 3];
heros.map(function (hero) {
    return hero + 1;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// void is used when we dont want to return anything
function handleError(errmsg) {
    throw new Error(errmsg);
}
// never is used when we want to throw an error and never return anything or terminate the program
// object
var User = {
    name: "john",
    email: "john@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "john", isPaid: false });
var newUser = { name: "john", isPaid: false, email: "john@gmail.com" };
createUser(newUser);
// Use this function to create a new course with a name and payment status
// first () is for parameters and second {} is for return type and third {} is for object
function createCourse() {
    return { name: "john", isPaid: false };
}
createCourse();
function createUserd(user) {
    return { name: "", email: "", isActive: true };
}
createUserd({ name: "", email: "", isActive: true });
var person = {
    _id: "123",
    name: "john",
    email: "john@gmail.com",
    isActive: true,
};
