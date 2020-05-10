var score = 0;
var timeEl = document.querySelector("#timer");

// TODO Time Interval
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
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

// Show total at end
alert("You got " + score + "/" + questions.length);
