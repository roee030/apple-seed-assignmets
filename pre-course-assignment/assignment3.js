const readlineSync = require('readline-sync');
const figlet = require('figlet');
const randomWords = require('random-words');

console.log(figlet.textSync('HANGMAN GAME!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

var guess = "";
var word = randomWords();
//console.log(word);
hideWord(word);
var c = "";
var gameFlag = true;
let guesses = 10;

while ( guesses != 0 && gameFlag != false)
{
    console.log(`You have ${guesses} guesses \nYou word is: \n${guess}`);
    c = readlineSync.question('What is you guess?\n');
    guessedWord(c);

}

//change the word to invisible by stars
function hideWord(word){
    for( let i = 0 ; i < word.length ; i++){
        guess += '*';
    }
}
//This function first check if the char is letter with to isLetter function below.
//And the function update the guesses number in the game.
//And also change the guess string. 
function guessedWord(singleGuess){
    if(isLetter(singleGuess))
    {
        let flag = false;
        if(singleGuess)
        for( let i = 0 ; i< word.length ; i++){
            if(singleGuess.toLowerCase() == word[i]){
                guess = setCharAt(guess,i,singleGuess)
                flag = true;
            }
        }
        if(!flag) guesses--;
    }
    
    if(guess.toLowerCase() == word)
    {   
        gameFlag = false;
        console.log("WOW You are good!");
        
    }
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }