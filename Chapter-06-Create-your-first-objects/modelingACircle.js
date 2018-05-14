/*
Modeling a circle
Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
*/

const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference() {
    return 2*Math.PI*r;
  },
  area() {
    return Math.PI*r*r;
  }
};
