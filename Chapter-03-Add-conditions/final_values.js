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
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

Initial values	   nb1 final value	    nb2 final value	      nb3 final value
nb1=nb2=nb3=4			    0                    4                     12
nb1=4,nb2=3,nb3=2			4                    3                      2
nb1=2,nb2=4,nb3=0	    3                    4                      0
