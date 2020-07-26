var readlineSync = require('readline-sync');
var str = readlineSync.question('write something \n');

function longestWord(str){
    var split = str.split(' ')
    split = str.replace(/[^a-zA-Z ]/g,'')
    var a = split.split(' ')
    
    
    

        
    var maxlength = 0
    var result;
    for(var i = 0 ; i < a.length ; i++)
    {
        if(a[i].length >= maxlength)
        {
            maxlength = a[i].length
            //console.log(split[i].length);
            
            result = a[i]
        }
        
    }
    console.log(result);
    
}
longestWord(str)