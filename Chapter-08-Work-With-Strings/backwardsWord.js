/*
Word info
Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
*/
const word = prompt("Enter a random word please!");
const lowerCaseWord = word.toLowerCase();
const upperCaseWord = word.toUpperCase();
console.log(lowerCaseWord, upperCaseWord);
/*
Vowel count
Improve the previous program so that it also shows the number of vowels inside the word.
*/
let numberOfVowels = 0;
const arrayFromWord = Array.from(lowerCaseWord);
arrayFromWord.forEach(vowel => {
  if(vowel === "a" || vowel === "e" || vowel === "i" | vowel === "o" || vowel === "u") {
    numberOfVowels++;
  }
});
/*
Backwards word
Improve the previous program so that it shows the word written backwards.
*/
let reverse = word.split("").reverse().join("");
