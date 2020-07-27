var readlineSync = require('readline-sync');
var line = readlineSync.question('write something \n');
function update(line){
    var newline = line.split(' ').join('*')
    console.log(newline);
    
}
update(line)