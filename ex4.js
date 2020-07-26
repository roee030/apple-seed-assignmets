var readlineSync = require('readline-sync');

function restaurantRecommends () {
    //var
    var kosher;
    var kashrutLemehadrin;
    var kindOfFood = ['Meat and wine ', 'breakfast and chill', 'Sushi'],
    numberOfFeast = parseInt(readlineSync.question('Please enter a number invited \n'));

    //Kosher 
    if (readlineSync.keyInYN('Do you eat Kosher?')) {
        kosher = true;
        if (readlineSync.keyInYN('Do you eat Kashrut Lemehadrin?')){
            kashrutLemehadrin = true;
        }
        else{
            kashrutLemehadrin = false;
        }
    }
    else{
        kosher = false;
        kashrutLemehadrin = false;
    }
    //check kosher var
    if(kosher == undefined || kashrutLemehadrin == undefined)
    {
        throw new Error("Something went wrong! \n Answer the questions again \n");
    }
    //style of food
    index = readlineSync.keyInSelect(kindOfFood, 'Which type of food?');
    if( index == -1 ){
        return console.log('You did not pick a preference. try again.');
        
    }
    
    
    //the choice
    switch(index){
        case(0):
            if(kosher && kashrutLemehadrin){
                console.log('Your choice is: Night Kitchen ');
            }
            else if (kosher){
                console.log('Your choice is: America Burgers');
            }
            else{
                console.log('Your choice is: Goodness');
            }
            break;
        case(1):
            if(kosher && kashrutLemehadrin){
                console.log('Your choice is: Anastasia Cafe ');
            }
            else if (kosher){
                console.log('Your choice is: Origem Fresh Coffee ');
            }
            else{
                console.log('Your choice is: Day Kitchen ');
            }
            break;
        case(2):
            if(kosher && kashrutLemehadrin){
                console.log('Your choice is: Nini Hachi');
            }
            else if (kosher){
                console.log('Your choice is: Minna Tomei');
            }
            else{
                console.log('Your choice is: Sushi Bar Bazel');
            }
            break;

    }
    
}

restaurantRecommends()