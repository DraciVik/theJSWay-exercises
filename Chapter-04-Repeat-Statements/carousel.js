/*
Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.
*/

for(let i = 1; i <= 10; i++) {
  console.log(`turn number ${i}`);
};
//When it's done, improve it so that the number of turns is given by the user.
let userPrompt = prompt("Enter the number of turns");
for(let i = 1; i <= userPrompt; i++) {
  console.log(`Turn number ${i}`);
};
