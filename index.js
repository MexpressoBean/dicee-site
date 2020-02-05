
/************* START function definitions **************************************************************/
// Determines the text of the heading
function getWinner(randomNumber1, randomNumber2)
{
  // Changes font size of h1 heading before entering if statement
  document.querySelector("h1").style.fontSize = "6rem";

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if(randomNumber1 === randomNumber2)
  {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}


/************* END function definitions ****************************************************************/


/************* START Dice image manipulation ************************************************************/

// Generates random whole number between 1 and 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);  // Used for the left dice image
var randomNumber2 = Math.floor((Math.random() * 6) + 1);  // Used for the right dice image

// Changing left dice image using randomNumber1
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Changing right dice image using randomNumber2
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

/************* END Dice image manipulation **************************************************************/


/************* START h1 Manipulation **************************************************************/

getWinner(randomNumber1, randomNumber2); // Calls function getWinner() that changes h1 based on the winner of the dice roll
/************* END h1 Manipulation ****************************************************************/
