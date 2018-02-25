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
