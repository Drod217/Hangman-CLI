

// Letter guess function, spaces and _
var Letter = function(guess) {
    // guesses
    this.wordLetter = guess;
    // if the letter has been guessed
    this.showLetter = false;
    this.letterAppear = function () { 
        //accounting for blank word
        if (this.wordLetter === ' ') {
            this.showLetter = true;
            return ' ';
        }

        //blank or letter
        if (this.showLetter === true) {
            return ' ' + this.wordLetter + ' ';
        } else {
            return ' _ ';
        }
    };
};
//export needed for index
exports.Letter = Letter;