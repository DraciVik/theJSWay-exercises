/*
Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.
*/
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
let i = Number(prompt("please enter a number"));
if (i % 2 === 0) {
  console.log(`${i} is even`);
} else {
  console.log(`${i} is odd`);
}
