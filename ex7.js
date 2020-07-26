var readlineSync = require('readline-sync');
var number1 = parseInt(readlineSync.question('Please enter a positive number \n'));
var sum = 1;
var i = 1;
function fact(number1) {
    if(number1>=0)
    {
        while ( i <= number1)
        {
            sum*= i;
            i++
        }
    }
    else{
        console.log('this number is not positive');
    }
    console.log(sum);
    
    
}
fact(number1)