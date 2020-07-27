var readlineSync = require('readline-sync');
var number1 = parseInt(readlineSync.question('please choose a number larger than 10\n'));

function largerThan10(number1) {
    while (number1 <= 10 )
    {
        number1 = parseInt(readlineSync.question("please choose a number LARGER than 10 \n"));
    }
    console.log('thanks');
    
}
largerThan10(number1)