var readlineSync = require('readline-sync');
var str = readlineSync.question('write something \n');

function charInArray (arr,c){
    for(var i = 0 ; i< arr.length ; i++)
    {
        if(arr[i] == c)
        {
            return true;
        }
    }
    return false
}
function capitalize (str){
    var vowel = ['a','e','i','o','u','y']
    for(var i = 0 ; i < str.length ; i++)
    {
        if(charInArray(vowel,str[i]))
        {
            str = setCharAt(str,i,str[i].toUpperCase());
        }
        
    }
    console.log(str);
    
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
capitalize(str)