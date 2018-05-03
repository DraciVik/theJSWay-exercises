/*
Number squaring
Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
}

// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
*/

function square1(x) {
  return x * x;
}
const square2 = x => x * x;

/*
When it's done, update the program so that it shows the square of every number between 0 and 10.

Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)
*/
function square1(x) {
  for(let i = 0; i < 11; i++) {
    x = i;
    console.log(x * x);
  }
}
