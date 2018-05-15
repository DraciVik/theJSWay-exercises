/*
List of words
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/
let wordsArray = [];
for(let word = prompt("Enter stop or else"); word !== "stop"; word = prompt("Enter stop or else")) {
  wordsArray.push(word);
};
console.log(wordsArray);
