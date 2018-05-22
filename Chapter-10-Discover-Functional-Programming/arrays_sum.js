/*
Arrays sum
Complete the following program to compute and show the total sum of the values in each of the arrays.

const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable

console.log(arraysSum); // Should show 31
*/

const arrays = [[1, 4], [11], [3, 5, 7]];
const flattenedArray = arrays.reduce((lvl1, lvl2) =>  lvl1.concat(lvl2), []);
const arraysSum = flattenedArray.reduce((acc, value) => acc + value, 0);
