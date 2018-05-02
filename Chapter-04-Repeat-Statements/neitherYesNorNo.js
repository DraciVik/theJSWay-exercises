/*
Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
*/
let userInput = prompt("Enter a 'yes' or a 'no' please");
while(userInput.toLowerCase() !== "yes" && userInput.toLowerCase() !== "no") {
  userInput = prompt("Please enter either a 'Yes' or a 'No'");
}
