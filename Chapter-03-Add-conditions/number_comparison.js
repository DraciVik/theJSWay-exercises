// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter another number"));

num1 === num2 ? "They are equal" : num1 > num2 ? `${num1} is bigger than ${num2}` : `${num1} is smaller than ${num2}`
