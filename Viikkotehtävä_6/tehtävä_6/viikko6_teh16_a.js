
const ps = require('prompt-sync');
const prompt = ps();

var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");

if (num1 > num2) {
    console.log("First number " + num1 + " is bigger than second number " + num2);
} else if (num2 > num1) {
    console.log("Second number " + num2 + " is bigger than first number " + num1);
} else {
    console.log("The numbers are equal.");
}