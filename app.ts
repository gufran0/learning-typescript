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

// Function 'addTwos' that takes a number and returns the number plus 2
function addTwos(num: number): number {
  return num + 2;
}
// we use number here because we are returning a number

const getHello = (s: string): string => {
  return "";
  // we need to return atleast something
};

addTwos(5);
// const heros = ["thor", "spiderman", "ironman"];
// heros.map((hero: string) => {
//   return `hero is ${hero}`;
// });
const heros = [1, 2, 3];

heros.map((hero: number): number => {
  return hero + 1;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
// void is used when we dont want to return anything
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
// never is used when we want to throw an error and never return anything or terminate the program

// object
const User = {
  name: "john",
  email: "john@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "john", isPaid: false });
let newUser = { name: "john", isPaid: false, email: "john@gmail.com" };
createUser(newUser);

// Use this function to create a new course with a name and payment status
// first () is for parameters and second {} is for return type and third {} is for object
function createCourse(): { name: string; isPaid: boolean } {
  return { name: "john", isPaid: false };
}
createCourse();

type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUserd(user: User): User {
  return { name: "", email: "", isActive: true };
}
createUserd({ name: "", email: "", isActive: true });
type MyString = string;
// alias is used to create a new name for a type
// alias is used when we want to create something more than one type

// Export an empty object to make this file a module

// readonly is used to make a property immutable
// example
type Person = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let person: Person = {
  _id: "123",
  name: "john",
  email: "john@gmail.com",
  isActive: true,
};
// person._id = "456";
// we cannot change the value of _id because it is readonly
// optional property is used when we dont want to pass a property to a function option is written as  hello  ?

type cardNumber = {
  cardNumber: number;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
// mixed object types

// array
const superHeros: string[] = ["thor", "spiderman", "ironman"];
const numbers: number[] = [1, 2, 3];
const heroPower: Array<string> = [];

type Users = {
  name: string;
  isActive: boolean;
};

const allUsers: Users[] = [];

allUsers.push({ name: "john", isActive: true });

const MLModels: number[][] = [
  [25, 89, 23, 45],
  [90, 45, 67],
];
// union is used when we want to assign more than one type to a variable
let score: number | string = 33;
score = 44;

score = "33";
type admin = {
  name: string;
};

type Admin = {
  name: string;
  id: number;
};

let hitesh: admin | Admin = { name: "hitesh", id: 334 };
hitesh = { name: "hitesh", id: 334 };

// function getDbId(id: number | string) {
//   console.log(`DB id is ${id}`);
// }

// getDbId(3);
// getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id + 2;
  }
}
getDbId(3);
getDbId("3");

// type narrowing
const data: (number | string)[] = [1, 2, 3, "4"];

data.push(4);

// tuple


export {};
