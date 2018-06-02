//Trivia Game

//Questions in a Div
//Answers as ABCD buttons or custom mouse-over stuff

//10 Seconds per question
//After 15 seconds, automatic lose, and then (5 seconds) next question
// which means innerHTML or .text stuff.

//needs score tracker?
//needs reset
//Alerts for winning or change HTML for winning?

//Questions
//How do you know each question would pertain to each answer?
//for example. would the answer in 'A' always be the same? Would it matter>
//Would you need an array with objects..Question and answer?
//Would the trivia need to be randomized? (Question 1 will be the same? Answer A will be the same?)
//THE VIDEO DOES NOT DO THIS. BUT MAYBE... JUST MAYBE WE CAN.

//Reset game, no page reload

//End game
//timer stops
//score is shown

$(document).ready(function() {


//--------------Variables----------------------
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var timer = 30;


//-----------Questions, Answers, And Wrong Arrays------------
var qandA = [
    {question: "What year did the original Fallout game take place?", answer: "2077"},
    {question: "What vault did Fallout 3 start in?", answer: "Vault 101"},
    {question: "What is the maximum level you can have in Fallout 4?", answer: "65,535"},
    {question: "What is NOT a stat in SPECIAL?", answer: "Sneak"},
    {question: "What is the protagonist's job in Fallout: New Vegas?", answer: "Courier"},
    {question: "Where is Fallout 2's the Chosen One from?", answer: "Arroyo"},
    {question: "What country did the United States annex in 2076?", answer: "Canada"},
    {question: "What country invaded Alaska in 2066?", answer:"China"}
];

var wrong = [
    {countries: ["Africa", "Russia", "Australia", "Britain", "France", "Japan"]},
    {years: ["3066", "2025", "2010", "2050", "2999", "2000"]},
    {jobs: ["Postman", "Soldier", "Vault Dweller", "Wanderer", "Bum", "Drug Dealer"]},
    {special: ["Strength", "Luck", "Perception", "Intellegence", "Agility", "Charisma", "Endurance"]},
    {places: ["New Vegas", "Phoenix", "Mesa", "Detroit", "Washington D.C.", "Springfield"]},
    {vaults: ["13", "666", "76", "777", "300", "001"]},
];

var answerArray = [];

//--------Game Logic---------

//Okay, so what we're trying to do is:
//get random wrong answers from an array to match each specific question
//so for instance, 
//question 1 = wrong[1].years
//question 2 = wrong[5].vaults
//and so forth
//so how do we do it?


//OK so this takes the Wrong Years array and takes 3 random things and puts them into our Answers Array!
for(var i = 0; i < 3; i++) {
    var idx = Math.floor(Math.random() * wrong[1].years.length);
    answerArray.push(wrong[1].years[idx]);
    wrong[1].years.splice(idx, 1);
}

//Also, we have to put those in an array which mixes up the answer and the fake answers, correct?
//So how do we do that?

//So let's splice in the qandA into this Answer Array yes?
answerArray.push(qandA[0].answer)

//Now lets randomize it.
function shuffle(answersArray) {
    var currentIndex = answersArray.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = answersArray[currentIndex];
      answersArray[currentIndex] = answersArray[randomIndex];
      answerArray[randomIndex] = temporaryValue;
    }
  
    return answersArray;
  }

//It works!
shuffledAnswers = shuffle(answerArray);
console.log ("This is our shuffled array:" + shuffledAnswers)

//-----------Text------------

//Game instructions... Should disappear after a start button is pressed.
$('#instructions').html("This is a test to see if you are suitable to be a proud member of the new society of Vault Dwellers!")

//Questions
$('#questions').text(qandA[0].question);

//OUR SHUFFLED ARRAY WORKS!!!
$('#answer1').text(shuffledAnswers[4]);
$('#answer2').text(shuffledAnswers[3]);
$('#answer3').text(shuffledAnswers[2]);
$('#answer4').text(shuffledAnswers[1]);
$('#answer5').text(shuffledAnswers[0])

});