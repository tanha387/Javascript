//use of let
let firstName='Arnob';
firstName='Mina'
console.log(firstName);
//use of const
const name='Aksha';
console.log(name)
//use of var
var x=22;
var y=22;
var z=x+y;
console.log(z);

//Unary Plus Operator ( + )
let str1 = "12"; 

let num = +str1; 
console.log(num); 


console.log(typeof (num)) 



// Bitwise NOT, inverts all bits of 'num' 
   
let nums = 10; 
let result = ~nums; 

console.log(result);

//ternary operator
let num1=10;
let msg=num1%2==0?"Even":"Odd"
console.log(msg)

let msgg=num1*2?"Even":"Odd";
console.log(msgg)

//1. for...in loop:
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    // Inherited property from prototype (not shown in loop)
  };

  for(const persons in person)
  {
    console.log(`${persons}:${person[persons]}`)
  }

  //for of

const numbers = [1, 2, 3, 4, 5];


for (const number of numbers) {
  console.log(number);
}

//do while
let count = 0;

do {
  console.log("Count:", count);
  count++; // Increment count by 1
} while (count < 5);


//lexical scope

let names = "Alice"; // Outermost scope (global)

function greet() {
  let age = 30; // Inner scope (function)

  if (true) {
    let message = "Hello, " + names + "!"; // Block scope
    console.log(message);
  }

  console.log("Your age is: " + age); // Accessing age from function scope
}

greet();

// console.log(message);   // Error: message is not defined outside its block


//fucntion

  
function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); 
console.log(value);

//function expression

const functioName=function (name){
    return name*name;
}
const xy=functioName(4);
console.log(xy);

///arrow function
let myFunction1 = (a, b) => a * b; // Corrected the missing semicolon
const ab = myFunction1(3, 4);
console.log(ab); // Output: 12

//splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)

//map
const numb = [65, 44, 12, 4];
const newArr = numb.map(myFunction)

function myFunction(numb) {
  return numb * 10;
}


//reduce method
const n = [1, 2, 3, 4, 5];


const sum = n.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 15


//dot notation
const person1 = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person1.name); // John


//// Destructuring array
const numbers2 = [10, 20, 30];

const [first, second, third] = numbers2; 

console.log(first);  // Outputs: 10
console.log(second); // Outputs: 20
