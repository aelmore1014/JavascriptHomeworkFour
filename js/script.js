var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        tile: "Arrays in Javasciprt can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {

    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
    },
    {
      title: "Which of the following function of String object returns the calling string value converted to lower case?",
      choices:["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
      answer: "toLowerCase()"
    },
  ];

var startButton = document.querySelector("#startButton");
var highScores = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var displayQuestions = document.querySelector("#qs");
var displayAnswers = document.querySelector("#as");
var endingScore = document.querySelector("endingScore");
var initials = document.querySelector("#initialsInput");
var initialsDiv = document.querySelector("#initialsInputDiv");
var initialSubmit = document.querySelector("#initialSubmit");
var wrongOrRight = document.querySelector("#wrongOrRight");
var highScoresDiv = document.querySelector("#highScoresDiv");
var clearScores = document.querySelector("#clear");
var highScoresDisplay = document.querySelector("#highScoresDisplay");
var finalScore = document.querySelector("#scoreCalculator");
var scoreCalculatorDiv = document.querySelector("#scoreCalculatorDiv");
var score = 0;



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

document.getElementById("startButton").onclick = function (quiz){
    startQuiz();
    setTimer();
 disableButton();
 disableScores();
}
  


var questionCounter = 0;
var lastQuestion = questions.length - 1;


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
else{
  ended = true;
  showResults();
}
}
displayAnswers.addEventListener("click", function(event){
  if(event.target.textContent == questions[questionCounter].answer){
    wrongOrRight.textContent = "Correct!";
    score++;
  }
  else{
   
      if(secondsLeft > 11){
    secondsLeft = secondsLeft - 10;
    wrongOrRight.textContent = "Wrong!";
      }
      else{
      ended = true;
      wrongOrRight.textContent = "Time is up!"
      showResults();
      }
  }

  questionCounter++;
  startQuiz();
})

function disableButton(){
  document.getElementById("startButtonDiv").style.display = "none";
}
function disableScores(){
  document.getElementById("initialsInputDiv").style.display = "none";
  document.getElementById("highScoresDiv").style.display = "none";
  document.getElementById("restart").style.display = "none";
}

function showResults(){
    displayAnswers.style.display = "none";
    displayQuestions.style.display = "none";
    var showScore = document.getElementById("scoreCalculator");
    var txt = document.getElementById("scoreCalculatorDiv");
    txt.textContent = "Quiz Complete! Press button to calculate your score."
    showScore.style.display = "block";
    showScore.textContent = "Calculate Score";
    showScore.style.margin = "auto";
    result.appendChild(showScore);
    }
    
   
    
    

document.getElementById("scoreCalculator").onclick = function (quiz){
 document.getElementById("scoreCalculator").disabled = "true";
 document.getElementById("initialsInputDiv").style.display = "block";
 document.getElementById("highScoresDiv").style.display = "block";
 document.getElementById("restart").style.display = "block";
  wrongOrRight.style.display = "none";
  score = score * 10;
  var timeBonus = 0;
  if(secondsLeft >= 40){
    timeBonus = 50;
  }
  else if(secondsLeft >= 30 && secondsLeft < 40){
    timeBonus = 40;
  }
  else if(secondsLeft >= 20 && secondsLeft < 30){
    timeBonus = 30;
  }
  else if(secondsLeft >= 10 && secondsLeft < 20){
    timeBonus = 20;
  }
  else{
    timeBonus = 0;
  }
  final = score + timeBonus;
  scoreBoard.textContent = "Your score is " + final + " Enter your initials below to save your score!";
  input.style.display = "block";
  }


