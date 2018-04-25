
// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
const monthsInYear = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};
const monthNumber = Number(prompt("Enter a month number"));

monthNumber <= 12 && monthNumber >= 0 ? console.log(`The month you entered (${monthNumber}) has ${monthsInYear[monthNumber]} days`) : console.log("please enter a valid number");
