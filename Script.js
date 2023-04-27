var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
const start = document.getElementById("start-btn");
var currentQuestionIndex = 0;
let secondsLeft = 40;
let score = 0;
var questionText = document.getElementById("question");
var answer = document.getElementById("answers");
var displayText = document.getElementById("displayText");
var saveScore = document.getElementById("saveScore");

var question= [
    {
    question: ("what does HTML stand for?"),
    answers: [ "Hyper Text Markdown Language","Hyper Text Markup Language","Hyper Text Machine Language","Hyper Text Markup Leveler"],
    correctAnswer: "1"
  },
  { question: "what does CSS Stand for?",
    answers: [ "cascading style sheet", "cascading style syntax", "cascading syntax sheet", "code style sheet"],
    correctAnswer: "0"
  },
  { question: "what does JS Stand for?",
    answers: [ "java script", "java style", "java sheet", "java syntax"],
    correctAnswer: "0"
  },
  { question: "what does DOM Stand for?",
    answers: [ "document object message", "document option model", "document object model", "document of main"],
    correctAnswer: "2"
  },
  { question: "what does API Stand for?",
    answers: [ "application program interstyle", "application program intersheet", "application page interface", "application program interface"],
    correctAnswer: "3"
  },
 ];

start.addEventListener("click", function () {
    console.log("start");
    document.getElementById("start-btn").style.display = "none";
    startQuiz();
    askQuestion();
    
});

function startQuiz() {
  
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = "Score: " + score;
    
  var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft;

      if (secondsLeft <= 0 || currentQuestionIndex === question.length || score === 5) {
          clearInterval(timerInterval);
          console.log("game over!");
       
           resetGame();  
      }

  }, 1000);
}

function resetGame() {
 var gameOver = confirm("Game Over! Your score is " + score + " Would you like to play again?");
      if (gameOver === true) {
       secondsLeft = 20;
       currentQuestionIndex = 0;
       startQuiz();
       askQuestion();
       displayAnswers(currentQuestionIndex);
      } else {
          alert("Thanks for playing!");
         }
 }

function displayAnswers(currentQuestion) {
    for (let i = 0; i < currentQuestion.answers[i]; i++) {
      let answerBtn = document.createElement("button");
      answerBtn.textContent = currentQuestion.answers[i];
      answerBtn.setAttribute("class", "answer-btn");
      answerBtn.setAttribute("value", i);
      answer.appendChild(answerBtn);
    }
  }
  
  function askQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionInt = currentQuestionIndex + 1;
    questionText.textContent = questionInt + ". " + currentQuestion.question;
    answer.innerHTML = "";
  
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      let answerBtn = document.createElement("button");
      answerBtn.textContent = currentQuestion.answers[i];
      answerBtn.setAttribute("class", "answer-btn");
      answerBtn.setAttribute("value", i);
      answer.appendChild(answerBtn);
  
      answerBtn.addEventListener("click", function () {
        if (answerBtn.value === currentQuestion.correctAnswer) {
          score++;
          scoreEl.textContent = "Score: " + score;
          displayText.textContent = "Correct!";
        } else {
            secondsLeft -= 5;
            displayText.textContent = "Wrong!";
            
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < question.length) {
          askQuestion();
        } 
      });

      saveScore.addEventListener("click", function(event){
          event.preventDefault();
          var initials = document.getElementById("initials");
          var score = document.getElementById("score");
          localStorage.setItem("initials", initials);
          localStorage.setItem("score", score);
        });

     displayAnswers(currentQuestion);
    } 
}