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
    }
  ];

var startBtn = document.querySelector(".startButton");
var highScores = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var displayQuestions = document.querySelector("#questions");
var displayAnswers = document.querySelector("#answers");
var gameOver = document.querySelector("#gameOver");
var endingScore = document.querySelector("endingScore");
var initials = document.querySelector("#initialsInput");
var initialSubmit = document.querySelector("#initialSubmit");
var wrongOrRight = document.querySelector("#wrongOrRight");
var highScoresDiv = document.querySelector("#highScoresDiv");
var clearScores = document.querySelector("#clear");
var highScoresDisplay = document.querySelector("#highScoresDisplay");

