//strings
let name = "Kavita";
document.write(name);

//Boolean=true or false
let isStudent = true;
document.write("<br>" + isStudent);

let x = "Kavita";
let y = 45;
document.write("<br>", x - y);

//Arrays : []

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "orange", "grapes"];
// mixed-type array
let mixedArray = [10, "apple", true, [1, 2, 3, 4]];
document.write("<br>", numbers[4]);
document.write("<br>", fruits[0]);
document.write("<br>", mixedArray[3][1]);

//objects :{}

let person = {
  firstname: "Kavitaa",
  lastname: "Patel",
  age: 22,
};

document.write("<br>", person.firstname);

//Conditional Statement

//if
let age = 28;
if (age >= 18) {
  document.write("<br>", "You're an adult");
}

//if-else

let a = prompt("Please enter the age : ");
if (a >= 18) {
  document.write("<br>", "You're an adult");
} else {
  document.write("<br>", "You're a minor");
  30;
}

//if else if statement

let grade = prompt("Please enter the marks :");
if (grade >= 90) {
  document.write("<br>", "A+");
} else if (grade >= 80) {
  document.write("<br>", "B");
} else if (grade >= 70) {
  document.write("<br>", "C");
} else {
  document.write("<br>", "F");
}

//switch
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}

// loops

// 1) while loop
let count = 0;
while (count > 3) {
  console.log(`Count is ${count}`);
  count = count + 1;
}

// 2) do-while loop
do {
  console.log(`Count is : ${count}`);
  count++;
} while (count > 3);

// 3) for loop
for (let i = 0; i < 3; i++) {
  document.write(`Count is ${i}`);
}

let arr = [
  "Saturday",
  1,
  45,
  67,
  "Sunday",
  { name: "Kavita", surname: "Patel" },
];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr[5].name); // Kavita

//Functions
// function functionName(parameters){
//code
// }

function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Kabir"); // function call ==> functionName(Argument)

function sum(a, b) {
  return a + b;
  console.log("hello");
}
console.log(sum(2, 3));

//Arrow function (ES6)

const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(92, 56));
console.log(`This is the output : ${subtract(36, 16)}`);

if (10 > 5) console.log(`10 is greater`);
else console.log(`5 is lesser`);

console.log(10 > 5 ? `10 is greater` : "5 is lesser");
