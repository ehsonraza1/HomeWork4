var score = 0;
var secondsLeft = 60;
var rightAnswer;
var startBtn = document.querySelector("#startbtn");
var submitBtn = document.querySelector("#submitScore");
var clearBtn = document.querySelector("#clearHighscore");
var countDownEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions");
var quizPageEL = document.querySelector("#quizPage");
var score = document.querySelector("#score");
var end = document.querySelector("#gameover");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");

//TODO StartButton
startBtn.addEventListener("click", function () {});

//TODO Timer
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countDownEl.textContent = secondsLeft + " seconds left Scrub!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      pointsScreen();
    }
  }, 1000);
}

function pointsScreen() {
  countDownEl.textContent = " ";
  //FIXME Add dynamic HTML once Timer ends
}

setTime();

// TODO The array of questions for our quiz game.
var questions = [
  {
    q: "Commonly used data types DO NOTinclude?",
    a: "Strings",
    b: "Booleans",
    c: "Alerts",
    d: "Numbers",
    Answer: "c",
  },
  {
    q: "The condition in an if/else statement is enclosed within ____",
    a: "Quotes",
    b: "Curly brackets",
    c: "Paranthesis",
    d: "Square brackets",
    Answer: "b",
  },
  {
    q: "Arrays in JavaScript can be used to store ____.",
    a: "Numbers and Strings",
    b: "Other Arrays",
    c: "Booleans",
    d: "All of the Above",
    Answer: "d",
  },
  {
    q:
      "String values must be enlosed with ____ when being assigned to variables.",
    a: "Commas",
    b: "Curly brackets",
    c: "Quotes",
    d: "Parenthesis",
    Answer: "c",
  },
  {
    q:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for Loops",
    d: "console.log",
    Answer: "d",
  },
  {
    q: "Which one of these is the Best?",
    a: "Tish",
    b: "Brandon",
    c: "Peter",
    d: "Whoever Grades my late homework",
    Answer: "d",
  },
];
//TODO Questions
// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if (
    (answer === true && questions[i].a === "t") ||
    (answer === false && questions[i].a === "f")
  ) {
    // Increase score
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

//TODO submit button
submitBtn.addEventListener("click", function () {
  event.preventDefault();
});
//TODO clear btn
clearBtn.addEventListener("click", function(event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function(element) {
    element.textContent = "";
  });