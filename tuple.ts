const tuser: [string, number, boolean] = ["hc", 123, true];
// in tuple we have fixed number of elements and fixed types
// if we define a tuple with 3 elements then we cannot add more than 3 elements to it
// tuple is very helpful in api calls databases and other places where we want to store a specific type of data

let rgb: [number, number, number] = [255, 123, 112];
// this is a guranteed that all the elements are numbers

type Usere = [number, string];

const newUsere: Usere = [112, "example@example.com"];

newUsere[1] = "hc.com";
export {};
