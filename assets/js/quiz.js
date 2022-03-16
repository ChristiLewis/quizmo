//SETTING MULTIPLE TIMERS TO SPLIT THE GRAPHIC LOCATION AS WELL AS THE WORD
let timerEl1 = document.getElementById('firstQ');
let timerEl2 = document.getElementById('secondU');
let timerEl3 = document.getElementById('thirdI');
let timerEl4 = document.getElementById('fourthZ');
let timerEl5 = document.getElementById('fifthM');
let timerEl6 = document.getElementById('sixthO');
let quizEl = document.getElementById('quiz')

let message = 
    `Inside the HTML document, where do you place your JavaScript code?', 'What operator is used to assign a value to a declared variable?', 'What are the six primitive data types in JavaScript?', 'What is the difference between && and ||?', 'How do we declare a conditional statement in JavaScript?', 'From the given array ["a", "b", "c", "d"] which index is the letter "b" on?`

// let questions = message.split('word ...?', ...'word ...?');
let questions = message.split(' ');

//COUNTDOWN FROM 7= NUMBER OF CHAR IN QUIZMO +1
function countdown() {
    let timeLeft = 7;

    //SETINTERVAL() METHOD TO CALL A FUNCTION EVERY 1000 MILLISECONDS
    let timeInterval = setInterval(function () {
        if (timeLeft > 6) {
            timerEl1.textContent = timeLeft + ' Q';
            //DECREMENT BY 1
            timeLeft--;
        } else if (timeLeft > 5) {
            timerEl2.textContent = timeLeft + ' U';
            timeLeft--;
        } else if (timeLeft > 4) {
            timerEl3.textContent = timeLeft + ' I';
            timeLeft--;
        } else if (timeLeft > 3) {
            timerEl4.textContent = timeLeft + ' Z';
            timeLeft--;
        } else if (timeLeft > 2) {
            timerEl5.textContent = timeLeft + ' M';
            timeLeft--;
        } else if (timeLeft > 1) {
            timerEl6.textContent = timeLeft + ' O';
            timeLeft--; 
        } else if (timeLeft === 1) {
            quizEl.textContent = timeLeft + ' GO!';
            timeLeft--;
        } else {
            //AT ZERO SET ALL TIMERS TO AN EMPTY STRING
            timerEl1.textContent = '';
            timerEl2.textContent = '';
            timerEl3.textContent = '';
            timerEl4.textContent = '';
            timerEl5.textContent = '';
            timerEl6.textContent = '';
            //CLEAR INTERVAL TO STOP THE TIMER FROM REPEATING
            clearInterval(timeInterval);
            //CALL DISPLAY MESSAGE() FUNCTION
            displayMessage();
        }    
        
    }, 1000);
}

//DISPLAYS MESSAGE - THIS CASE THE QUIZ QUESTION IN AN INTERVIEW SITUATION- THE QUESTION IS HEARD NOT VISUALIZED. THIS IS DIFFERENT AND MAY BE MORE DIFFICULT FOR SOME, FOR OTHERS IT MAY BE EASIER.
function displayMessage() {
    let questionCount = 0;
    //USE THE SETINTERVAL() METHOD TO CALL A FUNCTION TO BE EXECUTED EVERY 1000 MILLISECONDS
    let msgInterval = setInterval(function() {
        //IF THERE ARE NO MORE QUESTIONS LEFT IN THE MESSAGE
        if (questions[questionCount] === undefined) {
            //CLEAR INTERVAL STOPS TIMER
            clearInterval(msgInterval);
        } else {
            //DISPLAY ONE QUESTION OF THE MESSAGE
            quizEl.textContent = questions
            [questionCount];
            questionCount++;
        }

    }, 700);
}

countdown();