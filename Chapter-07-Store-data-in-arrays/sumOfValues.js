/*
Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
*/
const values = [3, 11, 7, 2, 9, 10];
values.reduce((a, b) => {
  return a + b;
}); // I would do it like this but it is not within the scope of this lesson

const values = [3, 11, 7, 2, 9, 10];
let sumOfValues = 0;
for(let i = 0; i < values.length; i++) {
  sumOfValues += values[i];
};
