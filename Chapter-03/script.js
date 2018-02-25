/*
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/
const day = prompt("Enter a day name");
switch (day.toLowerCase()) {
    case "monday":
		console.log("The following day is Tuesday");
		break;
    case "tuesday":
		console.log("The following day is Wednesday");
		break;
    case "Wednesday":
		console.log("The following day is Thursday");
		break;
    case "Thursday":
		console.log("The following day is Friday");
		break;
    case "Friday":
		console.log("The following day is Saturday");
		break;
    case "Saturday":
		console.log("The following day is Sunday");
		break;
    case "Sunday":
		console.log("The following day is Monday");
		break;
    default:
		console.log("That is not a valid day");
  }

  // Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter another number"));

num1 === num2 ? "They are equal" : num1 > num2 ? `${num1} is bigger than ${num2}` : `${num1} is smaller than ${num2}`


// Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

Initial values	   nb1 final value	    nb2 final value	      nb3 final value
nb1=nb2=nb3=4			    0                    4                     12
nb1=4,nb2=3,nb3=2			4                    3                      2
nb1=2,nb2=4,nb3=0	    3                    4                      0
