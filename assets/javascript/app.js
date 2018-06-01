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

//--------------Variables----------------------
var correct = 0
var incorrect = 0
var unanswered = 0


//-----------Questions, Answers, And Wrong Stuff------------
var qandA = [
    {question: "What year did the original Fallout game take place?", answer: "2077"},
    {question: "What vault did Fallout 3 start in?", answer: "Vault 101"},
    {question: "What is the maximum level you can have in Fallout 4?", answer: "65,535"},
    {question: "What is NOT a stat in SPECIAL?", answer: "Sneak"},
    {question: "What is the protagonist's job in Fallout: New Vegas?", answer: "Courier"},
    {question: "Where is Fallout 2's the Chosen One from?", answer: "Arroyo"},
    {question: "What country did the United States annex in 2076?", answer: "Canada"},
    {question: "What country invaded Alaska in 2066?", answer:"China"}
]

var wrong = [
    {countries = ["Africa", "Russia", "Australia", "Britain", "France", "Japan"]},
    {years = ["2066", "1990", "2010", "2050", "3000", "2001"]},
    {jobs = ["Postman", "Soldier", "Vault Dweller", "Wanderer", "Bum", "Drug Dealer"]},
    {special = ["Strength", "Luck", "Perception", "Intellegence", "Agility", "Charisma", "Endurance"]},
    {places = ["New Vegas", "Phoenix", "Mesa", "Detroit", "Washington D.C.", "Springfield"]},
    {vaults = ["13", "666", "76", "777", "300", "001"]},
]

//--------Game Logic---------
