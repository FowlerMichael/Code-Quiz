var timerEl = document.getElementById("timer");
const start = document.getElementById("start-btn");
const questionsEl = document.getElementById("question");
const answersEl = document.getElementById("answer");
let secondsLeft = 10;
let score = 0;

const questions= [
    {
    question: "what is 1+1?",
    answers: [ {text: "1", correct: false},
    {text: "2", correct: true},
    {text: "3", correct: false},
    {text: "4", correct: false}
    ]
  },
  { question: "what is 2+2?",
    answers: [ {text: "1", correct: false},
    {text: "2", correct: false},
    {text: "3", correct: false},
    {text: "4", correct: true}
    ]
  },
 ];

start.addEventListener("click", function () {
    console.log("start");
    startQuiz();
    
});
    
function startQuiz() {
  document.getElementById("start-btn").style.display = "none";

   var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("Time is up!");
      }

  }, 1000);
}


function askQuestion() {
    questionEl.innerText = questions[0].question;
    questions[0].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
        button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerEl.appendChild(button);
    });


 }