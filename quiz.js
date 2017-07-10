// initialize user score
var userScore = 0;
// begin questions
var questionOne = prompt('Which Transformer changed into a cassette deck?').toLowerCase();
var answerOne = 'soundwave';

var questionTwo = prompt('Who is the most popular UFC fighter ever?').toLowerCase();
var answerTwo = 'conor mcgregor';

var questionThree = prompt('Do you like dags?').toLowerCase();
var answerThree = 'yes';

var questionFour = prompt('Was Transformers better than G.I. Joe?').toLowerCase();
var answerFour = 'yes';

var questionFive = prompt('Is PHP awesome?').toLowerCase();
var answerFive = 'yes';
// check if answer is correct, and if so increase score by 1
if(answerOne === questionOne) {
  userScore++;
}

if(answerTwo === questionTwo) {
  userScore++;
}

if(answerThree === questionThree) {
  userScore++;
}

if(answerFour === questionFour) {
  userScore++;
}

if(answerFive === questionFive) {
  userScore++;
}
// output their score and their crown ranking
if(userScore === 5) {
  document.write('You got ' + userScore + ' out of 5 right. You get the gold crown');
} else if(userScore === 3 || userScore === 4) {
  document.write('You got ' + userScore + ' out of 5 right. You get the silver crown');
} else if (userScore === 1 || userScore === 2) {
  document.write('You got ' + userScore + ' out of 5 right. You get the bronze crown');
} else {
  document.write('You got ' + userScore + ' out of 5 right. You do not get a crown.');
}
  