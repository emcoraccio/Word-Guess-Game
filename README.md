# Word-Guess-Game

A responsive game that asks user's to guess a word related to Marvel.

## Layout

The javascript is set up with an object for the game which includes methods such as: 

* newWord 
    > establishes a new word for the user to guess
    > prevents user's from being presented with the same random word twice until all words have been cycled through

* setBlanks
    > takes random word and creates an array of underscores to display in place of the word

* isLetter 
    > ensures that the game only accepts user input which is a letter

* checkWin and checkLoss 
    > check to see if the game is over due to the player winning or losing

* newGame
    > pulls upon other functions to reset values and create a new word for the user to play again

This game uses jquery to access its html elements

*It is also very fun to play!*
**Enjoy!**

https://emcoraccio.github.io/Word-Guess-Game/