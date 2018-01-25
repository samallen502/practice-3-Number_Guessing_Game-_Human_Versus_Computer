var randomNumber = getRandomNumber(10);
var guess; /* This will hold the player's guess that's typed into the prompt. */
var guessCount = 0; /* How many times will the player need to guess to hit the correct answer? This will keep track of that. */
var correctguess = false; /* =true or =false makes this variable a "flag" in programmer lingo ... condition starts out false because all variables are set to "game just began" scenario ... line 17 will flip this true at the right time*/

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

/* This "do...while" loop will run 1x or more. */

do {
    guess = prompt ('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) { /* parseInt converts word string into a number ... see: http://teamtreehouse.com/library/javascript-basics-2/working-with-numbers/numbers-and-strings for details*/
        correctguess = true;
    }
} while ( ! correctguess) /* "!" = "not operator" = "NOT correct" ... this will either break the loop at the right time or end it ... either outcome is important to have coded in*/

/* Another way you could do Lines 13-19 above: use a break statement, like so...

while (true) {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount +=1;
    if (parseInt(guess) === randomnumber) {
        correctGuess = true;
        break;
    }
}
The "break" statement prevents an infinite loop.*/

/* You could also change Lines 23-29 to give the player a finite amount of guesses, like so...

while ( guessCount <10) {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount +=1;
    if (parseInt(guess) === randomnumber) {
        CorrectGuess = true;
        break;
    }
}

if ( correctGuess ) {
    document.write('<h1>You guessed the number!</h1>'); 
    document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber + ' correctly.')
} else {
    document.write('<h1>Sorry. You did not guess the number in time.')
}
*/

document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber + ' correctly.')