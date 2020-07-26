var readlineSync = require('readline-sync');
var sum = 0;
function quiz (){
    var question= ['How many year are you developer?','How many software language you know?','Why are you submit Appleseed?','Do you love coding?','Last question, Do you have the power to success?']
    var myQuiz = [
        {
            question: " How many year are you developer?",
            answer : [0,1,2,3],
            rank: [0,1,2,3]
        },
        {
            question: " How many software language you know?",
            answer : [0,1,2,'3+'],
            rank: [0,1,2,3]
        },
        {
            question: " Why are you submit Appleseed?",
            answer : ['I want to success','I did not find a job ','I heard about them and I want to try','This is a great opportunity for me to learn from the best'],
            rank: [2,0,1,3]
        },
        {
            question: " Do you love coding?",
            answer : ['Yes','Not so much','I doing it since I was young','my parent pushing me'],
            rank: [2,0,3,1]
        },
        {
            question : " Last question, Do you have the power to success?",
            answer : ['I want to try and know ','Not sure','Yes!','Of course'],
            rank: [1,0,2,3]
        }
    ]
    for( var i in myQuiz ){
        index = readlineSync.keyInSelect(myQuiz[i].answer, question[i]);
        sum+=myQuiz[i].rank[index];
        console.log(index);
        
        
    }
    console.log(sum);
    
    if(sum >10 )
    {
        console.log('You are superstar! What are you doing here, Go and tech the next startup!');
        
    }
    else if( sum > 6 && sum <= 10){
        console.log('You are very good developer you need to maximize your abilities');
        
    }
    else if (sum <= 6){
        console.log('Your place is here with us in Appleseed... We will make you a hero!');
    }
}
quiz()