var readlineSync = require('readline-sync');
var number1 = parseInt(readlineSync.question('Please enter a number \n'));
var number2 = parseInt(readlineSync.question('Please enter a number  \n'));

function makes10(num1 , num2) {
    if( Number.isInteger(num1) && Number.isInteger(num2))
    {
        (num1 + num2 == 10 )  ? console.log('makes 10') : console.log('nope');
    }
    else{
        throw console.error('The function need to get 2 integer only!');
        
    }

}
makes10(number1, number2)
