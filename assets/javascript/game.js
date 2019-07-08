let marvelWords = ["Iron Man", "Stan Lee", "Thor", "Drax", "Peter Parker", "Tony Stark"];

let wins = 0;
let guessesLeft = 12;
let lettersGuessed = [];
let word = "";
let letterIndex = -1;

// resets values to begin new game
function resetValues() {
  guessesLeft = 12;
  lettersGuessed = [];
  word = "";
}

// picks new random word for user to guess
function newWord() {
  let wordChoice = marvelWords[Math.floor(Math.random() * marvelWords.length)];
  word = wordChoice.toUpperCase();
}

newWord();
console.log(word);

document.onkeyup = function(event) {
  let letterGuess = event.key
  let upLetterGuess = letterGuess.toUpperCase();
  let letterIndex = word.indexOf(upletterGuess);

  console.log(letterGuess);
  console.log(upLetterGuess);
  // console.log(upLetterGuess);
  console.log(word.indexOf(upLetterGuess));
  // console.log(word[1]);

  if ((word.indexOf(upLetterGuess)) != -1) {
    console.log(letterIndex);
  }
  else if (lettersGuessed.indexOf(letterGuess) == -1) {
    lettersGuessed.push(letterGuess);
    console.log(lettersGuessed);
  }
}
