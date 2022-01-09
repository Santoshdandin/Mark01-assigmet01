var readlineSync = require('readline-sync');
var username = readlineSync.question('What is your name? ');

console.log('Hi ' + username + ' welcome to "Do you know Santosh" ');
console.log("\n")

var score = 0;

function play(question, answer) {
 var useranswer = readlineSync.question(question);

 if (useranswer == answer) {
   console.log('you are right');
   score = score + 1;
   console.log('your score is: ' + score);
 } else {
   console.log('you are wrong');
   console.log('Right answer is: ' + answer );
   
   console.log('your score is: ' + score);
   console.log('-----------------');
   console.log("\n")
 }
}

play('where do I live? ', 'Koppal');
play('Where do I work? ', 'Shiva agecies');
play('In which college I have completed my graduation? ', 'DSI');
play('Do I like programming? ', 'yes');
play('Which is my favourite character in marvel? ', 'Black panther');