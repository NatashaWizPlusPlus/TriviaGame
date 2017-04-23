$(document).ready(function() {
//Game instructions as given:
// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. 
//The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.
//Some global variables

//Make a start button with a click function

var correctAnswer = 0;
var incorrect=0;
var unanswered=0;


$("#startButton").on("click", function(){

//When start is clicked
//Start the Timer with 120 seconds
	var counter = 120;
	setInterval(function(){
		counter--;
		if (counter >= 0){
			span = document.getElementById("seconds");
			span.innerHTML = counter;
		}
		//When the timer hits zero
		//Display You are out of time!
		if (counter === 0){
			alert('You are out of time');
			clearInterval(counter);
			correctAnswer++;
			incorrect++;
			unanswered++;

			span.innerHTML = "Correct Answer" + correctAnswer;
			span.innerHTML = "Incorrect Answer" + incorrect;
			span.innerHTML = "Unanswered" + unanswered;
		}
	//Calling the function each second in miliseconds
	},1000);
	//When it hits zero, hide the timer with a hide function
});
//Display 5 questions with radio buttons
	//Each question has 4 options
		//One is right and 3 are wrong

$(".history").children().on("click", function(){
	// var vir = $(this).children().attr('id');
	// console.log(vir);
	if($(this).attr('id') == 'virginia'){
		correctAnswer++;
		span.innerHTML = correctAnswer;
	}
	else{
		incorrect++;
	}

})
$(".history").children().on("click", function(){
	// var vir = $(this).children().attr('id');
	// console.log(vir);
	if($(this).attr('id') == 'virginia'){
		correctAnswer++;
		span.innerHTML = correctAnswer;
	}
	else{
		incorrect++;
	}

})		

$(".history-year").children().on("click", function(){
	// var vir = $(this).children().attr('id');
	// console.log(vir);
	if($(this).attr('id') == 'johnrolfe'){
		correctAnswer++;
		span.innerHTML = correctAnswer;
	}
	else{
		incorrect++;
	}

})		

// 		if("#history"=== radio.virginia){
			
// 		}
// }

//Correct answers

//Incorrect Answers

//Unanswered




});

