## Code-Quiz 


**NEED TO DO FOR README**
SCREENSHOT AND LINK TO DEPLOYED PAGE- YOUVE GOTTEN MARKED DOWN EVERY ASSIGNMENT
COMMENT JS FILE PLEASE

link to website with Q answers 
https://www.interviewbit.com/javascript-mcq/#javascript-is-an-_______-language



# User Story

    AS A coding boot camp student
    I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
    SO THAT I can gauge my progress compared to my peers

# Acceptance Criteria

    GIVEN I am taking a code quiz
    WHEN I click the start button
    THEN a timer starts and I am presented with a question
    WHEN I answer a question
    THEN I am presented with another question
    WHEN I answer a question incorrectly
    THEN time is subtracted from the clock
    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    WHEN the game is over
    THEN I can save my initials and score

    
    
  HTML Content:

    main container

        across top:
        high score link - timer + times up text


        div for holding questions and start screen

            start screen 
                start button

            quiz div
                question title
                buttons (one button per answer option)
                answer check with wrong: answer/explanation or correct: explanation

            score/end div
                h2 with title "youre score"
                form element - enter your initials
                <p> enter your initials
                submit button 


            high score section 
                headline2
                listofhighscores div

                <p> each high score is its own paragraph </p>
                
                <p> below high score paragraph destination, 2 buttons - "go back" - "clear high scores"


Alternate HTML Content: (bare minimum, and populate the HTML on the browser with JS)

body
    link to highscores html page

    container for quiz page - will display start page then questions, etc.
        timer
        questions div
            title for coding quiz 
            div to hold question choices 
            button at bottom of div to start time

Alt script- populating main page with questions each time (makes more since then displaying/hiding different elements)

1. create var/array with all queestions (title, choices, answer/explain)
2. Declate variables for initial counters (score and question index)
3. decplare variables for each element (current time count, start time button, questions div, main container)
4. declare and assign value for starting time variables (seconds left at beginning, hold interval, penatly)
5. declare a variable and create UL as the object

- event listener create timer and start on clicking timer, on click also render quiz question 1
- 
- Function to render quiz questions
    set initial variable innerHTMLs to ""
    create four options for each question

function to compare chosen question answer to actual
    responds with a message indicating correct answer

update question index after quiz q (questionIndex++)

if-statement to compare current questionIndex to total length.
    if index matches total length, run allDone() and display final score in creatDiv

allDone() function - emptys timer and questions divs and creates a page to view current score and log to high score counter.
    creates a new heading that says "All Done"
    creates a paragraph - appended to questions Div

    if statement to caluclate time remaining and replace with score
    creates a label element where you can enter initials
    create an input element for the label append to quiestionsdiv
    create submit button for input append to questions div

    add event listener to the submit button 
        compares value to null, if null alert(no value entered)
        else {var final score = { initials, score}, create allscores var that logs 
        createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
        

    


Third alternative (master-2)

HTML structure

    header with timer and view high scores 


    container for displaying quiz then becomes repopulated with high score page
        container for welcome to quiz page
            header
            p el
            button
    container for quiz
        header with question
        container with answers
            four buttons id=0-3 that are each an answer
    container to display after quiz ends to input high score
        header all done
        p -your final score
        p -enter your initials <input text>
        button to submit initials and score

    container to display high scores
        header highscores
        container for scores to be added
        two buttons - go back, cleaer selection 


alt 3 JS

one script that holds questions and their info


declare constants for welcome page elements queryselectors
declare constants for quiz page elements
constants for input score page elements
constants for high score page elements

declare universals variables 
    view scores, timer, create empty spaces to be populated by current score, time at start, etc.

function to start time
funciton to stop timer

function to clear current question and calls for dispaly of next question
function to display input score screen if on last question
function to compare answers
function to display a message for 2 seconds
function to hide elements
function to display elements
function to reset a local variable
function to render next question
function to render high scores stored in local storage

events:

click button to view high scores
    hides a bunch of stuff, renders some new stuff to page
click button to start quiz from welcome page
click button to check current answer and call next question if button is clicked
click button to create a score-object and push to local storge score arrays, calls to display high score page/render high scores
click button to go back to welcome page from high scores
button to clear scores from local storage

    
    
    Questions: 

    Java Script MCQs

    https://www.interviewbit.com/javascript-mcq/#javascript-is-an-_______-language
1.
Javascript is an _______ language?
object- oriented >

["Object-Oriented", "Object-Based", "Procedural", "None of the Above"]

2.
Which of the following keywords is used to define a variable in Javascript?
var
let
both AB
none
3.
Which of the following methods is used to access HTML elements using Javascript?
getElementbyID()
getElementsByClassName()
Both AB >>
none of the above


5.
Which of the following methods can be used to display data in some form using Javascript?
document.write()
console.log()
window.alert()
all of the above >>


6.
How can a datatype be declared to be a constant type?
const >>
var
let 
constant

7.
What will be the output of the following code snippet? 65b3
<script type="text/javascript">a = 5 + "9"; 
document.write(a); </script>
compilation error
14
runtime error 
59 >>> (its going to recognize the string, turn the number into a string, and then join the two strings) 
<script type="text/javascript" language="javascript">
    var a = "Scaler";
    var result = a.substring(2,4);
    document.write(result);

    </script>

al >>>>      the suvstring's values are the locations of the beginning and ends         of the substring
ale
cal
caler


8.
What will be the output of the following code snippet? f529


9.
What will be the output of the following code snippet? 581f

10.
When the switch statement matches the expression with the given labels, how is the comparison done?
both the datatype and result of the expression are compared  >>>>> switch performs an '====" expression
only the datatype of the expression is compared
only the value of the expression is compared 
none of the above

11. What does HTML stand for?
    hyper text markup language
    hot tomato meatloaf lozenge
    home tool markup language
    hesitant to make leaps

12. Choose the header tag with the largest text
    <h6>
    <header>
    <h2>
    <head>

13. Choose the correct HTML for linking a stylesheet
    <style src="mystyle.css>
    <stylesheet>mystyle.css<stylesheet>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <link style>



