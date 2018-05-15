/*
Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
*/
const values = [3, 11, 7, 2, 9, 10];
let someValue = 0;
for(const value of values) {
  if(value > someValue) {
    someValue = value;
  };
};
console.log(someValue);
