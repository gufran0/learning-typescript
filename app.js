"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hisName = "john";
var hisAge = 25;
// string interpolation
// template string
console.log("my name is ".concat(hisName, " and i am ").concat(hisAge, " years old"));
console.log(hisAge);
// boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// any is basically a type that can be anything which does not have any type safety so please avoid using it
// it is not any type safety
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hehe");
function signUpUser(name, email, password) {
    return "name is ".concat(name, " email is ").concat(email, " password is ").concat(password);
}
signUpUser("john", "john@gmail.com", "1234");
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "name is ".concat(name, " email is ").concat(email, " isPaid is ").concat(isPaid);
};
loginUser("john", "john@gmail.com");
