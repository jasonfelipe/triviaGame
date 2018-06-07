$( document ).ready(function() {


$('#startOverBtn').hide();
$('#image').html('<img style="left: 1000px", src="assets/images/start.gif"/>')


//QUESTIONS ARRAY OF OBJECTS
var triviaQuestions = [{
	question: "What year did the original Fallout game take place?",
	answerList: ["3066", "2025", "2010", "2077"],
	answer: 3
},{
	question: "What Vault did Fallout 3 start in?",
	answerList: ["13", "666", "76", "101"],
	answer: 3
},{
	question: "What is the maximum level you can have in Fallout 4?",
	answerList: ["Unlimited", "30", "100", "65,535"],
	answer: 3
},{
	question: "What country invaded Alaska in 2066?",
	answerList: ["China", "Africa", "Russia", "Australia"],
	answer: 0
},{
	question: "What is NOT a stat in SPECIAL?",
	answerList: ["Agility", "Luck", "Sneak", "Charisma"],
	answer: 2
},{
	question: "What is the protagonist's job in Fallout: New Vegas?",
	answerList: ["Postman", "Soldier", "Courier","Vault Dweller"],
	answer: 2
},{
	question: "Where is Fallout 2's the Chosen One from?",
	answerList: ["New Vegas", "Arroyo", "Mesa", "Phoenix"],
	answer: 1
},{
	question: "What country did the United States annex in 2076?",
	answerList: ["South Korea", "Mexico", "China", "Canada"],
	answer: 3
}];

//Our Variables
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;

//End messages
var messages = {
	correct: "GOOD JOB, FRIEND!",
	incorrect: "SORRY, BUT YOU'RE WRONG!",
	endTime: "GOT TO BE QUICKER NEXT TIME FRIEND!",
	finished: "LET'S SEE IF YOU ARE QUALIFIED FOR A SPOT IN THE VAULT!"
}

//Beginning Text
$('#instructions').html("HELLO SPECIAL PERSON! <br> This is a test to see if you are suitable to be a Vault Dwellers! <br> This test is timed so BE CAREFUL! <br> DON'T PANIC! <br><br> CLICK START TO BEGIN!")

//The Start Button
$('#startBtn').on('click', function(){
	$(this).hide();
	$('#instructions').hide();
	$('#image').empty();
	newGame();
});


//The Reset Button
$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){

	//Emptying our stuff and setting variables.
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	$('#qualified').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}


function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#image').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

//The Timer
function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}


function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
		$('#image').html('<img src="https://i.giphy.com/media/xUOxfg0ESyhKOv4Vva/giphy.webp" />')

	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		$('#image').html('<img src= "assets/images/dead.gif" />')


	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		$('#image').html('<img src= "assets/images/dead.gif" />')

		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 3000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 3000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');

	if (correctAnswer > 5) {
		$('#qualified').html("CONGRATULATIONS! YOU MAY NOW SURVIVE THE APOCALYPSE!")
		$('#image').html('<img src= "assets/images/win.gif" />')
	}
	else{
		$('#qualified').html("OUCH! YOU DIDN'T MAKE IT! TRY AGAIN?")
		$('#image').html('<img src= "assets/images/lose.gif" />')
	}
}

});
