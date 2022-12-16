var questions = [

    {
        title: "Which of the following ketwords is used to define a variable in JavaScript?"
        choices: ["var", "let", "Both A and B", "none"]
        answer: "Both A and B"
    }
    {
        title: "Which of the following methods is used to access HTML elements using JavaScript?"
        choices: ["getElementbyID()", "getElementsByClassName()", "Both A and B", "None of the Above"]
        answer: "Both A and B"    
    }
    {
        title: "Which of the following methods can be used to display data in some form using JavaScript?"
        choices: ["document.write()", "console.log()", "window.alert()", "All of the Above" ]
        answer: "All of the Above"
    }
    {
        title: "How can a data type be declared to be a constant type?"
        choices: ["const", "var", "let", "constant"]
        answer: "const"
    }
    {
        title: "When the switch statement matches the expression with the given labels, how is the comparison done?"
        choices: ["Both the datatype and the result of the expression are compared", "The switch performs an '===' expression", "Only the datatype of the expression is compared", "Only the value of the exression is compared", "None of the Above"]
        answer: "Both the datatype and the result of the expression are compared"
    }
    {
        title: "What does HTML stand for?"
        choices: ["Hyper Text Markup Language", "Hot Tomato Meatloaf Lozenge", "Home Tool Markup Language", "Hesitant to Make Leaps"]
        answer: "Hyper Text MarkupLanguage"
    }
    {
        title: "Choose the HTML tag that produces the largest text size."
        choices: ["<h6>", "<header>", "<h2>", "<head>"]
        answer: "<h2>"
    }
    {
        title: "Choose the correct HTML for linking a stylesheet from a .CSS file"
        choices: ["<style src='mystyle.css>'", "<stylesheet>mystyle.css<stylesheet>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<link style>"]
        answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    }
    {
        title: "JavaScript is an _________ language."
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"]
        answer: "Object-Oriented"
    }
    {
        title: "What keyword is used to determine whether a given property is valid or not?"
        choices: ["in", "is in", "exists", "lies"]
        answer: "in"
    }
]





const viewHScoreEl = document.querySelector("#viewScores");
const timerEl = document.querySelector("#timer");

// WELCOME PAGE OBJECTS

const welcomeEl = document.querySelector("#welcomePage");
const startQuizBtn = document.querySelector("#startQuiz");

// QUIZ QUESTION OBJECTS

const quizEl = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");

// INPUT SCORE OBJECTS

const inputScoreEl = document.querySelector("#inputScore");
const scoreEl = document.querySelector("#score");
const initialsEl = document.querySelector("#initials");
const submitBtn = document.querySelector("#submitInitials");

// HIGH SCORES PAGE

const highScoresEl = document.querySelector("#highScores");
const scoreListEl = document.querySelector("#scoreList");
const goBackBtn = document.querySelector("#goBack");
const clearBtn = document.querySelector("#clearScores");

var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var secondsElapsed = 0;


function startTimer() {


}






