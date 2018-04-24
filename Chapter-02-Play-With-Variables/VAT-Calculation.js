/*
VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
*/
let rawPrice = Number(prompt("Enter the raw price so you can get the final one"));
const VAT = 0.206;
let finalPrice = rawPrice * (1 + VAT);
console.log(finalPrice);
