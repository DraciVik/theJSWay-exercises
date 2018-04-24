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
