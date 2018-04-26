//Input validation
/*Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.*/
for(let i = Number(prompt("Enter a number that is less than or equal to 100.")); i > 100; i) {
  i = Number(prompt("Enter a number that is less than or equal to 100."));
};


/*When you are done with the above, improve the program so that the terminating number is between 50 and 100.*/

for(let i = Number(prompt("Enter a number that is less than or equal to 100.")); i > 100 || i < 50; i) {
  i = Number(prompt("Enter a number that is less than or equal to 100."));
};
