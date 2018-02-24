/*
Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
*/
const name = prompt("Enter your first name please");
const lastName = prompt("Enter your last name please");
console.log(`Hello ${name} ${lastName}`);

/*
Final values
Observe the following program and try to predict the final values of its variables.
*/
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b; //102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10

/*
VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
*/
let rawPrice = Number(prompt("Enter the raw price so you can get the final one"));
const VAT = 0.206;
let finalPrice = rawPrice * (1 + VAT);
console.log(finalPrice);
