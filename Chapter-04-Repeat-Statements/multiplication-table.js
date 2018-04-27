//Multiplication table
//Write a program that asks the user for a number, then shows the multiplication table for this number.
let n = 0
for(let i = Number(prompt("Enter a number please")); n <= 10; n++) {
  console.log(i * n);
};

//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let i;
for(i = Number(prompt("Enter a number please")); i < 2 || i > 9; i) {
  i = Number(prompt("Enter a number please"));
};
for(let n = 0; n < 11; n++) {
  console.log(i * n);
};
