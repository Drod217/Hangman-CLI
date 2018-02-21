
var wordBank = require('./Ganswers.js');
var wordLogic = require('./Word.js');
var letter = require('./letter.js');
var inquirer = require('inquirer');

console.log('\n');
console.log('********************************************************************');
console.log('\n');
console.log('GREEK GODS HANGMAN! Can you guess correctly?');
console.log('\n');
console.log('********************************************************************');
console.log('\n');

var hangman = {
    guessesLeft: 10,
    wordChosen: null,
    startGame: function(word) {
        this.guessesLeft = 10;
        this.wordChosen = new wordLogic.wordLogic(wordBank);
        this.wordChosen.splitWord();
        
        
        console.log('Result: ' + this.wordChosen.wordGuessResult());
        console.log('\n');

        this.promptPlayer();
    },
    promptPlayer: function() {
        var referred = this; 
        
        inquirer.prompt([
            {    
                name: "guessPrompt",
                message: "Guess a letter!"
            }
        ]).then(function(answer) {

            if (this.lettersGuessed === undefined) {
                this.lettersGuessed = answer.guessPrompt + ", ";
            } else {
                this.lettersGuessed += answer.guessPrompt.toString() + ", ";
            };
            
            console.log('-------------------------------------------------------------------');
            var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
            console.log('-------------------------------------------------------------------');

            if (guessResult === 0) {
                console.log('May Tyche favor your next guess!!')
                referred.guessesLeft -= 1; 
            } else if (guessResult !== 0) {
                console.log('Woot!')
                console.log('-------------------------------------------------------------------');

                if (referred.wordChosen.checkWordGuess()) {
                    console.log('-------------------------------------------------------------------');
                    console.log('\n');
                    console.log('Answer: ' + referred.wordChosen.word)
                    console.log('Whoa! Are you a Decedant of Homer?');
                    console.log('Can you guess the next one?!');
                    console.log('\n');
                    console.log('-------------------------------------------------------------------');
                    console.log('-------------------------------------------------------------------');
                    return; 
                }; 
            };

            console.log('-------------------------------------------------------------------');
            console.log('\n');
            console.log('Guesses remaining: ', referred.guessesLeft);
            console.log('\n');
            console.log('Result: ' + referred.wordChosen.wordGuessResult());
            console.log('\n');
            console.log('Letters guessed: ' + this.lettersGuessed);
            console.log('\n');
            console.log('-------------------------------------------------------------------');

            if ((referred.guessesLeft > 0) && (referred.wordChosen.correct === false)){
		    	referred.promptPlayer();
            } else if (referred.guessesLeft === 0) {
                console.log('\n');
                console.log("Athena favors you, the word was: '" + referred.wordChosen.word + "'. Next time!");
                console.log('\n');
                console.log('-------------------------------------------------------------------');
            } else {
                console.log(referred.wordChosen.wordGuessResult())
                console.log('-------------------------------------------------------------------');
            }

        });
    },
};

hangman.startGame();