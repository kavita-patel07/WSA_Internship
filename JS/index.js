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
