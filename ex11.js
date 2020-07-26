var readlineSync = require('readline-sync');
var str = readlineSync.question('write something \n');
var flag;
function palindrome () {
    for(var i =0 ; i < str.length ; i++)
    {
        
        if(str[i] != str[str.length-i-1])
        {
            flag= false;
        }

    }
    (flag != false)?
        console.log('Its palindrome')
        :
        console.log('Its not palindrome');
        
}
palindrome(str)