# JavascriptHomeworkFour

The javascript starts with this.

document.getElementById("startButton").onclick = function (quiz){
    startQuiz();
    setTimer();
 disableButton();
 disableScores();
}

This function makes it so that when the start button is pressed the quiz starts, the timer is set, and the button and scores go away.

var secondsLeft = 0;
var ended = false;
function setTimer(){
  secondsLeft = (questions.length * 7);
  var timerInt = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if (ended == true){
      clearInterval(timerInt);
    }
    if (secondsLeft == 0){
      clearInterval(timerInt);
      wrongOrRight.textContent = "No More Time!"
      showResults();
}
  }, 1000);
}

This is the timer that counts down while you are taking the quiz.

function startQuiz(){

  if(questionCounter <= lastQuestion){
 
 var currentQ = questions[questionCounter].title;
 displayQuestions.innerHTML = currentQ;

 var btn1 = document.getElementById("btn0");
 var btn2 = document.getElementById("btn1");
 var btn3 = document.getElementById("btn2");
 var btn4 = document.getElementById("btn3");

 btn1.textContent = questions[questionCounter].choices[0];
 btn2.textContent = questions[questionCounter].choices[1];
 btn3.textContent = questions[questionCounter].choices[2];
 btn4.textContent = questions[questionCounter].choices[3];

 btn1.style.display = "inline";
 btn2.style.display = "inline";
 btn3.style.display = "inline";
 btn4.style.display = "inline";

 displayAnswers.appendChild(btn1);
 displayAnswers.appendChild(btn2);
 displayAnswers.appendChild(btn3);
 displayAnswers.appendChild(btn4);
}

This function displays the questions and answers of the multiple choice quiz which it gets from the array at the start of script.js.
