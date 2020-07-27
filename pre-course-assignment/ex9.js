var readlineSync = require('readline-sync');
var number1 = parseInt(readlineSync.question('Please enter a positive number \n'));
var primes = [];
var isPrime = true; 
function primeNumbers(number1){
    for(var i = 2 ; i < number1 ; i++)
    {
        var isPrime = true; 
        for(var j = 2 ; j < i ; j++)
        {
           if(i % j == 0 ) {
               isPrime= false
               break;
           } 
        }
        if(isPrime) primes.push(i);
    }
    console.log(primes);
    
}
primeNumbers(number1)