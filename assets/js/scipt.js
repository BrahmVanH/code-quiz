var questions = [

    {
        title: "Which of the following ketwords is used to define a variable in JavaScript?",
        choices: ["var", "let", "Both A and B", "none"],
        answer: "Both A and B"
    },
    {
        title: "Which of the following methods is used to access HTML elements using JavaScript?",
        choices: ["getElementbyID()", "getElementsByClassName()", "Both A and B", "None of the Above"],
        answer: "Both A and B"    
    },
    {
        title: "Which of the following methods can be used to display data in some form using JavaScript?",
        choices: ["document.write()", "console.log()", "window.alert()", "All of the Above" ],
        answer: "All of the Above"
    },
    {
        title: "How can a data type be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: "const"
    },
    {
        title: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        choices: ["Both the datatype and the result of the expression are compared", "The switch performs an '===' expression", "Only the datatype of the expression is compared", "Only the value of the exression is compared", "None of the Above"],
        answer: "Both the datatype and the result of the expression are compared"
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hot Tomato Meatloaf Lozenge", "Home Tool Markup Language", "Hesitant to Make Leaps"],
        answer: "Hyper Text MarkupLanguage"
    },
    {
        title: "Choose the HTML tag that produces the largest text size.",
        choices: ["<h6>", "<header>", "<h2>", "<head>"],
        answer: "<h2>"
    },
    {
        title: "Choose the correct HTML for linking a stylesheet from a .CSS file",
        choices: ["<style src='mystyle.css>'", "<stylesheet>mystyle.css<stylesheet>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<link style>"],
        answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    },
    {
        title: "JavaScript is an _________ language.",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
        answer: "Object-Oriented"
    },
    {
        title: "What keyword is used to determine whether a given property is valid or not?",
        choices: ["in", "is in", "exists", "lies"],
        answer: "in"
    }
];





const viewHScoresBtn = document.querySelector("#viewScores");
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

// Global variables

var score = 0;
var currentQ = 0;
var highScores = [];
var timerInterval;
var timeLeft = 150;


// Function to start timer 

function startTimer() {

    timeLeft = 150
     timerEl.textContent = timeLeft

    var timerInterval = setInterval(function() {

        if (timeLeft >= 1) {
            
            timerEl.textContent = timeLeft;

            timeLeft--;

        } else {
            timerEl.textContent = '';

           // clearInterval(timerInterval);
            nextQuestion();
            


        }

        }, 1000);
}

// Function to stop timer

function stopTimer() {
    clearInterval(timerInerval);
}

// Function to move to next question

function nextQuestion () {

    currentQ++;

    if (currentQ < questions.length) {

        renderQuestion();
        
    } else {
        stopTimer();
        scoreEl.textContent = score;
        hideStuff(quizEl);
        showStuff(inputScoreEl);
        timerEl.textContent = 0;
    }



}

// Function to create question 

function renderQuestion() {
    
    questionEl.textContent = questions[currentQ].title;
    
    for (i = 0; i < answersEl.children.length; i++) {
    
        answersEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQ].choices[i]}`;
    
    }
}

// Function to compare user's answer to correct answer, displays according message

function compareAnswer(answer) {

    if (questions[currentQ].answer == questions[currentQ].choices[answer.id]) {

        displayMessage("Correct!")
        score++;
        
    } else {

        displayMessage('Wrong...')
        timeLeft -= 5;
    }

}

// Function to display the message associated with a correct or incorrect answer choice

function displayMessage(message) {
    var messageEl = document.createElement('div');

    messageEl.textContent = message;
    document.querySelector(".container").append(messageEl)
    setTimeout( function() {
        messageEl.remove();
    }, 2000);

}

// Used to hide elements not in use

function hideStuff(element) {
 
    element.style.display = 'none';
    

}

// Function to show hidden elements when needed

function showStuff(element) {

    element.style.display = 'block';

}

// Function to render high scores to score list from input score/initials screen

function renderHighScores() {

    scoreEl.innerHTML = '';
    showStuff(highScoresEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let personalScore = document.createElement('div');
        personalScore.className += 'row mb-4 p-1';
        personalScore.setAttribute('style', 'background-color:#65d4d');
        personalScore.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].userScore}`;
        scoreEl.append(personalScore);
    }


}

// create new div element called personal score
// assign += classes row, mb-4, p-1
// setattribute to score item, style, background-color #65d4d
// scoreItem.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].userScore}`;
// append the scoreItem as a child to scoresEl

function reset() {
    score = 0;
    currentQ = 0;
    secondsElapsed = 0;
    timerEl.textContent = 0;
}


// Button listener to display high scores
//  hides welcome, quiz, input score, renders high scores, stops the timer, resets everything

viewHScoresBtn.addEventListener('click', function() {

    hideStuff(welcomeEl);
    hideStuff(quizEl);
    hideStuff(inputScoreEl);
    renderHighScores();
    stopTimer();
    reset();
})



//Button listener to check answer selected and calls to next question
//  if statement, 

answersEl.addEventListener('click', function(b) {

    if (b.target.matches('button')) {
        compareAnswer(b.target);
        nextQuestion();
    }
})

// Start quiz button from welcome screen
//  hide welcome, start timer, render question, show quizel

startQuizBtn.addEventListener('click', function() {

    hideStuff(welcomeEl);
    startTimer();
    renderQuestion();
    showStuff(quizEl);
})

//Button to submit initials
//  let a new variable equal the trimmed version of the initials input by user
//  if statement (initValue), let userscore

submitBtn.addEventListener('click', function() {

    let initValue = initialsEl.value.trim();

    if (initValue) {
        let userScore = {username: initValue, userScore: score};
        initialsEl.value = '';
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore);
        localStorage.setItem('scores', JSON.stringify(highScores));
        hideStuff(inputScoreEl);
        renderHighScores();
        reset();
    }
})

//Go back button from high scores
//  hide high score el, show welcome page

// Cleaer scores button from high score page
//  highScores = [], set "scores" item in local storage to the stringified verson of highScores










