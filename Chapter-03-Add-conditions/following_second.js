
// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
let hours = Number(prompt("Enter the hour"));
let minutes = Number(prompt("Enter the minute"));
let seconds = Number(prompt("Enter the seconds"));

if ((seconds === 59) && (minutes === 59) && (hours === 23)) {
      console.log(`00h00m00s`);
    } else if ((minutes === 59) && (seconds === 59)) {
      console.log(`${hours += 1}h${minutes = 00}m${seconds = 00}s`);
    } else if (seconds === 59) {
      console.log(`${hours}h${minutes += 1}m${seconds = 00}s`);
    } else {
      console.log(`${hours}h${minutes}m${seconds += 1}s`);
}
