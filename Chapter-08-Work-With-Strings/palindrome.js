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
/*
Palindrome
Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

"radar" should be detected as a palindrome, "Radar" too.
*/
let regExpReplacing = /[^A-Za-z0-9]/g;
let wordWithoutSpaces = word.toLowerCase().replace(regExpReplacing, "");
let reversedString = wordWithoutSpaces.split("").reverse().join("");
reversedString === wordWithoutSpaces;
