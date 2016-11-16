/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (i = 0; i < livingRoom.length; i++) {
  document.getElementById("q1").innerHTML += "<p>" + livingRoom[i] + "</p>";
}




// 2. Using a loop, log numbers 22-33 within their own paragraphs.
for (j = 22; j < 34; j++) {
  document.getElementById("q2").innerHTML += "<p>" + j + "</p>";
}




// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
for (k = 75; k < 101; k += 5) {
  document.getElementById("q3").innerHTML += "<p>" + k + "</p>";
}




// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.
for (l = 0; l < 5; l++) {
  document.getElementById("q4").innerHTML += "<p>This is how a professional loops.</p>";
}





// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

// FOR LOOP -----------
// for (m = 10; m < 111; m += 25) {
//   document.getElementById("q5").innerHTML += "</p>At home, I have" + " " + m + " " + "cats.</p>";
// }

// WHILE LOOP ------------
var n = 10;
while (n < 111) {
  document.getElementById("q5").innerHTML += "</p>At home, I have" + " " + n + " " + "cats.</p>";
  n += 25;
}





// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];
for (b = 0; b < numArray.length; b++) {
  if ((numArray[b] % 2 === 0) && (numArray[b] < 10)) {
  document.getElementById("q6").innerHTML += "<p>Even</p>";
} else if ((numArray[b] % 2 === 0) && (numArray[b] > 10)) {
  document.getElementById("q6").innerHTML += "<p>Even and greater than 10</p>";
} else {
  document.getElementById("q6").innerHTML += "<p>Odd</p>";
}
}




// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
var numThrees = [];
for (d = 0; d < numArray.length; d += 3) {
    numThrees.push(numArray[d]);
}
document.getElementById("q7").innerHTML = numThrees;


// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######
var pound = "#";
var v = 1;
while (v < 8) {
  document.getElementById("q8").innerHTML += "<p>" + pound + "</p>";
  pound += "#";
  v += 1;
}






// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
for (c = 0; c < 101; c++) {
  if (c % 3 === 0 && c % 5 !== 0) {
    console.log("Fizz");
  } else if (c % 5 === 0 && c % 3 !== 0) {
    console.log("Buzz");
  } else if (c % 3 === 0 && c % 5 === 0) {
    console.log("Fizzbuzz");
  } else {
    console.log(c);
  }
}




// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.
var human = prompt("Rock, paper, or scissors?");
var computer = Math.random();
var humanData = human.toLowerCase();

if (computer < 0.34) {
  computer = "rock";
} else if (computer > 0.33 && computer < 0.67) {
  computer = "paper";
} else {
  computer = "scissors";
}

document.getElementById("q10-15").innerHTML = "<p>Computer choice is" + " " + computer + ".</p>";
document.getElementById("q10-15b").innerHTML = "<p>Your choice?" + " " + human + ".</p>";


switch (humanData) {
  case "rock":
    if (computer === "rock") {
      document.getElementById("q10-15c").innerHTML += "<p>The game is a tie.</p>";
    } else if (computer === "paper") {
      document.getElementById("q10-15c").innerHTML += "<p>You lose!</p>";
    } else {
      document.getElementById("q10-15c").innerHTML += "<p>You win!</p>";
    }
    break;
  case "paper":
    if (computer === "rock") {
      document.getElementById("q10-15c").innerHTML += "<p>You win!</p>";
    } else if (computer === "paper") {
      document.getElementById("q10-15c").innerHTML += "<p>The game is a tie.</p>";
    } else {
      document.getElementById("q10-15c").innerHTML += "<p>You lose!</p>";
    }
    break;
  case "scissors":
    if (computer === "rock") {
      document.getElementById("q10-15c").innerHTML += "<p>You lose!</p>";
    } else if (computer === "paper") {
      document.getElementById("q10-15c").innerHTML += "<p>You win!</p>";
    } else {
      document.getElementById("q10-15c").innerHTML += "<p>The game is a tie.</p>";
    }
    break;
  default:
    document.getElementById("q10-15c").innerHTML += "<p>You didn't enter the right string.</p>"
}




// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
var largestNumCopy = largestNum.slice();
for (g = 0; g < largestNum.length; g++) {
  var largestNumSorted = largestNumCopy.sort(function(a, b) {return b - a;});
  if (largestNum[g] === largestNumSorted[0]) {
    document.getElementById("q16").innerHTML += "<p id='showLargestNum'>" + largestNum[g] + "</p>";
    document.getElementById("showLargestNum").className += "largestNumClass";
  } else {
    document.getElementById("q16").innerHTML += "<p>" + largestNum[g] + "</p>";
  }
}



// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)


var options = ["heads", "tails"];
var q17 = document.getElementById("q17");
q17.innerHTML = options[coin];
//
//
//
//
// // 18. Use a do/while loop to keep flipping the coin until you get tails.
//
var q18 = document.getElementById("q18");
do {
  var coin = Math.floor(Math.random() * 2);
  q18.innerHTML += "<p>" + options[coin] + "</p>";
} while (coin !== 1);
//
//
//
//


// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var q19 = document.getElementById("q19");
var size = 8;
var chessRow = " ";
for (q = 0; q < size; q++) {
  for (u = 0; u < size; u++) {
    if ((q + u) % 2 ===0) {
      chessRow += " ";
    } else {
      chessRow += "#";
    }
  }
  chessRow += "\n";
}
console.log(chessRow);


// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var q19 = document.getElementById("q19");
var size = 50;
var chessRow = " ";
for (q = 0; q < size; q++) {
  for (u = 0; u < size; u++) {
    if ((q + u) % 2 ===0) {
      chessRow += " ";
    } else {
      chessRow += "#";
    }
  }
  chessRow += "\n";
}
console.log(chessRow);





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
