// sets array of possible words for the game
let marvelWords = ["Iron Man", "Stan Lee", "Thor", "Drax", "Peter Parker", "Tony Stark"];

// sets variables to be used in the game
let wins = 0;
let losses = 0;
let guessesLeft = 12;
let lettersGuessed = [];
let word = ""
let userGuess = [];
let letterIndex = -1;

let scorecard = {
  wins: 0,
  losses: 0
}

// accessing specific html ids
let guessText = document.getElementById("guess");
let guessesText = document.getElementById("guesses-left");
let lettersGuessedText = document.getElementById("guessed-letters");
let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");

// setting beginning html
guessesText.innerHTML = guessesLeft;
winsText.innerHTML = wins;
lossesText.innerHTML = losses;


// resets values to begin new game
function resetValues() {
  guessesLeft = 12;
  guessesText.innerHTML = guessesLeft;
  lettersGuessed = [];
  lettersGuessedText.innerHTML = lettersGuessed;
  word = "";
  userGuess = [];
}

// picks new random word for user to guess
function newWord() {
  let wordChoice = marvelWords[Math.floor(Math.random() * marvelWords.length)];
  word = wordChoice.toUpperCase();
}


// sets word to be guessed to underscores 
function setBlanks() {
  for (i = 0; i < word.length; i++) {
    if (word[i] == " ") {
      userGuess.push("  ");
    }
    else {
      userGuess.push("_");
    }
  }
  guessText.innerHTML = userGuess.join("");
}

function checkWin() {
  if (userGuess.indexOf("_") == -1) {
    wins++;
    winsText.innerHTML = wins;
  }
}

function newGame() {
  resetValues();
  newWord();
  setBlanks();
}

function isLetter(event) {
  let key = event.keyCode;
  if ((key > 64 && key < 91) || (key > 96 && key < 123)) {
    return true;
  }
}

// when user presses a key...
document.onkeyup = function (event) {

  console.log(isLetter(event));
  // if key is a letter...
  if (isLetter(event)) {
    // set user's guess to uppercase letter
    let letterGuess = event.key.toUpperCase();

    // set variable for the letter guessed's position in the word
    let letterIndex = word.indexOf(letterGuess);

    // checks if user's guess is in the word or not
    if (letterIndex != -1) {
      console.log("first letter found at " + letterIndex);
      userGuess[letterIndex] = letterGuess;
      guessText.innerHTML = userGuess.join("");

      // checks for another instance of that letter in the word
      for (i = letterIndex; i < word.length; i++) {
        let letterFind = word.indexOf(letterGuess, (i + 1));
        // if there is another instance...
        if (letterFind != -1) {
          console.log("letter found at " + letterFind);
          // replace _ with letter user guessed and set it on the page
          userGuess[letterFind] = letterGuess;
          guessText.innerHTML = userGuess.join("");
          i = letterFind;
        }
        // otherwise end the for loop
        else {
          i = word.length;
        }
      }
      checkWin();
    }
    // if user's guess is not in the word, add it to the lettersGuessed array
    else if (lettersGuessed.indexOf(letterGuess) == -1) {
      if (guessesLeft == 0) {
        losses++;
        lossesText.innerHTML = losses;
      }
      else {
        lettersGuessed.push(letterGuess);
        guessesLeft--;
        guessesText.innerHTML = guessesLeft;
        lettersGuessedText.innerHTML = lettersGuessed.join(", ");
      }
    }
  }
}

// hide play button and instructions once game starts
// and show all components of game
$(document).ready(function () {

  //pressing the play button - hide instructions and play button
  $("button.playButton").on("click", function () {
    newGame();
    $("h2").addClass("inline")
    $(".logo").animate({ width: "80px" }, "slow");
    $(".show-init").hide("fast");
    $(".hide-init").show("slow");
  });



});
