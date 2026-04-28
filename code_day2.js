//date:28/4

var a = "abhi";
var a = 90;

console.log(a);
// var must be avoided

let b = "Ram";
console.log(b);
b = 90;
console.log(b);
// cannot initialise same variable twice with let in same scope

const c = 3.41;
console.log(c);
//c = 909;
//cannot change values of const but
const d = [9, 8, 6];
console.log(d);
d.push(0);
console.log(d);
//const dosnt change the memory reference but u can add to it

// Functions

function greet(person) {
  return "Hello " + person;
}

//arrow function

const greetArrow = (person) => {
  return "Hello " + person;
};

// single line arrow
const greetArrowShorer = (person) => `Hello ${person}`;

console.log(greet("Jerry"));
console.log(greetArrow("Jerry"));
console.log(greetArrowShorer("Jerry"));

//Array Methods

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//map : its like a loop
const double = numbers.map((nums) => nums * 2);
console.log(double);
//filter: find and keeps matching elements
//multi-Line must have return -- One-Liner dosnt need return statement
const filtered = numbers.filter((nums) => {
  const result = nums % 2 === 0;
  return result;
});
console.log(filtered);
//find: finds for first matching element and stops
const finder = numbers.find((nums) => nums > 5);
console.log(finder);
// reduce : collapse array to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

//Destructuring :

const student = {
  name: "Abhishek",
  age: 22,
  city: "Mumbai",
};

// Old way
const studentName = student.name;
const studentAge = student.age;
console.log(studentName, "is of age ", studentAge);

// New way — destructuring
const { name, age, city } = student;
console.log(name, "is of age", age, "lives in", city);

// Rename while destructuring
const { name: fullName, age: years, city: City } = student;
console.log(fullName, "is of age", years, "lives in", City);

// Spread — expand an array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);
// Spread — copy an object
const original = { name: "Abhishek", age: 22 };
const copy = { ...original, city: "Mumbai" };
console.log("Copy:", copy);

// Rest — collect remaining arguments
const getFirst = (first, ...rest) => {
  console.log("First:", first);
  console.log("Rest:", rest);
};
getFirst(1, 2, 3, 4, 5);
