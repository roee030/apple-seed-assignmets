//init

var readlineSync = require('readline-sync');
var name = readlineSync.question('Hello please enter your name:  ');
console.log(`Hello ${name} you currently have 50 dollars!  `);
var amount = 50;
var flag = true;

//loop
while(flag && amount > 0)
{
    var bet = parseInt(readlineSync.question(`Enter your bet for the next round: 1 to ${amount} \n`));
    if( bet > amount || bet < 1 )
    {
        console.log('invalid amount \nI dont play with liars. \n');
     
    }
    else{
        var player1Bet = Math.floor(Math.random() * 12)+1; 
        var computerBet = Math.floor(Math.random() * 12)+1;

        console.log(`Your card is ${player1Bet} And my card is ${computerBet}`);

        if(player1Bet>computerBet)
        {
        amount += bet;
        console.log(`You Won ${bet}! and now you have ${amount} `);
        }
        else{
            amount-=bet
            console.log(`You Lost ${bet}! and now you have ${amount} `);
        }
    }
    if(amount > 0 ){
        var playAgain = readlineSync.keyInYN('Another game?');
        if(!playAgain) {
            flag = false
            console.log('bye bye');
        }
    }
    else{
        console.log('bye bye');
        
    }
    
}
