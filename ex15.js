var readlineSync = require('readline-sync');
var len = readlineSync.question('Enter number \n');
arr=[]
var min = Number.MAX_SAFE_INTEGER
var max = 0
for(var i = 0 ; i < len ; i++)
{
    arr[i] = Math.floor(Math.random() *50 )+1
    if(arr[i] > max )
    {
        max = arr[i]
    }
    if( arr[i] < min )
    {
        min = arr[i]
    }
}
console.log(`min is ${min}\nmax is ${max}`);
